import os
from flask import Blueprint, request, jsonify
from flask_pymongo import ObjectId
from model import DB, vector
from langchain_openai import OpenAIEmbeddings

embedder = OpenAIEmbeddings(model="text-embedding-ada-002")

db = DB.db

mentors = Blueprint("mentors", __name__)

@mentors.route("/api/embedding")
def embed():
    mentors = db.mentors.find({}, {"expertise": 1})
    for mentor in mentors:
        skills = " ".join(mentor['expertise'])
        embeddings = embedder.embed_query(skills)
        db.mentors.find_one_and_update({"_id": mentor["_id"]}, {
            "$set": {
                "skill_embeddings": embeddings
            }
        })
    return "done"

@mentors.route("/api/search", methods=['POST'])
def search():
    payload = request.get_json()
    query_embedding = embedder.embed_query(payload['search'])

    cursor = vector.mentors.aggregate([
        {'$vectorSearch': {
                'queryVector': query_embedding, 
                'path': 'skill_embeddings', 
                'numCandidates': 100, 
                'index': 'skill_index', 
                'limit': 1
            }
        },
        {'$project': {
                '_id': 0,
                'skill_embeddings': 0
            }
        }
    ])
    
    result = next(cursor, None)

    return jsonify(list([result]))

@mentors.route("/api/getmentors")
def allMentors():
    mentors = db.mentors.find({}, {"_id": 0, "skill_embeddings": 0})
    return jsonify(list(mentors))