from flask import Flask, request, jsonify
from flask_cors import CORS
from chat import Chat
from models import db, User, Team

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db.init_app(app)
chat = Chat(model_name='gpt-3.5-turbo')

with app.app_context():
    db.create_all()

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
    name = team_data['name']
    description = team_data['description']
    members = team_data['members']
    user_id = team_data['user_id']
    print("----------------enter_team-----------------")
    print(name + " " + description + " " + str(user_id) + " " + str(members))
    new_team = Team(name=name, description=description, members=members, user_id=user_id)
    db.session.add(new_team)
    db.session.commit()
    print("----------------team_created-----------------")

    return jsonify({"message": "Team created successfully", "team_name": name})

@app.route('/logout', methods=['POST'])
def logout():
    # session.pop('user_id')
    return jsonify({"message": "Logged out successfully"})


@app.route('/register', methods=['GET', 'POST'])
def sign_up():
    if request.method == 'POST':
        email = request.json['email']
        name = request.json['name']
        password1 = request.json['password1']
        password2 = request.json['password2']
        user = User.query.filter_by(email=email).first() # get user from database
        if user:
            return jsonify({'message': 'Email already exists.'}), 409
        elif name == '':
            return jsonify({'message': 'First name is required!'}), 409
        elif email == '':
            return jsonify({'message': 'Email is required!'}), 409
        elif password1 != password2:
            return jsonify({'message': 'Passwords don\'t match!'}), 409
        else:
            new_user = User(email=email, password=password1, name=name)
            db.session.add(new_user)
            db.session.commit()
            # session['user_id'] = new_user.id
            print("---------------------------------")
            print("DATA Create")
            return jsonify({'created': True}), 201
                # return redirect(url_for('views.home'))
    else:
        return "Failed"

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.json['email']
        password = request.json['password']
        print("----------------/login-----------------")
        print(email + " " + password)
        ## Get it!
        
        user = User.query.filter_by(email=email).first()
        if user:
            if user.password == password:
                # session['user_id'] = user.id
                print("---------------------------------")
                print("Logged in successfully: " + str(user.id))
                return jsonify({'user_id': user.id}), 201
            else:
                return jsonify({'message': 'Incorrect password!'}), 409
        else:
            return jsonify({'message': 'Email does not exist!'}), 409
        
@app.route('/y/create-team', methods=['POST'])
def api_create_team():
    name = request.json['name']
    description = request.json['description']
    user_id = request.json['user_id']
    print("----------------enter_team-----------------")
    print(name + " " + description + " " + str(user_id))
    new_team = Team(name=name, description=description, user_id=user_id)
    db.session.add(new_team)
    db.session.commit()
    print("----------------create_team-----------------")
    team_dict = {
    'id': new_team.id,
    'name': new_team.name,
    'description': new_team.description,
    'user_id': new_team.user_id
    }
    return jsonify({'team': team_dict}), 201

@app.route('/get-teams', methods=['POST'])
def get_teams():
    print("----------------get_team-----------------")
    print("id" + str(request.json['user_id']))
    user_id = request.json['user_id']
    teams = Team.query.filter_by(user_id=user_id).all()
    team_data = []
    
    for team in teams:
        print("team_name: " + str(team.name))
        team_data.append({
            'name': team.name,
            'description': team.description,
            'members': team.members,
        })
    print("----------------team_gotten-----------------")
    return jsonify({'teams': team_data}), 201


if __name__ == '__main__':
    app.run(debug=True)
