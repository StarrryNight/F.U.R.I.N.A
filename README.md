# Assistant App (F.U.R.I.N.A)

**F.U.R.I.N.A** stands for *Fantastic Unreal Responsive Intelligent Networked Assistant*.
This project is a cross-platform desktop AI assistant application, featuring a modern Electron/React frontend and a Python FastAPI backend that streams AI-generated responses.

---

## Features

- **Conversational AI**: Interact with an AI assistant in real time.
- **Streaming Responses**: Backend streams AI-generated text as you type.
- **Modern UI**: Built with React and Electron for a native-like desktop experience.
- **Customizable**: Easily extend or modify both frontend and backend.

---

## Tech Stack

- **Frontend**: Electron, React, TypeScript
- **Backend**: Python 3.10, FastAPI, OpenAI API
- **Communication**: HTTP (REST, streaming)
- **Other**: CORS enabled, environment variable support

---

## Project Structure

```
.
├── Backend/
│   └── venv/
│       ├── main.py         # FastAPI backend server
│       └── ...             # Python virtual environment files
├── furina/
│   ├── src/
│   │   └── renderer/       # React/Electron frontend
│   │       ├── App.tsx
│   │       └── components/
│   └── package.json        # Frontend dependencies and scripts
└── README.md
```

---

## Getting Started

### Prerequisites

- **Node.js** (for frontend)
- **Python 3.10+** (for backend)
- **OpenAI API Key** (set as `OPENAI_API_KEY` in a `.env` file in the backend)

### Backend Setup

1. Navigate to `Backend/venv/`.
2. (If not already done) Create and activate a Python virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```
3. Install dependencies:
   ```bash
   pip install fastapi uvicorn python-dotenv openai
   ```
4. Create a `.env` file with your OpenAI API key:
   ```
   OPENAI_API_KEY=your-key-here
   ```
5. Start the backend server:
   ```bash
   python main.py
   ```

### Frontend Setup

1. Navigate to `furina/`.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Electron app in development mode:
   ```bash
   npm start
   ```

---

## Usage

- Type your prompt in the input field and receive a streamed response from the AI.
- The backend runs on `localhost:8000` by default.
- The frontend connects to the backend for AI responses.

---

## Scripts

- **Start both frontend and backend (from `furina/`):**
  ```bash
  npm run start-all
  ```

---

## License

This project is licensed under the MIT License.

---

## Acknowledgements

- Built using [Electron React Boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate)
- Powered by [OpenAI](https://openai.com/)
