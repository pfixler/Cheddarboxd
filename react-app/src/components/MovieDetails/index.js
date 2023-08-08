import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadOneMovie } from "../../store/movie";
import { loadMovieReviews, updateReview, createReview, deleteReview } from "../../store/review";
import { getWatchlist, addToWatchlist, removeFromWatchlist } from "../../store/watchlist";
import MovieReviews from "./MovieReviews";
import './MovieDetails.css'
import OpenModalButton from "../OpenModalButton";
import CreateReviewModal from "../CreateReviewModal";
import EditReviewModal from "../EditReviewModal";


const MovieDetails = () => {
    const { movieId } = useParams();
    console.log('movie id', movieId);
    const dispatch = useDispatch();
    const movie = useSelector(state => state.movie.oneMovie)
    console.log('movie', movie)
    // const [isMovieLoaded, setIsMovieLoaded] = useState(false)
    const reviewsObj = useSelector(state => state.review.movieReviews)
    const reviews = Object.values(reviewsObj)
    console.log('reviews', reviews)
    // const userReviews = Object.values(useSelector(state => state.review.userReviews))
    // const [areReviewsLoaded, setAreReviewsLoaded] = useState(false)
    // console.log('are reviews loaded', areReviewsLoaded)
    const user = useSelector(state => state.session.user)
    const session = useSelector(state => state.session)
    const watchlist = useSelector(state => state.watchlist)
    console.log('watchlist', watchlist)

    const [loadImage, setLoadImage] = useState(false)
    const [movieReviewsNum, setMovieReviewsNum] = useState()
    const [movieListsNum, setMovieListsNum] = useState()
    const [movieLikesNum, setMovieLikesNum] = useState()
    const [isDifferentLanguage, setIsDifferentLanguage] = useState(false)

    const [userReview, setUserReview] = useState()
    console.log('user review', userReview)

    // const [hasWatched, setHasWatched] = useState()
    const [userHasReview, setUserHasReview] = useState()
    const watchIconClassName = "action-icon watch" + (userHasReview ? " on" : "")
    console.log('user has review', userHasReview)

    const [hasLiked, setHasLiked] = useState()
    const likeIconClassName = "action-icon like" + (hasLiked ? " on" : "")
    console.log('user has liked', hasLiked)

    const [onWatchlist, setOnWatchlist] = useState()
    const watchlistIconClassName = "action-icon watchlist" + (onWatchlist ? " on" : "")
    console.log('on watchlist', onWatchlist)
    // useEffect(() => {

    // }, [reviewWatchlist])

    const [reviewRating, setReviewRating] = useState()


    useEffect(() => {
        dispatch(loadMovieReviews(movieId))
        dispatch(loadOneMovie(movieId))
        dispatch(getWatchlist(user.id))
        onWatchListFunction(movieId)
        // setIsMovieLoaded(true)
        // setAreReviewsLoaded(true)
    }, [dispatch, movieId])

    // useEffect(() => {
    //     // dispatch(getWatchlist(user.id))
    //     console.log('in watchlist use effect')
    // }, [watchlist])

    const onWatchListFunction = (movieId) => {
        if (watchlist[movieId]) {
            setOnWatchlist(true)
        }
        else {
            setOnWatchlist(false)
        }
    }

    // const isReviewedFunction = (movieId) => {
    //     if (userReviews[movieId]) {
    //         setHasWatched(true)
    //     }
    //     else {
    //         setHasWatched(false)
    //     }
    // }

    // useEffect(() => {
    //     dispatch(loadOneMovie)
    // }, [reviews])

    useEffect(() => {
        console.log('in reviews use effect')
        // userHasReviewFunction(reviews)
        for (let i in reviews) {
            // if (user) {
            if (user.id == reviews[i].reviewer.id) {
                setUserReview(reviews[i])
                // setHasLiked(userReview?.like)
                return setUserHasReview(true)
                // if (userReview.like) {
                //     setHasLiked(true)
                // }
                // else {
                //     setHasLiked(false)
                // }
            }
            // }

        setUserReview(null)
        setUserHasReview(false)
        }
    }, [reviewsObj])

    // const userHasReviewFunction = (reviews) => {
    //     // if (areReviewsLoaded) {
    //         for (let i in reviews) {
    //             // if (user) {
    //             if (user.id == reviews[i].reviewer.id) {
    //                 setUserReview(reviews[i])
    //                 // setHasLiked(userReview?.like)
    //                 return setUserHasReview(true)
    //                 // if (userReview.like) {
    //                 //     setHasLiked(true)
    //                 // }
    //                 // else {
    //                 //     setHasLiked(false)
    //                 // }
    //             }
    //             // }
    //         setUserHasReview(false)

    //         // }
    //     }
    //     // setUserReview(null)
    //     // return setUserHasReview(false)
    // }

    useEffect(() => {
        console.log('in like use effect')
        setHasLiked(userReview?.like)
    }, [userReview])


    useEffect(() => {
        setMovieReviewsNum(movie.reviews?.length)
        setMovieListsNum(movie.lists?.length)

        let likesSum = 0;
        let reviews = movie?.reviews;
        reviews?.forEach(review => {
            if (review.like == true) {
                likesSum += 1
            }
        });
        setMovieLikesNum(likesSum);

        if (movie.title != movie.original_title) {
            setIsDifferentLanguage(true)
        }
    }, [dispatch, movie])

    const signInUserButton = (e) => {
        e.preventDefault();
        window.alert("You must be signed in to ")
    }

    const createdAt = new Date();
    const stringDate = createdAt.toISOString().slice(0, 10)


    const watchClick = () => {
        if (!userReview) {
            dispatch(createReview({
                watch_date: '',
                rating: 0,
                like: false,
                content: '',
                created_at: stringDate
            }, movieId))
                .then(setUserHasReview(true))
        }
        else {
            if (!hasLiked && !reviewRating) {
                dispatch(deleteReview(userReview))
                    .then(setUserHasReview(false))
            }
            else {
                window.alert(`${movie.title} can not be removed from your films because there is activity on it`)
            }
        }
    }

    const likeClick = () => {
        if (!hasLiked && !userReview) {
            dispatch(createReview({
                watch_date: '',
                rating: 0,
                like: true,
                content: '',
                created_at: stringDate
            }, movieId))
                .then(setUserHasReview(true))
                .then(setHasLiked(true))
        }
        else if (!hasLiked) {
            const updatedReview = {
                ...userReview,
                like:true,
                updated_at: stringDate
            }

            dispatch(updateReview(updatedReview))
                .then(setHasLiked(true))
        }
        else {
            const updatedReview = {
                ...userReview,
                like:false,
                updated_at: stringDate
            }

            dispatch(updateReview(updatedReview))
                .then(setHasLiked(false))
        }
    }

    const watchlistClick = () => {
        if (!onWatchlist) {
            dispatch(addToWatchlist(movie))
                .then(setOnWatchlist(true))
        }
        else {
            dispatch(removeFromWatchlist(movie))
                .then(setOnWatchlist(false))
        }
    }


    if (!movie) {
        return null
    }

    if (!reviews) {
        return null
    }

    if (!watchlist) {
        return null
    }

    let placeholder = 0;




    return (
        <>
            {movie && (
            <>
                <div className="single-movie-backdrop">
                    <div className="backdrop-images-holder">
                        <img
                            className="backdrop-image-placeholder"
                            src={movie.backdrop_path}
                            name={movie.original_title}
                        />
                        <img
                            className="backdrop-image"
                            src={movie.backdrop_path}
                            name={movie.original_title}
                        />
                        <div className="backdrop-fade">
                            {""}
                        </div>
                    </div>
                </div>
                <div className="single-movie-page">
                    {/* <div className="single-movie-content-box"> */}
                    <div className="single-movie-content">
                        <div className="single-movie-card">
                            <div className="movie-image-box">
                                <img
                                    className="movie-image"
                                    src={movie.poster_path}
                                    name={movie.title}
                                />
                            </div>
                            <div className="movie-interaction-statistics">
                                <div className="movie-views">
                                    <div className="view-icon"></div>
                                    <div className="views-number">{movieReviewsNum}</div>
                                </div>
                                <div className="movie-lists">
                                    <div className="list-icon"></div>
                                    <div className="lists-number">{movieListsNum}</div>
                                </div>
                                <div className="movie-likes">
                                    <div className="like-icon"></div>
                                    <div className="likes-number">{movieLikesNum}</div>
                                </div>
                            </div>
                        </div>
                        <div className="single-movie-information">
                            <div className="header-box">
                                <div className="title">
                                    {/* <div className="title-text"> */}
                                        {movie.title}
                                    {/* </div> */}
                                </div>
                                <div className="header-information">
                                    <div className="release-date">
                                        {movie.release_date?.split('-')[0]}
                                    </div>
                                    {isDifferentLanguage && (
                                        <div className="original-title">
                                            '{movie.original_title}'
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="information-box">
                                <div className="synopsis-box">
                                    {movie.overview}
                                </div>
                                {/* the review stuff here will be a create/update form for reviews */}
                                <div className="interaction-sidebar-box">
                                    <div className="interaction-sidebar">
                                    {user ?
                                        <ul className="interaction-actions">
                                            <li className="action-row" id="top-icons">
                                                <span className="icon-box" onClick={() => watchClick()}>
                                                    <span className={watchIconClassName}>Watch</span>
                                                </span>
                                                <span className="icon-box" onClick={() => likeClick()}>
                                                    <div className={likeIconClassName}>Like</div>
                                                </span>
                                                <span className="icon-box" onClick={() => watchlistClick()}>
                                                    <div className={watchlistIconClassName}>Watchlist</div>
                                                </span>
                                            </li>
                                            <li className="action-row rate">
                                                <span className="rate-label">Rate</span>
                                                <input
                                                    className="rating-field"
                                                    type='range'
                                                    min={0}
                                                    max={10}
                                                    step={1}
                                                    // value={rating}
                                                    // onChange={(e) => setRating(e.target.value)}
                                                />
                                                <div className="rate-movie-box">
                                                    <div className="rate-icon range">
                                                        <div className="rate-icon selected" style={{height:32+"px", width:placeholder+"px"}}></div>
                                                        <div className="rate-icon hover" style={{height:32+"px", width:placeholder+"px"}}></div>
                                                    </div>
                                                </div>
                                            </li>
                                            {userReview ?
                                                <li className="action-row">
                                                <OpenModalButton
                                                    buttonText="Edit your review"
                                                    // onItemClick={closeMenu}
                                                    modalComponent={<EditReviewModal review={userReview}/>}
                                                />
                                                </li>
                                                :
                                                <li className="action-row">
                                                    <OpenModalButton
                                                        buttonText="Review or log..."
                                                        // onClick={isUserSignedIn}
                                                        // onItemClick={closeMenu}
                                                        modalComponent={<CreateReviewModal movie={movie}/>}
                                                    />
                                                </li>
                                            }
                                            <li className="action-row">
                                                <div>Add to list</div>
                                            </li>
                                        </ul>
                                        :
                                        <div className="action-row" id="not-signed-in-sidebar">
                                                Sign in to interact with this movie
                                        </div>
                                    }
                                    </div>
                                </div>
                            </div>
                            {reviews && (
                                <MovieReviews reviews={reviews} />
                            )}
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </>
            )}
        </>
    )
}

export default MovieDetails;
