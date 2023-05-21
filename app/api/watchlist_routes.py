from flask import Blueprint, request
from app.models import db, User, Movie
from flask_login import login_required, current_user
from app.forms import ReviewForm
from .auth_routes import validation_errors_to_error_messages, authenticate, unauthorized


watchlist_routes = Blueprint('watchlist', __name__)


@watchlist_routes.route('/<int:user_id>')
def get_watchlist(user_id):
    """
    Get a user's watchlist
    """

    user = User.query.get(user_id)
    return {'Watchlist': [movie.simple_movie() for movie in user.watchlist]}

@watchlist_routes.route('/<int:movie_id>', methods=["POST"])
@login_required
def add_movie(movie_id):
    """
    Add movie to watchlist
    """

    movie = Movie.query.get(movie_id)
    current_user.watchlist.append(movie.simple_movie())
    movie.on_watchlist.append(current_user.simple_user())
    db.session.commit()

    return {'watchlist': [movie.simple_movie() for movie in current_user.watchlist]}

@watchlist_routes.route('/<int:movie_id>', methods=["DELETE"])
@login_required
def remove_movie(movie_id):
    """
    Remove movie from watchlist
    """

    movie = Movie.query.get(movie_id)
    current_user.watchlist.remove(movie)
    movie.on_watchlist.remove(current_user)
    db.session.commit()

    return {'watchlist': [movie.simple_movie() for movie in current_user.watchlist]}
