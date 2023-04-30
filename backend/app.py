from flask import Flask, request, jsonify
from flask_cors import CORS
from chat import Chat

app = Flask(__name__)
CORS(app)
chat = Chat(model_name='gpt-3.5-turbo')

@app.route('/')
def hello():
    return 'Hello, World!'

# curl -X POST -H "Content-Type: application/json" -d '{"question": "What is finance?"}' http://127.0.0.1:5000/ask_question
@app.route('/ask_question', methods=['POST'])
def ask_question():
    question = request.json['question']
    answer = chat.ask_question(question=question)
    print(question, answer)
    return jsonify({"answer": answer})

@app.route('/api/create-team', methods=['POST'])
def create_team():
    team_data = request.get_json()
    # Process team_data and save it to the MySQL database
    # Return a JSON response with a success message and the team ID
    team_id = 1

    return jsonify({"message": "Team created successfully", "team_id": team_id})


if __name__ == '__main__':
    app.run(debug=True)
