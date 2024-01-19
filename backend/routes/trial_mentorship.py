from flask import Blueprint, request, jsonify, send_file
from langchain.memory import ConversationBufferMemory
import whisper
import os
import torch
from TTS.api import TTS

memory = ConversationBufferMemory()
trial_mentorship_blueprint = Blueprint("trial_mentorship_blueprint", __name__)

@trial_mentorship_blueprint.route("/trial_mentorship", methods=["POST"])
def trial_mentorship():
    local = request.files["audio"]
    save_dir = "./audio"
    file_path = os.path.join(save_dir, local.name)
    with open(file_path, "wb") as f:
        f.write(local.getvalue())
    model = whisper.load_model("base", device="cpu")
    result = model.transcribe(file_path, fp16=False)
    transcribed_text = result["text"]
    os.remove(file_path)
    tts = TTS(model_name="tts_models/multilingual/multi-dataset/your_tts", progress_bar=True).to("cuda")
    tts.tts_to_file(transcribed_text, speaker_wav="./test.wav", language="en", file_path="./output.wav")
    return send_file("./output.wav", mimetype="audio/wav")