from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
import ChatTTS
import soundfile as sf
import uuid

app = FastAPI()

# allow frontend calls
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# load model once (IMPORTANT for speed)
chat = ChatTTS.Chat()
chat.load(compile=False)

@app.get("/")
def home():
    return {"status": "ChatTTS API running"}

@app.get("/tts")
def tts(text: str):
    wavs = chat.infer([text])

    file_name = f"{uuid.uuid4()}.wav"
    sf.write(file_name, wavs[0], 24000)

    return FileResponse(file_name, media_type="audio/wav")
