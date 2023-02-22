from .db import db, environment, SCHEMA, add_prefix_for_prod

list_movie = db.Table(
    "list_movies",
    db.Model.metadata,
    db.Column("list_id", db.Integer, db.ForeignKey(add_prefix_for_prod("lists.id"))),
    db.Column("movie_id", db.Integer, db.ForeignKey(add_prefix_for_prod("movies.id")))
)

if environment == "production":
    list_movie.schema = SCHEMA
