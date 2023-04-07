from app.models import db, Movie, List, environment, SCHEMA


def seed_list_movies():
    movie1 = db.session.query(Movie).get(1)
    movie2 = db.session.query(Movie).get(2)
    movie3 = db.session.query(Movie).get(3)
    movie5 = db.session.query(Movie).get(5)
    movie6 = db.session.query(Movie).get(6)
    movie7 = db.session.query(Movie).get(7)
    movie8 = db.session.query(Movie).get(8)
    movie9 = db.session.query(Movie).get(9)
    movie10 = db.session.query(Movie).get(10)
    movie11 = db.session.query(Movie).get(11)
    movie12 = db.session.query(Movie).get(12)
    movie13 = db.session.query(Movie).get(13)
    movie14 = db.session.query(Movie).get(14)
    movie15 = db.session.query(Movie).get(15)
    movie16 = db.session.query(Movie).get(16)

    list1 = db.session.query(List).get(1)
    list2 = db.session.query(List).get(2)
    list3 = db.session.query(List).get(3)
    list4 = db.session.query(List).get(4)

    list1.movies.append(movie1)
    list1.movies.append(movie2)
    list1.movies.append(movie3)
    list1.movies.append(movie6)

    list2.movies.append(movie5)
    list2.movies.append(movie6)
    list2.movies.append(movie7)
    list2.movies.append(movie8)

    list3.movies.append(movie9)
    list3.movies.append(movie10)
    list3.movies.append(movie11)
    list3.movies.append(movie12)

    list4.movies.append(movie13)
    list4.movies.append(movie14)
    list4.movies.append(movie15)
    list4.movies.append(movie16)

    movie1.lists.append(list1)
    movie2.lists.append(list1)
    movie3.lists.append(list1)
    movie6.lists.append(list1)
    movie5.lists.append(list2)
    movie6.lists.append(list2)
    movie7.lists.append(list2)
    movie8.lists.append(list2)
    movie9.lists.append(list3)
    movie10.lists.append(list3)
    movie11.lists.append(list3)
    movie12.lists.append(list3)
    movie13.lists.append(list4)
    movie14.lists.append(list4)
    movie15.lists.append(list4)
    movie16.lists.append(list4)

    db.session.commit()


def undo_list_movies():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.list_movies RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM list_movies")

    db.session.commit()
