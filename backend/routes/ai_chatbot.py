import os
from flask import Blueprint, request, jsonify
from flask_pymongo import ObjectId
from model import DB, vector
db = DB.db
from langchain.llms.cohere import Cohere

ai_chatbot = Blueprint("ai_chatbot", __name__)
llm = Cohere(cohere_api_key="Nh6iFUWoayVdNoPwyVYPmriuoqvdEvUb39kKz3Yq")


@ai_chatbot.route("/chat")
def ai_chatbot():
    question = request.get_json()["question"]
    prompt = f"You are a mentor bot. The user asks a question. You are going to answer as if you are a mentor. The user question is {question}"
    answer = llm.predict(prompt)
    return jsonify(answer)