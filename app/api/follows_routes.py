from flask import Blueprint, request
from app.models import db, User
from flask_login import login_required, current_user
from app.forms import ReviewForm
from .auth_routes import validation_errors_to_error_messages, authenticate, unauthorized


follow_routes = Blueprint('follows', __name__)


@follow_routes.route('/user/<int:user_id>', methods=["POST"])
@login_required
def follow_user(user_id):
    """
    Follow user
    """

    user = User.query.get(user_id)
    current_user.following.append(user)
    db.session.commit()
    return user.network_user()


@follow_routes.route('/user/<int:user_id>', methods=["DELETE"])
@login_required
def unfollow_user(user_id):
    """
    Unfollow user
    """

    user = User.query.get(user_id)
    current_user.following.remove(user)
    db.session.commit()

    return {'Response': "Successfully Unfollowed"}
