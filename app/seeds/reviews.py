from app.models import db, Review, environment, SCHEMA


def seed_reviews():
    review1 = Review(
        user_id=1,
        movie_id=2,
        watched=True,
        watch_date='2023-02-18',
        rating=5,
        like=True,
        content='This movie was excellent.',
        created_at='2023-02-22',
        updated_at='2023-02-22',
    )
    review2 = Review(
        user_id=2,
        movie_id=2,
        watched=True,
        watch_date='2023-01-28',
        rating=1,
        like=False,
        content='This movie was terrible.',
        created_at='2023-02-22',
        updated_at='2023-02-22',
    )
    review3 = Review(
        user_id=1,
        movie_id=3,
        watched=True,
        watch_date='2023-02-22',
        rating=3,
        like=True,
        content='Not enough cheese.',
        created_at='2023-02-22',
        updated_at='2023-02-22',
    )
    review4 = Review(
        user_id=3,
        movie_id=3,
        watched=True,
        watch_date='2023-02-20',
        rating=3,
        like=True,
        content='This movie was just okay.',
        created_at='2023-02-22',
        updated_at='2023-02-22',
    )

    all_reviews = [review1, review2, review3, review4]
    add_reviews = [db.session.add(review) for review in all_reviews]
    db.session.commit()



def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM reviews")

    db.session.commit()
