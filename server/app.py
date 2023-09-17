from flask import Flask, jsonify
from flask_cors import CORS
import requests
import os

app = Flask(__name__)
CORS(app)

NEWS_API_KEY = os.environ.get("NEWS_API_KEY")
NEWS_API_BASE_URL = 'https://newsapi.org/v2/'

@app.route("/")
def main():
    return "Success!"

def make_news_api_request(endpoint, params={}):
    url = f'{NEWS_API_BASE_URL}{endpoint}?apiKey={NEWS_API_KEY}'
    url += ''.join([f'&{k}={v}' for k, v in params.items()])
    response = requests.get(url)
    return jsonify(response.json()) if response.status_code == 200 else jsonify({'error': 'Failed to fetch news'})

@app.route("/search/<string:q>")
def search(q):
    params = {'q': q, 'sortBy': 'popularity'}
    return make_news_api_request('everything', params)

@app.route("/category/<string:c>")
def category(c):
    params = {'category': c, 'country': 'us'}
    return make_news_api_request('top-headlines', params)