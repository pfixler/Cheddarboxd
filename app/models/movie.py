from .db import db, environment, SCHEMA, add_prefix_for_prod
from .list_movie import list_movie
from .watchlist import watchlist

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

    on_watchlist = db.relationship("User", secondary=watchlist, back_populates="watchlist")

    #there will be a function for creating custom posters and backdrops with the movie title

    def poster_placholder(self):
        if self.poster_path is None:
            new_poster = 'https://i.imgur.com/Z2MYNbj.png'
            return new_poster
        return self.poster_path

    def backdrop_placeholder(self):
        if self.backdrop_path is None:
            new_backdrop = ''
            return new_backdrop
        return self.poster_path

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
            'poster_path': self.poster_placholder(),
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
            'poster_path': self.poster_placholder(),
            'release_date': self.release_date,
            'title': self.title,
            'video': self.video,
            'vote_average': self.vote_average,
            'vote_count': self.vote_count,
            'reviews': [review.simple_review() for review in self.reviews],
            'lists': [list.simple_list() for list in self.lists],
            'on_watchlist': [movie.simple_movie() for movie in self.on_watchlist]
        }
