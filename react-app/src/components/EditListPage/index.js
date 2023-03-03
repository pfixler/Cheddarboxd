import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { loadOneList, updateList, deleteList } from "../../store/list";
import { loadAllMovies } from "../../store/movie";
import '../CreateListPage/CreateListPage.css';
import './EditListPage.css';


const EditListPage = () => {
    const { listId } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const list = useSelector(state => state.list.oneList);
    const user = useSelector(state => state.session.user);
    const movies = Object.values(useSelector(state => state.movie.allMovies));
    const [name, setName] = useState(list.name);
    const [description, setDescription] = useState(list.description);
    const [publicList, setPublicList] = useState(list.public_list);
    // console.log('public list in list:', list.public_list)
    // console.log('public list:', publicList)
    const listMoviesArr = list.movies.map((movie => movie.id));
    const [listMovies, setListMovies] = useState(listMoviesArr);
    const [listMoviesLoaded, setListMoviesLoaded] = useState(false);
    // console.log('list movies:', listMovies)

    const createdAt = new Date();
    const stringDate = createdAt.toISOString().slice(0, 10);

    useEffect(() => {
        dispatch(loadAllMovies())
            .then(dispatch(loadOneList(listId)))
            .then(() => setListMoviesLoaded(true))
    }, [dispatch])

    const handleChange = () => {
        setPublicList(!publicList)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const updatedList = {
            ...list,
            name,
            description,
            public_list:publicList,
            updated_at:stringDate,
            list_movies:listMovies.join(',')
        }

        // console.log('updated list:', updatedList)

        dispatch(updateList(updatedList))
            .then(history.push(`/lists/`))
            // .then(history.push(`/${user?.id}/lists/`))
    }

    const deleteListFunction = (e) => {
        e.preventDefault()
        dispatch(deleteList(list))
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

            </div>
            <div className="create-list-form-box">
                <form className="create-list-form" onSubmit={handleSubmit}>
                    <div className="create-list-name">
                        <label className="create-list-name-label">
                            Name of list
                            <input
                                className="create-list-name-input"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div className="create-list-description">
                        <label className="create-list-description-label">
                            Description
                            <input
                                className="create-list-description-input"
                                type="text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                // required
                            />
                        </label>
                    </div>
                    <div className="create-list-public-list">
                        <label className="create-list-public-list-label">
                            Public list
                            <input
                                className="create-list-public-list-input"
                                type="checkbox"
                                checked={publicList}
                                onChange={handleChange}
                                // required
                            />
                        </label>
                    </div>
                    <div className="create-list-add-movies">
                        <label>
                            Add a movie:
                            <select
                                value={listMovies}
                                multiple="true"
                                onChange={(e) => addListMovies(e)}>
                                {movies.map(movie => (
                                    <option key={movie.id} value={movie.id}>{`${movie.title} ${movie.release_date.split('-')[0]}`}</option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div className="list-submit">
                        <button className='list-submit-button' type='submit'>
                            Save
                        </button>
                    </div>
                    <div className="list-delete">
                        <button className='list-delete-button' type='button' onClick={deleteListFunction}>
                            Delete
                        </button>
                    </div>
                    <div className='list-cancel'>
                        <button className='list-cancel-button' type="button" onClick={handleCancelClick}>
                            Cancel
                        </button>
                    </div>
                    {listMoviesLoaded && (
                        <div className="create-list-movies-list">
                            {listMovies.map(listMovie => (
                                <div className="single-list-movie" key={listMovie}>
                                    <div className="create-list-movie-image-box">
                                        <img
                                            className="create-list-movie-image"
                                            src={getListMovieById(listMovie).poster_path}
                                            name={getListMovieById(listMovie).title}
                                        />
                                    </div>
                                    <div className="list-movie-information">
                                        <div className="list-movie-title">
                                            {getListMovieById(listMovie).title}
                                        </div>
                                        <div className="list-movie-release-year">
                                            {getListMovieById(listMovie).release_date?.split('-')[0]}
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
                    )}
                </form>
            </div>
        </div>
    )
}

export default EditListPage
