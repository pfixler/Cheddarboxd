import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadAllMovies } from "../../store/movie";
import { NavLink } from "react-router-dom";
import "./MoviesBrowser.css"

const MoviesBrowser = () => {
    const dispatch = useDispatch();
    const moviesObj = useSelector(state => state.movie.allMovies)
    const movies = Object.values(moviesObj)

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
        dispatch(loadAllMovies())
    }, [dispatch])

    // const routeToDetails = (movieId) => {
    //     history.push(`/movies/${movieId}`)
    // }

    if (!movies) {
        return null
    }

    return (
        <div className="movies-browser-box">
            <div className="movie-list-container">
                {movies.map(movie => (
                    <div className="single-movie-card" key={movie.id}>
                        <NavLink to={`/movies/${movie.id}`}>
                        <div className="movie-image-box">
                                <img
                                    // onClick={(movie) => routeToDetails(movie.id)}
                                    className="movie-image"
                                    src={movie.poster_path}
                                    // alt={}
                                    name={movie.title}
                                />
                        </div>
                        </NavLink>
                        <div className="movie-interaction-statistics">
                            <div className="movie-views icon-number">
                                <span className="icon view-icon"></span>
                                <span className="number">{movieReviewsNum(movie)}</span>
                            </div>
                            <div className="movie-lists icon-number">
                                <span className="icon list-icon"></span>
                                <span className="number">{movieListsNum(movie)}</span>
                            </div>
                            <div className="movie-likes icon-number">
                                <span className="icon like-icon"></span>
                                <span className="number">{movieLikesNum(movie)}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default MoviesBrowser;
