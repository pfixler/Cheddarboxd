import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './ListsBrowser.css';
import { useEffect, useState } from "react";


const SingleList = ({list}) => {
    const dispatch = useDispatch()

    const [listMovies, setListMovies] = useState()
    // const listMoviesTotal = list.movies;
    // const listMovies = listMoviesTotal.slice(4)

    useEffect(() => {
        if (list) {
            const moviesArr5 = []
            const moviesArr = list.movies
            for (let i = 0; i < 5; i++) {
                if (moviesArr[i]) {
                    moviesArr5.push(moviesArr[i])
                }
                else {
                    return setListMovies(moviesArr5)
                }
            }
            setListMovies(moviesArr5)
        }
    }, [dispatch])


    return (
        <>
            {listMovies && (
                <div className="single-list-card">
                    <NavLink to={`/lists/${list.id}`}>
                        <div className="list-images">
                            {listMovies.map((movie, idx) => (
                                <img
                                    key={movie.id}
                                    className={`list-images-image _${idx}`}
                                    src={movie.poster_path}
                                />
                            ))}
                        </div>
                        <div className="list-information">
                            <div className="list-name">
                                {list.name}
                            </div>
                            <div className="list-maker">
                                <i className="fas fa-user-circle" id="list-maker-icon"/>
                                {list.creator.username}
                            </div>
                        </div>
                    </NavLink>
                </div>
            )}
        </>
    )
}

export default SingleList;
