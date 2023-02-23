from app.models import db, Movie, environment, SCHEMA


def seed_movies():
    movie1 = Movie(
        backdrop_path="https://image.tmdb.org/t/p/original/xEd4sKtyCtm0bnbIwXgWuqZePpl.jpg",
        genre_ids='35,10751',
        tmdb_id=33217,
        original_language="en",
        original_title="Diary of a Wimpy Kid",
        overview="Greg Heffley is headed for big things, but first he has to survive the scariest, most humiliating experience of any kid’s life – middle school! That won’t be easy, considering he’s surrounded by hairy-freckled morons, wedgie-loving bullies and a moldy slice of cheese with nuclear cooties!",
        popularity=22.001,
        poster_path="https://image.tmdb.org/t/p/original/iLAGiPnSuODt9cn332bkFElrRig.jpg",
        release_date="2010-03-19",
        title="Diary of a Wimpy Kid",
        video=False,
        vote_average=6.2,
        vote_count=1350
    )

    movie2 = Movie(
        backdrop_path="https://image.tmdb.org/t/p/original/iBDwgYsUrDetHTetLFnGFX1qgsF.jpg",
        genre_ids='28,12,35,14,27',
        tmdb_id=566805,
        original_language="en",
        original_title="Mad Heidi",
        overview="In a dystopian Switzerland that has fallen under the fascist rule of an evil cheese tyrant, Heidi lives the pure and simple life in the Swiss Alps. Grandfather Alpöhi does his best to protect Heidi, but her yearning for freedom soon gets her into trouble with the dictator’s henchmen. The innocent girl transforms herself into a kick-ass female fighting force who sets out to liberate the country from the insane cheese fascists.",
        popularity=18.308,
        poster_path="https://image.tmdb.org/t/p/original/sDth91nIprL4mukbihb6r4XK9iS.jpg",
        release_date="2022-11-24",
        title="Mad Heidi",
        video=False,
        vote_average=5.9,
        vote_count=40
    )

    movie3 = Movie(
        backdrop_path="https://image.tmdb.org/t/p/original/1mY2vJCGQW2IUgGK6yNc852A4tR.jpg",
        genre_ids='16,35,10751',
        tmdb_id=530,
        original_language="en",
        original_title="A Grand Day Out",
        overview="Wallace and Gromit have run out of cheese, and this provides an excellent excuse for the duo to take their holiday to the moon, where, as everyone knows, there is ample cheese.",
        popularity=17.419,
        poster_path="https://image.tmdb.org/t/p/original/og1s6iwv73WMShgNzg0WTtmrKXy.jpg",
        release_date="1990-05-18",
        title="A Grand Day Out",
        video=False,
        vote_average=7.5,
        vote_count=699
    )
    # maybe remove
    movie4 = Movie(
        backdrop_path="https://image.tmdb.org/t/p/original/jZreyEq1OBO03PVqNeCyHclwwjL.jpg",
        genre_ids='35,80,9648',
        tmdb_id=53776,
        original_language="fr",
        original_title="Poupoupidou",
        overview="The ambiguous suicide of a local beauty, weathergirl, cheese model, and Marilyn Monroe look-a-like finds an eager sleuth in David Rousseau, best-selling crime novelist. When Rousseau visits a remote Alps village for the reading of his friend's will he unwittingly, but irresistibly, gets caught in the tangled web of murder and small town politics in this off-beat mystery.",
        popularity=5.734,
        poster_path="https://image.tmdb.org/t/p/original/wgsDeQoKzZgJU3TGpslhnhDqGkq.jpg",
        release_date="2011-01-12",
        title="Nobody Else But You",
        video=False,
        vote_average=6.2,
        vote_count=74
    )

    movie5 = Movie(
        backdrop_path="https://image.tmdb.org/t/p/original/cgJnz8qsePxCt5SejMoO0GlCRs0.jpg",
        genre_ids='16,10751,35',
        tmdb_id=102184,
        original_language="en",
        original_title="Cheese Chasers",
        overview="After eating their fill at a cheese factory, Hubie and Bertie decide there is nothing left to live for, and try to get Claude Cat to eat them.",
        popularity=2.204,
        poster_path="https://image.tmdb.org/t/p/original/cvv3WW6Dfz2jbNRQB0DdvmqzxTb.jpg",
        release_date="1951-08-25",
        title="Cheese Chasers",
        video=False,
        vote_average=6.9,
        vote_count=22
    )

    movie6 = Movie(
        backdrop_path="https://image.tmdb.org/t/p/original/d7HmspqoB3WhBF9zEdoweF6uGY2.jpg",
        genre_ids='35,27',
        tmdb_id=450103,
        original_language="en",
        original_title="Black Holler",
        overview="In 1989 it's Laquita Johnson's first day at a new school. She's sent on a camping trip to the spooky woods of Black Holler. Her classmates are clueless. Her chaperone is ridiculous, and bodies are piling up. Find out who survives.",
        popularity=1.772,
        poster_path="https://image.tmdb.org/t/p/original/cDNmU9MoROk9o7ULLftFHN4SB1u.jpg",
        release_date="2017-04-24",
        title="Black Holler",
        video=False,
        vote_average=8.5,
        vote_count=2
    )

    movie7 = Movie(
        backdrop_path="https://image.tmdb.org/t/p/original/A2n2sPX8WArWVjaBV101EsGSOAH.jpg",
        genre_ids='18',
        tmdb_id=55717,
        original_language="it",
        original_title="E l'aura fai son vir",
        overview="The aging, conservative population of a small, sleepy village in the Italian Alps are surprised to see that a former French professor has settled there with his young wife and their three children to produce goat cheese, in order to escape the wrongs of civilization. At first they are suspicious of his unconventional ideas and lifestyle, then are conquered by the enthusiasm, kindness, helpfulness of the young family and start to see in them a possible rebirth of the place. But little by little misunderstandings, envy and conflicts take over.",
        popularity=1.67,
        poster_path="https://image.tmdb.org/t/p/original/1JEqygYwfgMC7MSLKWH8266SFTu.jpg",
        release_date="2006-09-30",
        title="The Wind Blows Round",
        video=False,
        vote_average=6.8,
        vote_count=32
    )

    movie8 = Movie(
        backdrop_path=None,
        genre_ids='35',
        tmdb_id=511512,
        original_language="en",
        original_title="Frankly a Mess",
        overview="A struggling performer and all-around slacker accidentally stumbles into a successful fetish video career, and is subsequently pulled into a community of sickos while dealing with her over-bearing family in this outrageous comedy.",
        popularity=1.511,
        poster_path="https://image.tmdb.org/t/p/original/uVpaOaOi5T27mOlOSxz2txblt2x.jpg",
        release_date="2018-04-08",
        title="Frankly a Mess",
        video=False,
        vote_average=6,
        vote_count=1
    )

    movie9 = Movie(
        backdrop_path="https://image.tmdb.org/t/p/original/bjFzzH6h6VMUXfcq8XNz5eM2UuW.jpg",
        genre_ids='16,35,10751',
        tmdb_id=223035,
        original_language="en",
        original_title="Snowbody Loves Me",
        overview="Waif mouse Jerry, encrusted with snow, peers through a warmly lit window at Tom asleep by the fire in a room full of cheese.",
        popularity=1.254,
        poster_path="https://image.tmdb.org/t/p/original/dwNhK0t3vBU8SQn2jR9OwMixJ2V.jpg",
        release_date="1964-05-12",
        title="Snowbody Loves Me",
        video=False,
        vote_average=6.2,
        vote_count=16
    )

    movie10 = Movie(
        backdrop_path=None,
        genre_ids='28',
        tmdb_id=251159,
        original_language="en",
        original_title="Baby Brown",
        overview="Action thriller trails two attractive female cops (Zoli Marki and Kryska Witowska) on the hunt for a lethal drug lord who’s responsible for injuring one of the women’s former partners. Things get even more dangerous when the two women learn they must guard the suspect’s girlfriend, who has decided to testify against him.",
        popularity=1.198,
        poster_path="https://image.tmdb.org/t/p/original/88CN8jAmWzEOFv3YdZqZR5vuklX.jpg",
        release_date="1990-11-09",
        title="Baby Brown",
        video=False,
        vote_average=8,
        vote_count=1
    )

    movie11 = Movie(
        backdrop_path="https://image.tmdb.org/t/p/original/oWKuYt8SO4Hmhyg5ggNdBbh6Pkk.jpg",
        genre_ids='99',
        tmdb_id=448912,
        original_language="fr",
        original_title="Maison du Bonheur",
        overview="When asked to make a documentary about her friend’s mother—a Parisian astrologer named Juliane—the filmmaker sets off for Montmartre with a Bolex to craft a portrait of an infectiously exuberant personality and the pre-war apartment she’s called home for 50 years.",
        popularity=0.992,
        poster_path="https://image.tmdb.org/t/p/original/bfmKm79z75CYQpqU9kxG0WNS3iG.jpg",
        release_date="2018-08-17",
        title="Maison du Bonheur",
        video=False,
        vote_average=5.9,
        vote_count=7
    )

    movie12 = Movie(
        backdrop_path=None,
        genre_ids='99',
        tmdb_id=63342,
        original_language="fr",
        original_title="Ces fromages qu'on assassine",
        overview="In the wake of \"Mondovino\", this film offers new research on the world of cheese, through a work of investigation and discovery in various parts of France, but also Italy and the United States. It highlights two clashing worlds: on one side the taste of defenders and diversity, the other multinational companies, supermarkets and proponents of food globalization. The \"stinky cheese\" has become an iconic element in the debate on the French exception, globalization, industrial food and the environment.",
        popularity=0.902,
        poster_path="https://image.tmdb.org/t/p/original/9Q9Du7MxcHVCCNFDo65hwnJoQJ0.jpg",
        release_date="2007-05-05",
        title="Ces fromages qu'on assassine",
        video=False,
        vote_average=3.8,
        vote_count=2
    )

    movie13 = Movie(
        backdrop_path="https://image.tmdb.org/t/p/original/Uzr6fkLCqnDUrQgT2p9H7NLS2Y.jpg",
        genre_ids='35,16',
        tmdb_id=237042,
        original_language="en",
        original_title="Cheese Burglar",
        overview="While cats and dogs are natural enemies, such is not the case in the house where Herman the mouse lives. They are very good friends indeed, are work together to make Herman's life a hard life. Herman tries to break up their friendship, and divert their attention from guarding the cheese in the refrigerator, and almost succeeds but they make up in time to prevent Herman getting the cheese. They give chase and Herman takes refuge in a jug of wine.",
        popularity=0.84,
        poster_path="https://image.tmdb.org/t/p/original/59BWioYpbhZm0jo0yT4O6GRMDUL.jpg",
        release_date="1946-02-21",
        title="Cheese Burglar",
        video=False,
        vote_average=5,
        vote_count=1
    )

    movie14 = Movie(
        backdrop_path="https://image.tmdb.org/t/p/original/cqUkHcgLmeCw6kxbOAvSzzDkVyH.jpg",
        genre_ids='16,35',
        tmdb_id=219578,
        original_language="en",
        original_title="Advance and Be Mechanized",
        overview="Jerry uses a robot mouse to snatch a sample from a lunar cheese mine being mined by robots; Tom gives chase with a robot cat.",
        popularity=0.811,
        poster_path="https://image.tmdb.org/t/p/original/9Qvvdq1ttdCBsZDMLnltr8xJpPz.jpg",
        release_date="1967-08-25",
        title="Advance and Be Mechanized",
        video=False,
        vote_average=6.2,
        vote_count=13
    )

    movie15 = Movie(
        backdrop_path="https://image.tmdb.org/t/p/original/oW7tbTCotlEz8ZySShIXJk3L90V.jpg",
        genre_ids='16,35,37,10751',
        tmdb_id=223027,
        original_language="en",
        original_title="Tall in the Trap",
        overview="When Jerry rustles cheese from the Dry Gulch General Store, Sheriff Mutt Dillin hires Tom, the fastest trap in the West.",
        popularity=0.651,
        poster_path="https://image.tmdb.org/t/p/original/aZ6pI4HHamFfK1li659zOFNSml9.jpg",
        release_date="1962-09-14",
        title="Tall in the Trap",
        video=False,
        vote_average=5.8,
        vote_count=9
    )

    movie16 = Movie(
        backdrop_path=None,
        genre_ids='80,35',
        tmdb_id=166760,
        original_language="fr",
        original_title="Les fromages automobiles",
        overview="The interior of a trolley car. A menagerie of passengers notices a foul odour, and pinpoint the source of the stench at a cheese saleswoman. The gendarmerie removes her from the trolley and drags her to the precinct.",
        popularity=0.611,
        poster_path="https://image.tmdb.org/t/p/original/1YFvkHqvRQaQpgIvgjryVQqfvdJ.jpg",
        release_date="1907-01-01",
        title="The Skipping Cheese",
        video=False,
        vote_average=5.3,
        vote_count=9
    )

    movie17 = Movie(
        backdrop_path=None,
        genre_ids='35,80,53',
        tmdb_id=1066928,
        original_language="en",
        original_title="Cheeseburger",
        overview="After a night of partying, Sean awakens to find that his cheeseburger from the night before has gone missing, so he reluctantly voyages with his stoner friend, Frankie to search for a suitable replacement; and that's when it all comes crashing down on the pair.",
        popularity=0.6,
        poster_path="https://image.tmdb.org/t/p/original/wPbvmvxBSSip7inLCY0PKrIgRdU.jpg",
        release_date="2010-12-10",
        title="Cheeseburger",
        video=False,
        vote_average=0,
        vote_count=0
    )

    movie18 = Movie(
        backdrop_path=None,
        genre_ids='35',
        tmdb_id=1032799,
        original_language="en",
        original_title="Grilled",
        overview="An aspiring chef struggles to make a grilled cheese for his overbearing master.",
        popularity=0.6,
        poster_path="https://image.tmdb.org/t/p/original/hSDatuPZfXg5A1jUzKY2QGA4fvB.jpg",
        release_date="2022-09-07",
        title="Grilled",
        video=False,
        vote_average=0,
        vote_count=0
    )

    movie19 = Movie(
        backdrop_path=None,
        genre_ids='99',
        tmdb_id=676461,
        original_language="fr",
        original_title="Fromages AOP : le terroir caisse ?",
        overview="",
        popularity=0.6,
        poster_path="https://image.tmdb.org/t/p/original/o6xcXpmwAHCfPhVs4P9mqGvoT9b.jpg",
        release_date="2018-10-14",
        title="Fromages AOP : le terroir caisse ?",
        video=False,
        vote_average=0,
        vote_count=0
    )

    movie20 = Movie(
        backdrop_path="https://image.tmdb.org/t/p/original/uEyx9ooa1s5J9PIPYIpYtcpfwbv.jpg",
        genre_ids='10402,18',
        tmdb_id=386912,
        original_language="en",
        original_title="20 Minutes to Go",
        overview="A Startling new music video! It will send you racing one footstep ahead of danger and Death! One Heartbeat away from your wildest dream of love! A music video that will take your imagination by storm! It will plunge you into the dwelling place of the damned, then thrust you into a dimension beautiful beyond description!",
        popularity=0.6,
        poster_path="https://image.tmdb.org/t/p/original/3d05wLTLO32ygHblroRaFIApnfu.jpg",
        release_date="1990-01-01",
        title="20 Minutes to Go",
        video=False,
        vote_average=0,
        vote_count=0
    )

    movie21 = Movie(
        backdrop_path=None,
        genre_ids='99',
        tmdb_id=348124,
        original_language="en",
        original_title="Comment se fait le fromage de Hollande",
        overview="Documentary about making cheese in the Netherlands.",
        popularity=0.6,
        poster_path=None,
        release_date="1909-12-08",
        title="Comment se fait le fromage de Hollande",
        video=False,
        vote_average=6,
        vote_count=1
    )

    movie22 = Movie(
        backdrop_path="https://image.tmdb.org/t/p/original/gTSxIWgKepVThG1fYn4XSpVMq6B.jpg",
        genre_ids='16,10751',
        tmdb_id=168017,
        original_language="en",
        original_title="Little Buck Cheeser",
        overview="Little Cheeser and his friends, inspired by Buck Rogers (and visions of cheese), build a rocket ship and fly to the moon.",
        popularity=0.6,
        poster_path="https://image.tmdb.org/t/p/original/bGNeJISxpfXUXPJXzBJX3hA98bq.jpg",
        release_date="1937-12-18",
        title="Little Buck Cheeser",
        video=False,
        vote_average=6.3,
        vote_count=3
    )

    movie23 = Movie(
        backdrop_path=None,
        genre_ids='35,27',
        tmdb_id=5655,
        original_language="en",
        original_title="Dairy of Terror",
        overview="",
        popularity=0.6,
        poster_path=None,
        release_date="2007-11-25",
        title="Dairy of Terror",
        video=False,
        vote_average=0,
        vote_count=0
    )

    all_movies = [movie1, movie2, movie3, movie4,
                  movie5, movie6, movie7, movie8,
                  movie9, movie10, movie11, movie12,
                  movie13, movie14, movie15, movie16,
                  movie17, movie18, movie19, movie20,
                  movie21, movie22, movie23]
    add_movies = [db.session.add(movie) for movie in all_movies]
    db.session.commit()


def undo_movies():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.movies RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM movies")

    db.session.commit()
