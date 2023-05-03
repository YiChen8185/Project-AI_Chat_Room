from flask import Flask, request, jsonify
from flask_cors import CORS
from chat import Chat

app = Flask(__name__)
CORS(app)
chat = Chat(model_name='gpt-3.5-turbo')

teams = []

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

    # Assign a unique ID to the team
    team_id = len(teams) + 1

    # Add the team to the in-memory storage
    team = {
        'id': team_id,
        'name': team_data['name'],
        'description': team_data['description'],
        'members': team_data['members']
    }
    teams.append(team)
    print(teams)

    return jsonify({"message": "Team created successfully", "team_id": team_id})



if __name__ == '__main__':
    app.run(debug=True)
