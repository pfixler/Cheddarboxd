from flask import Blueprint
from app.models import Review, Movie
from flask_login import login_required, current_user
from app.forms import ReviewForm
from .auth_routes import validation_errors_to_error_messages, authenticate, unauthorized

review_routes = Blueprint('reviews', __name__)

@review_routes.route('/<int:review_id>')
def reviewDetails(review_id):
    """
    Query for a review by id and return that review in a dictionary
    """

    review = Review.query.get(review_id)
    return review.to_dict()

@review_routes.route('/movie/<int:movie_id>')
def getSpotReviews(movie_id):
    """
    Query for all reviews of a movie by that movie's id
    """

    reviews = Review.query.filter(id == movie_id)
    return {"Reviews": [review.simple_review() for review in reviews]}

@review_routes.route('/new', methods=["POST"])
@login_required
def createReview():
    """
    Query for a movie by id and append a new review to that movie
    """
