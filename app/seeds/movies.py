from app.models import db, Review, environment, SCHEMA


def seed_movies():
    movie1



def undo_movies():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.movies RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM movies")

    db.session.commit()
