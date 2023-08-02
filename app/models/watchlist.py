from .db import db, environment, SCHEMA, add_prefix_for_prod

watchlist = db.Table(
    "watchlist",
    db.Model.metadata,
    db.Column("user_id", db.Integer, db.ForeignKey(add_prefix_for_prod("users.id"))),
    db.Column("movie_id", db.Integer, db.ForeignKey(add_prefix_for_prod("movies.id")))
)

if environment == "production":
    watchlist.schema = SCHEMA
