import os
from flask_pymongo import PyMongo
from pymongo import MongoClient
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())

DB = PyMongo()
vector = MongoClient(os.environ['MONGODB_URI'])['rubix']