from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_pymongo import PyMongo
from bson import ObjectId
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, jwt_required, create_access_token
from datetime import datetime

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://localhost:27017/ecommerce'

CORS(app)
mongo = PyMongo(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)


from routes.trial_mentorship import trial_mentorship_blueprint

app.register_blueprint(trial_mentorship_blueprint)


@app.route('/')
def root():
    return 'Hello World'

if __name__ == '__main__':
    app.run(debug=True)

# Path: backend/app.py

