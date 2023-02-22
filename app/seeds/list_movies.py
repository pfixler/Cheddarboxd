from app.models import db, Review, environment, SCHEMA


def seed_list_movies():
    list_movie1



def undo_list_movies():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.list_movies RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM list_movies")

    db.session.commit()
