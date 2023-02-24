import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadOneMovie } from "../../store/movie";
import review, { loadMovieReviews } from "../../store/review";

const MovieDetails = () => {
    const { movieId } = useParams();
    const dispatch = useDispatch();
    const movie = useSelector(state => state.movie.oneMovie)
    const reviews = Object.values(useSelector(state => state.review.movieReviews))
    console.log('reviews:', reviews)

    useEffect(() => {
        dispatch(loadMovieReviews(movieId))
        dispatch(loadOneMovie(movieId))
    }, [dispatch, movieId])

    // useEffect(() => {
    //     dispatch(loadMovieReviews(movieId))
    // }, [movie])

    if (!movie) {
        return null
    }

    // if (!reviews) {
    //     return null
    // }

    return (
        <div className="single-movie-page">
            <div className="single-movie-backdrop">
                <img
                    className="card-image"
                    // src={movie.backdrop_path}
                    name={movie.original_title}
                />
            </div>
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
                        <div className="reviews-box">
                            <div className="reviews-header">
                                Reviews
                            </div>
                            <div className="review-content">
                                {reviews.map(review => {
                                    <div className="single-review-box" key={review.id}>
                                        list
                                        <div className="reviewer-image">
                                            image
                                        </div>
                                        <div className="review-information">
                                            <div className="review-stats">
                                                <div className="reviewer-name">
                                                    {review.reviewer.username}
                                                </div>
                                                <div className="review-rating">
                                                    {review.rating}
                                                </div>
                                            <div className="review-words">
                                                {review.content}
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;
