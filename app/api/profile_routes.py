from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, db
from app.forms import EditProfileForm
from .auth_routes import validation_errors_to_error_messages, authenticate

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

@profile_routes.route('/<int:profile_id>', methods=["PUT"])
@login_required
def update_profile(profile_id):
    """
    Update Profile
    """
    profile = User.query.get(profile_id)
    form = EditProfileForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    print('profile before--------', profile.simple_user())

    data = form.data
    print('data--------', data)
    print('valid?', form.validate_on_submit())
    if form.validate_on_submit():
        profile.username = data["username"]
        profile.email = data["email"]
        profile.first_name = data["first_name"]
        profile.last_name = data["last_name"]
        profile.location = data["location"]
        profile.website = data["website"]
        profile.bio = data["bio"]

        # db.session.add(profile)
        db.session.commit()
        print('profile after --------', profile.simple_user())
        return profile.to_dict()

    return {"errors": validation_errors_to_error_messages(form.errors)}
