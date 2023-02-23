from flask import Blueprint
from app.models import Review
# from app.utilities import validation_errors_to_error_messages
from flask_login import login_required, current_user

review_routes = Blueprint('reviews', __name__)

@review_routes.route('/<int:review_id>')
def reviewDetails(review_id):
    """
    Query for a review by id and return that review in a dictionary
    """

    review = Review.query.get(review_id)
    return review.to_dict()


@review_routes.route('/movie/<int:movie_id>', methods=["POST"])
@login_required
def createReview(movie_id):
    """
    Query for a movie by id and append a new review to that movie
    """
