import React, { useCallback, useEffect, useRef } from "react";
import api from '../api'
import './AIchat.css'
import { useState } from "react";
interface AIchatProps{
    onRefresh: (res:string)=>void;
}
const AIchat:React.FC<AIchatProps> = ({onRefresh}) => {
  
  
  const streamingRef = useRef(false);
    const [userPrompt, setUserPrompt] = useState('')
    const streamResponse = async(prompt:string)=>{
        if (streamingRef.current) {
          console.warn('Stream already in progress. Ignoring new request.');
          return;
        }
        streamingRef.current = true;
        try {
          const response = await fetch('http://localhost:8000/stream_summary', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name:prompt }),
          });
          const reader = response.body?.getReader();
          const decoder = new TextDecoder('utf-8');
          let done = false;

          let accumulate = '';
          while (!done && reader) {
            const { value, done: readerDone } = await reader.read();
            done = readerDone;
            if (value) {
              const chunkValue = decoder.decode(value, { stream: true });
              accumulate += chunkValue;
              onRefresh(accumulate)
            }
          }
        } catch (error) {
          console.error('Error streaming', error);
        } finally {
          streamingRef.current = false;
        }
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setUserPrompt(event.target.value);
    };
    return (
      <>
        <div className="container">
          <div className="search-container">
            <input className="input" type="text" value={userPrompt} onChange={handleChange} />
            <svg
              viewBox="0 0 24 24"
              className="search__icon"
              onClick={() => streamResponse(userPrompt)}
            >
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
          </div>
        </div>
      </>
    );
}

export default AIchat