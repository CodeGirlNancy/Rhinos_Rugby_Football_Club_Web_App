from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Player(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    position = db.Column(db.String(50), nullable=False)
    matches = db.Column(db.Integer, nullable=False)
    tries = db.Column(db.Integer, nullable=False)
    tackles = db.Column(db.Integer, nullable=False)
    profile_image = db.Column(db.String(255), nullable=True)