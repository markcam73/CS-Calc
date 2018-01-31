# server.py
from flask import Flask
from flask import jsonify
from flask import request #sends information back and accept.
from standard_dev import *

app = Flask(__name__)
from flask_cors import CORS
CORS(app)

@app.route("/")
def hello():
    return "nothing here"

@app.route("/variance", methods = ['POST'])
def calc_var():
    sample_data = request.json["data"]
    sample = parse(sample_data)
    s_sum = sum(sample)
    s_mean = mean(s_sum,sample)
    s_variance = variance(s_mean,sample)
    s_st_dev = st_dev(s_variance)

    #variance = 1234567    
    map = {
        "status": 200,
        #"sample": sample,
        "sum": s_sum,
        "mean": s_mean,
        "variance": s_variance,
        "st_dev": s_st_dev
    }

    return jsonify(map)
#parsed_array = standard_dev.parse()