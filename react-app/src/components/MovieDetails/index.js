import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadOneMovie } from "../../store/movie";
import { loadMovieReviews } from "../../store/review";
import MovieReviews from "./MovieReviews";
import './MovieDetails.css'

const MovieDetails = () => {
    const { movieId } = useParams();
    const dispatch = useDispatch();
    const movie = useSelector(state => state.movie.oneMovie)
    const reviews = Object.values(useSelector(state => state.review.movieReviews))
    const [areReviewsLoaded, setAreReviewsLoaded] = useState(false)

    useEffect(() => {
        dispatch(loadOneMovie(movieId))
            .then(dispatch(loadMovieReviews(movieId)))
            .then(() => setAreReviewsLoaded(true))
    }, [dispatch, movieId])

    // useEffect(() => {
    //     dispatch(loadMovieReviews(movieId))
    // }, [reviewsLength])

    if (!movie) {
        return null
    }

    if (!reviews) {
        return null
    }

    return (
        <>
            <div className="single-movie-backdrop">
                <img
                    className="card-image"
                    src={movie.backdrop_path}
                    name={movie.original_title}
                />
            </div>
            <div className="single-movie-page">
                <div className="single-movie-content-box">
                    <div className="single-movie-content">
                        <div className="single-movie-card">
                            <div className="movie-image">
                                <img
                                    className="card-image"
                                    src={movie.poster_path}
                                    name={movie.original_title}
                                />
                            </div>
                            <div className="movie-interaction-statistics">
                                <div className="movie-views">
                                    <div className="view-icon"></div>
                                    <div className="views-number">{movie.reviews?.length}</div>
                                </div>
                                <div className="movie-lists">
                                    <div className="list-icon"></div>
                                    <div className="lists-number"></div>
                                </div>
                                <div className="movie-likes">
                                    <div className="like-icon"></div>
                                    <div className="likes-number"></div>
                                </div>
                            </div>
                        </div>
                        <div className="single-movie-information">
                            <div className="title-box">
                                {movie.original_title}
                            </div>
                            <div className="information-box">
                                <div className="synopsis-box">
                                    {movie.overview}
                                </div>
                                <div className="interaction-sidebar">
                                    <div className="user-movie-status">
                                        <div className="watched-icon">

                                        </div>
                                        <div className="like-icon">

                                        </div>
                                    </div>
                                    <div className="rating-status">

                                    </div>
                                    <div className="lists-status">

                                    </div>
                                </div>
                            </div>
                            {areReviewsLoaded && (
                                <MovieReviews reviews={reviews} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieDetails;
