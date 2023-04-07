import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadAllMovies } from "../../store/movie";
import OpenModalButton from "../OpenModalButton";
import SignupFormModal from "../SignupFormModal";
import '../MovieDetails/MovieDetails.css';
import './HomePage.css';


const HomePage = () => {
    const dispatch = useDispatch();
    const moviesObj = useSelector(state => state.movie.allMovies)
    const movies = Object.values(moviesObj)
    const [areMoviesLoaded, setAreMoviesLoaded] = useState(false)
    const [movie, setMovie] = useState()
    const user = useSelector(state => state.session.user)

    useEffect(() => {
        dispatch(loadAllMovies())
    }, [dispatch])

    useEffect(() => {
        if (movies.length > 1) {
            setAreMoviesLoaded(true)
            const randomIndex = Math.floor(Math.random() * movies.length);
            setMovie(movies[randomIndex])
        }
    }, [dispatch, movies])

    if (!movies) {
        return null
    }

    return (
        <div className="home-page-box">
            {areMoviesLoaded && (
                <div>
                    <div className="single-movie-backdrop" id="home-page-movie-backdrop">
                        <div className="backdrop-images-holder">
                            <img
                                className="backdrop-image-placeholder"
                                src={movie.backdrop_path}
                                name={movie.original_title}
                            />
                            <div className="backdrop-fade">
                                {""}
                            </div>
                        </div>
                    </div>
                    {user ?
                        <div className="account-created-home-page">
                            <div className="welcome-message">
                                <p>
                                    Welcome back, {user.username}
                                </p>
                            </div>
                        </div>
                        :
                        <div className="create-account-home-page">
                            <div className="home-page-message">
                                <p>
                                    Review the movies you have watched.
                                </p>
                                <p>
                                    Make lists of related movies.
                                </p>
                                <p>
                                    Follow and comment features coming soon.
                                </p>
                            </div>
                            <div className='create-account-home-page-button-box'>
                                <OpenModalButton
                                    buttonText="Get Started"
                                    // onItemClick={closeMenu}
                                    modalComponent={<SignupFormModal />}
                                />
                            </div>
                        </div>
                    }
                </div>
            )}
        </div>
    )
}

export default HomePage;
