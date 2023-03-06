import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { createList } from "../../store/list";
import { useHistory } from "react-router-dom";
import movie, { loadAllMovies } from "../../store/movie";
import './CreateListPage.css'

const CreateListPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const movies = Object.values(useSelector(state => state.movie.allMovies));
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [publicList, setPublicList] = useState(false);
    const [listMovies, setListMovies] = useState([])
    // console.log('list movies:', listMovies)

    const createdAt = new Date();
    const stringDate = createdAt.toISOString().slice(0, 10)

    useEffect(() => {
        dispatch(loadAllMovies())
    }, [dispatch])

    const handleChange = () => {
        setPublicList(!publicList)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newList = {
            name,
            description,
            public_list:publicList,
            created_at:stringDate,
            list_movies:listMovies.join(',')
        }

        dispatch(createList(newList))
            .then(history.push(`/lists/`))
            // .then(history.push(`/${user?.id}/lists/`))
    }

    const handleCancelClick = (e) => {
        e.preventDefault()
        history.push(`/lists/`)
        // history.push(`/${user?.id}/lists/`)
    }

    const addListMovies = (e) => {
        if (listMovies.includes(e.target.value)) {
            // there will be error handling here
        } else {
            setListMovies([...listMovies, e.target.value])
        }
    }

    const removeListMovie = (listMovieId) => {
        const index = listMovies.indexOf(listMovieId)
        listMovies.splice(index, 1);
        setListMovies([...listMovies]);
    }

    const getListMovieById = (movie) => {
        const movieId = parseInt(movie);
        let movieObj;

        for (let i in movies) {
            if (movieId == movies[i].id) {
                movieObj = movies[i]
            }
        }
        return movieObj
    }


    return (
        <div className="create-list-page-box">
            <div className="create-list-header">
                New List
            </div>
            <div className="create-list-form-box">
                <form className="create-list-form" onSubmit={handleSubmit}>
                    <div className="list-form-inputs">
                        <div className="list-form-left">
                            <div className="create-list-name">
                                <label className="create-list-name-label">
                                    Name of list <span>*required</span>
                                </label>
                                    <input
                                        className="create-list-name-input"
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                            </div>
                            <div className="create-list-public-list">
                                <label className="create-list-public-list-label">
                                    Public list
                                </label>
                                    <input
                                        className="create-list-public-list-input"
                                        type="checkbox"
                                        checked={publicList}
                                        onChange={handleChange}
                                        // required
                                    />
                            </div>
                        </div>
                        <div className="list-form-right">
                            <div className="create-list-description">
                                <label className="create-list-description-label">
                                    Description
                                </label>
                                    <textarea
                                        className="create-list-description-input"
                                        type="textarea"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        // required
                                    />
                            </div>
                        </div>
                    </div>
                    <div className="bottom-side-inputs">
                        <div className="create-list-add-movies">
                            <label>
                                Add a movie:
                            </label>
                                <select
                                    value={listMovies}
                                    multiple="true"
                                    onChange={(e) => addListMovies(e)}>
                                    {movies.map(movie => (
                                        <option key={movie.id} value={movie.id}>{`${movie.title} (${movie.release_date.split('-')[0]})`}</option>
                                    ))}
                                </select>
                        </div>
                        <div className="list-form-button-box">
                            {/* <div className='list-form-button'> */}
                                <button className='list-form-button' id="list-form-cancel-button" type="button" onClick={handleCancelClick}>
                                    <div>Cancel</div>
                                </button>
                            {/* </div> */}
                            {/* <div className="list-form-button"> */}
                                <button className='list-form-button' type='submit'>
                                    <div>Save</div>
                                </button>
                            {/* </div> */}
                        </div>
                    </div>
                    <div className="create-list-movies-list">
                        {listMovies.map(listMovie => (
                            <div className="single-list-movie" key={listMovie}>
                                <div className="list-movie-information">
                                    <div className="create-list-movie-image-box">
                                        <img
                                            className="create-list-movie-image"
                                            src={getListMovieById(listMovie).poster_path}
                                            name={getListMovieById(listMovie).title}
                                        />
                                    </div>
                                    <div className="list-movie-details">
                                        <div className="list-movie-title">
                                            {getListMovieById(listMovie).title}
                                        </div>
                                        <div className="list-movie-release-year">
                                            {getListMovieById(listMovie).release_date?.split('-')[0]}
                                        </div>
                                    </div>
                                </div>
                                <div className="remove-list-movie-button-box">
                                    <button className="remove-list-movie-button" onClick={() => removeListMovie(listMovie)}>
                                        X
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateListPage
