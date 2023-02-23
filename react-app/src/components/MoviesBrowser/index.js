import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadAllMovies } from "../../store/movie";

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



    return (
        <div className="movies-browser-box">
            <div className="movie-list-container">
                {movies.map((movie) => (
                    <div className="single-movie-card" key={movie.id}>
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
                ))}
            </div>
        </div>
    )
};

export default MoviesBrowser;
