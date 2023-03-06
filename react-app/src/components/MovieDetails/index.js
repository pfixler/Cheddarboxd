import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadOneMovie } from "../../store/movie";
import review, { loadMovieReviews } from "../../store/review";
import MovieReviews from "./MovieReviews";
import './MovieDetails.css'
import OpenModalButton from "../OpenModalButton";
import CreateReviewModal from "../CreateReviewModal";
import EditReviewModal from "../EditReviewModal";


const MovieDetails = () => {
    const { movieId } = useParams();
    const dispatch = useDispatch();
    const movie = useSelector(state => state.movie.oneMovie)
    const [isMovieLoaded, setIsMovieLoaded] = useState(false)
    const reviews = Object.values(useSelector(state => state.review.movieReviews))
    const [areReviewsLoaded, setAreReviewsLoaded] = useState(false)
    const user = useSelector(state => state.session.user)
    const session = useSelector(state => state.session)
    const [loadImage, setLoadImage] = useState(false)
    const [movieReviewsNum, setMovieReviewsNum] = useState()
    const [movieListsNum, setMovieListsNum] = useState()
    const [movieLikesNum, setMovieLikesNum] = useState()
    const [isDifferentLanguage, setIsDifferentLanguage] = useState(false)
    const [userHasReview, setUserHasReview] = useState(false)
    // console.log('user has review?:', userHasReview)
    // console.log('user has review:', userHasReview)
    const [userReview, setUserReview] = useState(null)
    // console.log('user review?:', userReview)

    useEffect(() => {
        dispatch(loadOneMovie(movieId))
            .then(() => setIsMovieLoaded(true))
            .then(dispatch(loadMovieReviews(movieId)))
            .then(() => setAreReviewsLoaded(true))
            // .then(setTimeout(() => {
            //     setLoadImage(true)
            // }, 3000))
    }, [dispatch])

    useEffect(() => {
        dispatch(loadOneMovie)
    }, [reviews])

    useEffect(() => {
        // console.log('in set user review use effect', reviews)
        if (areReviewsLoaded) {
            // console.log('in set user review use effect inside if statement', reviews)
            for (let i in reviews) {
                // console.log('review in for loop', reviews[i])
                // console.log('user in for loop:', user)
                if (user) {
                    if (user.id == reviews[i].reviewer.id) {
                        setUserReview(reviews[i])
                        return setUserHasReview(true)
                    }
                }
            }
            setUserReview(null)
            return setUserHasReview(false)
        }
    }, [dispatch, session, movie, reviews])


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


    if (!movie) {
        return null
    }

    if (!reviews) {
        return null
    }


    return (
        <>
            {isMovieLoaded && (
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
                                        {movie.release_date.split('-')[0]}
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
                                        {/* <div className="user-movie-status">
                                            <div className="watched-status">
                                                <div className="watched-icon">

                                                </div>
                                                <div className="watched-text">
                                                    watched
                                                </div>
                                            </div>
                                            <div className="like-status">
                                                <div className="like-icon">

                                                </div>
                                                <div className="like-text">
                                                    like
                                                </div>
                                            </div>
                                            <div className="rating-status">
                                                <div className="rating-icon">

                                                </div>
                                                <div className="rating-text">
                                                    rating
                                                </div>
                                            </div>
                                        </div> */}
                                        {user ?
                                            <>
                                                {areReviewsLoaded && userHasReview ?
                                                    <div className="sidebar-button">
                                                    <OpenModalButton
                                                        buttonText="Edit Review"
                                                        // onItemClick={closeMenu}
                                                        modalComponent={<EditReviewModal review={userReview}/>}
                                                    />
                                                    </div>
                                                    :
                                                    <div className="sidebar-button">
                                                        <OpenModalButton
                                                            buttonText="Create Review"
                                                            // onClick={isUserSignedIn}
                                                            // onItemClick={closeMenu}
                                                            modalComponent={<CreateReviewModal movie={movie}/>}
                                                        />
                                                    </div>
                                                }
                                            </>
                                            :
                                            <div className="sidebar-button" id="not-signed-in-sidebar">
                                                    Sign in to interact with this movie
                                            </div>
                                        }
                                        {/* <div className="sidebar-button">
                                            add to lists
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            {areReviewsLoaded && (
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
