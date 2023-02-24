import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadAllMovies } from "../../store/movie";
import { useHistory, NavLink } from "react-router-dom";
import "./MoviesBrowser.css"

const MoviesBrowser = () => {
    // const history = useHistory();
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
                                    name={movie.original_title}
                                />
                        </div>
                        </NavLink>
                        <div className="movie-interaction-statistics">
                            <div className="movie-views">
                                <div className="view-icon"></div>
                                <span className="views-number">{movieReviewsNum(movie)}</span>
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
                ))}
            </div>
        </div>
    )
};

export default MoviesBrowser;
