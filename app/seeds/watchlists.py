from app.models import db, User, Movie, environment, SCHEMA


def seed_watchlist():
    user1 = db.session.query(User).get(1)
    user2 = db.session.query(User).get(2)
    user3 = db.session.query(User).get(3)

    movie1 = db.session.query(Movie).get(1)
    movie2 = db.session.query(Movie).get(2)
    movie3 = db.session.query(Movie).get(3)
    movie5 = db.session.query(Movie).get(5)
    movie6 = db.session.query(Movie).get(6)
    movie7 = db.session.query(Movie).get(7)

    user1.watchlist.append(movie1)
    user1.watchlist.append(movie2)
    user1.watchlist.append(movie3)
    user1.watchlist.append(movie5)

    user2.watchlist.append(movie1)
    user2.watchlist.append(movie2)
    user2.watchlist.append(movie3)
    user2.watchlist.append(movie5)
    user2.watchlist.append(movie6)
    user2.watchlist.append(movie7)

    user3.watchlist.append(movie5)
    user3.watchlist.append(movie6)
    user3.watchlist.append(movie7)

    movie1.on_watchlist.append(user1)
    movie1.on_watchlist.append(user2)

    movie2.on_watchlist.append(user1)
    movie2.on_watchlist.append(user2)

    movie3.on_watchlist.append(user1)
    movie3.on_watchlist.append(user2)

    movie5.on_watchlist.append(user1)
    movie5.on_watchlist.append(user2)
    movie5.on_watchlist.append(user3)

    movie6.on_watchlist.append(user2)
    movie6.on_watchlist.append(user3)

    movie6.on_watchlist.append(user2)
    movie7.on_watchlist.append(user3)

    db.session.commit()


def undo_watchlist():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.watchlist RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM watchlist")

    db.session.commit()
