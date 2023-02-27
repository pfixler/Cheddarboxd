from .db import db, environment, SCHEMA, add_prefix_for_prod
from .list_movie import list_movie

class List(db.Model):
    __tablename__ = 'lists'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(5000))
    public_list = db.Column(db.Boolean)
    created_at = db.Column(db.String)
    updated_at = db.Column(db.String)

    creator = db.relationship("User", back_populates="lists")
    movies = db.relationship("Movie", secondary=list_movie, back_populates="lists")

    def simple_list(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'public_list': self.public_list,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'creator': self.creator.username
        }

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'public_list': self.public_list,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'creator': self.creator.simple_user(),
            'movies': [movie.simple_movie() for movie in self.movies]
        }
