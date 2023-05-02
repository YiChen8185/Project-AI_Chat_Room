from flask_login import UserMixin
from sqlalchemy.sql import func
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Team(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    data = db.Column(db.String(10000))
    date = db.Column(db.DateTime(timezone=True), default=func.now())
    # Connect Note to User, User must exist
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True) # primary key
    email = db.Column(db.String(150), unique=True) # unique, user have unique emails
    password = db.Column(db.String(150))
    name = db.Column(db.String(150))
    teams = db.relationship('Team') # connect User to Note, User can have many Notes