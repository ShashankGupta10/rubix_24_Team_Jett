from flask import Blueprint, request, jsonify, send_file
from langchain.llms.cohere import Cohere
import whisper
import os
import torch
from TTS.api import TTS

llm = Cohere(cohere_api_key=os.environ["COHERE_API_KEY"])
trial_mentorship_blueprint = Blueprint("trial_mentorship_blueprint", __name__)


@trial_mentorship_blueprint.route("/trial_mentorship", methods=["POST"])
def trial_mentorship():
    print(request.get_data())
    local = request.files["audio"]
    save_dir = "./audio"
    file_path = os.path.join(save_dir, local.name)
    print(local, file_path)
    with open(file_path, "wb") as f:
        f.write(local.read())
    model = whisper.load_model("base", device="cuda")
    result = model.transcribe(file_path, fp16=False)
    transcribed_text = result["text"]
    prompt_template = f"You are a mentor bot. You are talking to a student. The student says: {transcribed_text}. Your task is to help the student with their career guidance. Give them very general guidance to the questions they ask. You can also ask them questions about their career goals."
    llm_answer = llm.predict(prompt_template)
    os.remove(file_path)
    tts = TTS(model_name="tts_models/multilingual/multi-dataset/your_tts", progress_bar=True).to("cuda")
    tts.tts_to_file(llm_answer, speaker_wav="./routes/test.wav", language="en", file_path="./routes/output.wav")
    return send_file("./routes/output.wav", mimetype="audio/wav")