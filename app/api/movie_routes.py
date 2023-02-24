from app.models import Movie
from flask import Blueprint

movie_routes = Blueprint('movies', __name__)

@movie_routes.route('/')
def movies():
    """
    Query for all movies and return them in a list of movie dictionaries
    """

    movies = Movie.query.all()
    return {'Movies': [movie.to_dict() for movie in movies]}


@movie_routes.route('/<int:movie_id>')
def movie(movie_id):
    """
    Query for a movie by id and return that movie in a dictionary
    """

    movie = Movie.query.get(movie_id)
    return movie.to_dict()
