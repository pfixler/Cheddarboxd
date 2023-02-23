from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    first_name = db.Column(db.String(40))
    last_name = db.Column(db.String(40))
    bio = db.Column(db.String(1000))
    hashed_password = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.String)
    updated_at = db.Column(db.String)

    reviews = db.relationship("Review", back_populates="reviewer", cascade="all, delete-orphan")
    lists = db.relationship("List", back_populates="creator", cascade="all, delete-orphan")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def simple_user(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'bio': self.bio,
            'created_at': self.created_at,
        }

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'bio': self.bio,
            'created_at': self.created_at,
            'reviews': [review.to_dict() for review in self.reviews],
            'lists': [list.to_dict() for list in self.lists]
        }
