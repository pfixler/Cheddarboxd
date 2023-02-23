from .db import db, environment, SCHEMA, add_prefix_for_prod
from .list_movie import list_movie

class Movie(db.Model):
    __tablename__ = 'movies'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    backdrop_path = db.Column(db.String(1000))
    genre_ids = db.Column(db.String)
    tmdb_id = db.Column(db.Integer)
    original_language = db.Column(db.String)
    original_title = db.Column(db.String)
    overview = db.Column(db.String(5000))
    popularity = db.Column(db.Float)
    poster_path = db.Column(db.String)
    release_date = db.Column(db.String)
    title = db.Column(db.String)
    video = db.Column(db.Boolean)
    vote_average = db.Column(db.Float)
    vote_count = db.Column(db.Integer)

    reviews = db.relationship("Review", back_populates="movie", cascade="all, delete-orphan")
    lists = db.relationship("List", secondary=list_movie, back_populates="movies")

    def simple_movie(self):
        return {
            'id': self.id,
            'backdrop_path': self.backdrop_path,
            'genre_ids': self.genre_ids,
            'tmdb_id': self.tmdb_id,
            'original_language': self.original_language,
            'original_title': self.original_title,
            'overview': self.overview,
            'popularity': self.popularity,
            'poster_path': self.poster_path,
            'release_date': self.release_date,
            'title': self.title,
            'video': self.video,
            'vote_average': self.vote_average,
            'vote_count': self.vote_count,
        }


    def to_dict(self):
        return {
            'id': self.id,
            'backdrop_path': self.backdrop_path,
            'genre_ids': self.genre_ids,
            'tmdb_id': self.tmdb_id,
            'original_language': self.original_language,
            'original_title': self.original_title,
            'overview': self.overview,
            'popularity': self.popularity,
            'poster_path': self.poster_path,
            'release_date': self.release_date,
            'title': self.title,
            'video': self.video,
            'vote_average': self.vote_average,
            'vote_count': self.vote_count,
            'reviews': [review.simple_review() for review in self.reviews],
            'lists': [list.simple_list() for list in self.lists]
        }
