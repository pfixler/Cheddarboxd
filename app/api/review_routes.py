from flask import Blueprint, request
from app.models import Review, Movie, db, User
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

    movie = Movie.query.get(movie_id)
    return {"Reviews": [review.to_dict() for review in movie.reviews]}


@review_routes.route('/user/<int:user_id>')
def getUserReviews(user_id):
    """
    Query for all reviews of a user by that user's id
    """

    user = User.query.get(user_id)
    return {"Reviews": [review.to_dict() for review in user.reviews]}


@review_routes.route('/movie/<int:movie_id>', methods=["POST"])
@login_required
def createReview(movie_id):
    """
    Query for a movie by id and append a new review to that movie
    """
    form = ReviewForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    data = form.data
    if form.validate_on_submit():
        review = Review(
            user_id = current_user.id,
            movie_id = movie_id,
            watched = True,
            watch_date = data["watch_date"],
            rating = data["rating"],
            like = data["like"],
            content = data["content"],
            created_at = data["created_at"],
            updated_at = None
        )
        db.session.add(review)
        db.session.commit()
        return review.to_dict()

    return {"errors": validation_errors_to_error_messages(form.errors) }


@review_routes.route('/<int:review_id>', methods=["PUT"])
@login_required
def updateReview(review_id):
    """
    Query for a review by id and update that review
    """
    review = Review.query.get(review_id)
    form = ReviewForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    data = form.data
    if form.validate_on_submit():
        review.watch_date = data["watch_date"],
        review.rating = data["rating"],
        review.like = data["like"],
        review.content = data["content"],
        review.updated_at = data["updated_at"]

        db.session.commit()
        return review.to_dict()
    return {"errors": validation_errors_to_error_messages(form.errors)}


@review_routes.route("/<int:review_id>", methods=["DELETE"])
@login_required
def delete_single_review(review_id):
    review = Review.query.get_or_404(review_id)

    if review is None:
        return {"error": f"No review found with id {review_id}"}


    db.session.delete(review)
    db.session.commit()
    return {"success": "True", "status_code": 200}
