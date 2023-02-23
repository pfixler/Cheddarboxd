from app.models import Movie
from flask import Blueprint

movie_routes = Blueprint('movies', __name__)

@movie_routes.route('/')
def movies():
    """
    Query for all movies and returns them in a list of movie dictionaries
    """

    movies = Movie.query.all()
    return {'movies': [movie.to_dict() for movie in movies]}


@movie_routes.route('/<int:movieId>')
def movie(movieId):
    """
    Query for a movie by id and returns that movie in a dictionary
    """

    movie = Movie.query.get(movieId)
    return movie.to_dict()
