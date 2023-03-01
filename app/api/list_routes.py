from flask import Blueprint, request
from app.models import List, Movie, db, User
from flask_login import login_required, current_user
from app.forms import ListForm
from .auth_routes import validation_errors_to_error_messages, authenticate, unauthorized

def structure_movies(list_movies):
        movies_arr = list_movies.split(",")
        structured_movies = []
        for movie in movies_arr:
            movie_dict = Movie.query.get(movie)
            structured_movies.append(movie_dict)
        return structured_movies

def append_movies(self):
    for movie in self.structure_movies():
        self.movies.append(movie)
        movie.lists.append(self)
        db.session.commit()


list_routes = Blueprint('lists', __name__)


@list_routes.route('/<int:list_id>')
def list_details(list_id):
    """
    Query for a list by id and return that list in a dictionary
    """

    list = List.query.get(list_id)
    return list.to_dict()


@list_routes.route('/movie/<int:movie_id>')
def get_movie_lists(movie_id):
    """
    Query for all lists a movie is a part of by that movie's id
    """

    movie = Movie.query.get(movie_id)
    return {"Lists": [list.simple_list() for list in movie.lists]}


@list_routes.route('/user/<int:user_id>')
def get_user_lists(user_id):
    """
    Query for all lists created by a user by that user's id
    """

    user = User.query.get(user_id)
    return {"Lists": [list.simple_list() for list in user.lists]}


@list_routes.route('/')
def lists():
    """
    Query for all lists and return them in a list of list dictionaries
    """

    lists = List.query.all()
    return {'Lists': [list.simple_list() for list in lists]}


@list_routes.route('/', methods=["POST"])
@login_required
def create_list():
    """
    Create list
    """
    form = ListForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    data = form.data
    if form.validate_on_submit():
        list = List(
            user_id = current_user.id,
            name = data["name"],
            description = data["description"],
            public_list = data["public_list"],
            created_at = data["created_at"],
            updated_at = None,
        )
        list_movies = data["list_movies"]

        def append_movies(list_movies):
            movies_arr = list_movies.split(",")
            structured_movies = []
            for movie in movies_arr:
                movie_dict = Movie.query.get(movie)
                structured_movies.append(movie_dict)
            for movie in structured_movies:
                list.movies.append(movie)
                movie.lists.append(list)

        db.session.add(list)
        append_movies(list_movies)
        db.session.commit()
        return list.to_dict()

    return {"errors": validation_errors_to_error_messages(form.errors) }


@list_routes.route('/<int:list_id>', methods=["PUT"])
@login_required
def update_list(list_id):
    """
    Update list
    """
    list = List.query.get(list_id)
    form = ListForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    data = form.data
    if form.validate_on_submit():
        list.name = data["name"],
        list.description = data["description"],
        list.public_list = data["public_list"],
        list.updated_at = data["updated_at"]

        db.session.add(list)
        db.session.commit()
        return list.to_dict()

    return {"errors": validation_errors_to_error_messages(form.errors) }


@list_routes.route("/<int:list_id>", methods=["DELETE"])
@login_required
def delete_single_list(list_id):
    list = List.query.get_or_404(list_id)

    if list is None:
        return {"error": f"No list found with id {list_id}"}


    db.session.delete(list)
    db.session.commit()
    return {"success": "True", "status_code": 200}
