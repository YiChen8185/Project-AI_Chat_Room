from flask import Flask, request, jsonify, session
from flask_cors import CORS
from chat import Chat
from models import db, User, Team
from flask_session import Session

app = Flask(__name__)
CORS(app)

chat = Chat(model_name='gpt-3.5-turbo')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SECRET_KEY'] = 'secret'
db.init_app(app)
server_session = Session(app)


with app.app_context():
    db.create_all()

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

@app.route("/@me")
def get_current_user():
    user_id = session.get("user_id")
    if not user_id:
        return jsonify({"message": "No user logged in"}), 401
    user = User.query.filter_by(id=user_id).first()
    return jsonify({
        "id": user.id,
        "name": user.name,
    })

@app.route('/logout', methods=['POST'])
def logout():
    session.pop('user_id')
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
            session['user_id'] = new_user.id
            print("---------------------------------")
            print("DATA Create")
            return jsonify({'message': 'Account created'}), 201
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
                session['user_id'] = user.id
                print("---------------------------------")
                print("Logged in successfully")
                return jsonify({'message': 'Logged in successfully'}), 201
            else:
                return jsonify({'message': 'Incorrect password!'}), 409
        else:
            return jsonify({'message': 'Email does not exist!'}), 409

if __name__ == '__main__':
    app.run(debug=True)
