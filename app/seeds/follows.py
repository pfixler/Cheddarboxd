from app.models import db, User, environment, SCHEMA

def seed_follows():
    user1 = db.session.query(User).get(1)
    user2 = db.session.query(User).get(2)
    user3 = db.session.query(User).get(3)

    user1.followers.append(user2)
    user1.followers.append(user3)

    user2.followers.append(user1)

    user3.followers.append(user2)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_follows():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.follows RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM follows")

    db.session.commit()
