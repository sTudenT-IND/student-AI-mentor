import streamlit as st
import ChatTTS
import soundfile as sf
import os

st.set_page_config(page_title="AI TTS App", page_icon="🎙")

st.title("🎙 AI Text to Speech App (ChatTTS)")

text = st.text_area("Enter text here:")

if st.button("Generate Voice"):
    if text.strip() == "":
        st.warning("Please enter some text")
    else:
        with st.spinner("Generating speech..."):

            chat = ChatTTS.Chat()
            chat.load(compile=False)

            wavs = chat.infer([text])

            file_path = "output.wav"
            sf.write(file_path, wavs[0], 24000)

        st.success("Done!")

        st.audio(file_path)
        st.download_button("Download Audio", file_path)
