from .db import db, environment, SCHEMA, add_prefix_for_prod

class Review(db.Model):
    __tablename__ = 'reviews'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))
    movie_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("movies.id")))
    watched = db.Column(db.Boolean, nullable=False)
    watch_date = db.Column(db.String)
    rating = db.Column(db.Float)
    like = db.Column(db.Boolean)
    content = db.Column(db.String(5000))
    created_at = db.Column(db.String)
    updated_at = db.Column(db.String)

    movie = db.relationship("Movie", back_populates="reviews")
    reviewer = db.relationship("User", back_populates="reviews")

    def simple_review(self):
        return {
            'id': self.id,
            'watched': self.watched,
            'watch_date': self.watch_date,
            'rating': self.rating,
            'like': self.like,
            'content': self.content,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
        }

    def to_dict(self):
        return {
            'id': self.id,
            'watched': self.watched,
            'watch_date': self.watch_date,
            'rating': self.rating,
            'like': self.like,
            'content': self.content,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'movie': self.movie.simple_movie(),
            'reviewer': self.reviewer.simple_user()
        }
