from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User

profile_routes = Blueprint('profiles', __name__)



@profile_routes.route('/<int:profile_id>')
@login_required
def profile_details(profile_id):
    """
    Query for a profile by id and returns that profile in a dictionary
    """
    profile = User.query.get(profile_id)
    return profile.to_dict()

@profile_routes.route('/')
@login_required
def get_profiles():
    """
    Query for all profiles and returns them in a list of profile dictionaries
    """
    profiles = User.query.all()
    return {'profiles': [profile.to_dict() for profile in profiles]}
