# server.py
from flask import Flask
from flask import jsonify
from flask import request
import * from standard_dev.py

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"

@app.route("/variance")
def calc_var():
    parsed_array = standard_dev.parse()