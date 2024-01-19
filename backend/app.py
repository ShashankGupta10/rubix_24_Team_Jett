import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_pymongo import PyMongo
from bson import ObjectId
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, jwt_required, create_access_token
from datetime import datetime
from dotenv import find_dotenv, load_dotenv

load_dotenv(find_dotenv())

app = Flask(__name__)

app.config['MONGO_URI'] = os.environ['MONGO_URI']

from model import DB

DB.init_app(app)
CORS(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

from routes.trial_mentorship import trial_mentorship_blueprint
from routes.mentor import mentors

app.register_blueprint(trial_mentorship_blueprint)
app.register_blueprint(mentors)

@app.route('/')
def root():
    return 'Hello World'

if __name__ == '__main__':
    app.run(debug=True)
