from app.models import db, List, environment, SCHEMA


def seed_lists():
    list1 = List(
        user_id=1,
        name='Cheese related movies',
        description='This is a list of movies that are related to chesse in some capacity',
        public_list=True,
        created_at='2023-02-22',
        updated_at='2023-02-22'
    )

    list2 = List(
        user_id=2,
        name='Movies with cheese in them',
        description='This is a list of movies that have cheese in them',
        public_list=True,
        created_at='2023-02-22',
        updated_at='2023-02-22'
    )

    list3 = List(
        user_id=3,
        name='I like cheese',
        description='Cheese',
        public_list=True,
        created_at='2023-02-22',
        updated_at='2023-02-22'
    )

    list4 = List(
        user_id=3,
        name='I am literally a mouse',
        description='Squeak',
        public_list=True,
        created_at='2023-02-22',
        updated_at='2023-02-22'
    )

    all_lists = [list1, list2, list3, list4]
    add_lists = [db.session.add(list) for list in all_lists]
    db.session.commit()


def undo_lists():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.lists RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM lists")

    db.session.commit()
