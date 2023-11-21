from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.get("/get_todo_items")
def get_todo_items():
    return jsonify({
        "todoItems": ["item1", "item2", "item3"]
    })

@app.post("/add_todo_item")
def add_todo_item():
    content = request.json
    print(content)
    return {}

@app.post("/delete_todo_item")
def delete_todo_item():
    content = request.json
    print(content)
    return {}
