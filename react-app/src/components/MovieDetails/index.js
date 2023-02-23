import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadOneMovie } from "../../store/movie";


const MovieDetails = ({}) => {
    const { movieId } = useParams();
    const dispatch = useDispatch();
    const movie = useSelector(state => state.movie.oneMovie)

    const movieReviewsNum = (movie) => {
        return movie.reviews.length
    }

    const movieListsNum = (movie) => {
        return movie.lists.length
    }

    const movieLikesNum = (movie) => {
        let likesSum = 0;
        let reviews = movie.reviews;
        reviews.forEach(review => {
            if (review.like == true) {
                likesSum += 1
            }
        });
        return likesSum;
    }

    useEffect(() => {
        dispatch(loadOneMovie(movieId))
    }, [dispatch])

    return (
        <div className="single-movie-page">
            <div className="single-movie-backdrop">

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
                                <div className="views-number">{movieReviewsNum(movie)}</div>
                            </div>
                            <div className="movie-lists">
                                <div className="list-icon"></div>
                                <div className="lists-number">{movieListsNum(movie)}</div>
                            </div>
                            <div className="movie-likes">
                                <div className="like-icon"></div>
                                <div className="likes-number">{movieLikesNum(movie)}</div>
                            </div>
                        </div>
                    </div>
                    <div className="single-movie-information">
                        <div className="title-box">
                            {movie.original_title}
                        </div>
                        <div className="information-box">
                            <div className="synopsis-box">

                            </div>
                            <div className="interaction-sidebar">

                            </div>
                        </div>
                        <div className="reviews-box">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;
