import uvicorn
from fastapi import FastAPI 
from fastapi.responses import StreamingResponse, Response
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from typing import List
from openai import OpenAI
import time

from dotenv import load_dotenv
import os

load_dotenv()
app = FastAPI()
client = OpenAI(api_key = os.getenv("OPENAI_API_KEY"))

class sendObject(BaseModel):
    name:str

origins = ["*"
]
#initialize middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins= origins,
    allow_methods = ["*"],
    allow_headers=["*"],
)


def stream_from_openAI(inputPrompt: str):
    res = client.responses.create(
        model = "o4-mini",
        instructions = " Formatting Instructions: Do NOT list out or restate the raw nodes or edges. Use only the following HTML tags: <h1>, <h2>, <ul>, <li>, <p>. Do NOT include backticks, code blocks, or comments.",
        input = inputPrompt.name,
        stream = True
    )
    for chunk in res:
        if chunk.type == 'response.output_text.delta':
            yield chunk.delta

@app.post('/stream_summary', response_model=str)
async def streamSummary(inputPrompt:sendObject):
    streaming = True
    startTime = time.time()
    if streaming:
        response = StreamingResponse(stream_from_openAI(inputPrompt),media_type='text/plain')
    else:
        response = Response(stream_from_openAI(inputPrompt), media_type='text/plain')
     
    stream_from_openAI(inputPrompt)
    endTime = time.time()
    duration = endTime - startTime
    print("responded in "+ str(duration)+" seconds")
    return response
if __name__ == "__main__":
    uvicorn.run(app, host = "localhost", port= 8000)
