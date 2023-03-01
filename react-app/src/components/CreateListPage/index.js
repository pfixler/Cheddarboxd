import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { createList } from "../../store/list";
import { useHistory } from "react-router-dom";
import { loadAllMovies } from "../../store/movie";

const CreateListPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const movies = Object.values(useSelector(state => state.movie.allMovies));
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [publicList, setPublicList] = useState(false);
    const [listMovies, setListMovies] = useState([])


    useEffect(() => {
        dispatch(loadAllMovies())
    }, [dispatch])

    const handleChange = () => {
        setPublicList(!publicList)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newList = {

        }


        dispatch(createList(newList))
            .then(history.push(`/${user.id}/lists/`))
    }

    const handleCancelClick = (e) => {
        e.preventDefault()
        history.push(`/${user.id}/lists/`)
    }

    const addListMovies = (e) => {
        if (listMovies.includes(e.target.value)) {
            // there will be error handling here
        } else {
            setListMovies([...listMovies, e.target.value])
        }
    }

    const removeListMovies = (listMovieId) => {
        const index = listMovies.indexOf(listMovieId)
        listMovies.splice(index, 1);
        setListMovies([...listMovies]);
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
                                onChange={(e) => e.target.value}
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
                                onChange={(e) => e.target.value}
                                required
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
                                required
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
                                    <option value={movie.id}>{`${movie.title} ${movie.release_date.split('-')[0]}`}</option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div className="list-submit">
                        <button className='list-submit-button' type='submit'>
                            Save
                        </button>
                    </div>
                    <div className='list-cancel'>
                        <button className='list-cancel-button' onClick={handleCancelClick}>Cancel</button>
                    </div>
                    <div className="create-list-movies-list">
                        {listMovies.map((listMovie => (
                            <div className="single-list-movie" key={listMovie.id}>

                            </div>
                        )))}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateListPage
