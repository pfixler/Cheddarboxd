import { useEffect, useState } from "react"
import { useParams, NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { loadOneList } from "../../store/list"
import './ListDetails.css'


const ListDetails = () => {
    const { listId } = useParams();
    const dispatch = useDispatch();
    const list = useSelector(state => state.list.oneList)
    const [isListLoaded, setIsListLoaded] = useState(false)
    const user = useSelector(state => state.session.user)
    const [isUserList, setIsUserList] = useState(false)


    useEffect(() => {
        dispatch(loadOneList(listId))
            .then(() => setIsListLoaded(true))
    }, [dispatch, listId])

    useEffect(() => {
        if (user) {
            if (user.id == list.creator?.id) {
                setIsUserList(true)
            }
        }
    }, [dispatch, isListLoaded])

    return (
        <>
            {isListLoaded && (
                <>
                    <div className="single-movie-backdrop">
                        <div className="backdrop-images-holder">
                            <img
                                className="backdrop-image-placeholder"
                                src={list.movies[0].backdrop_path}
                                name={list.movies[0].original_title}
                            />
                            <img
                                className="backdrop-image"
                                src={list.movies[0].backdrop_path}
                                name={list.movies[0].original_title}
                            />
                            <div className="backdrop-fade">
                                {""}
                            </div>
                        </div>
                    </div>
                    <div className="single-list-page">
                        <div className="list-information">
                            <div className="list-creator-information">
                                <div className="list-creator-image">
                                    <i className="fas fa-user-circle fa-2x"/>
                                </div>
                                <div className="list-creator-name">
                                    List by {list.creator.first_name} {list.creator.last_name}
                                </div>
                            </div>
                            <div className="list-content">
                                <div className="list-name">
                                    {list.name}
                                </div>
                                <div className="list-description">
                                    {list.description}
                                </div>
                                <div className="list-movies">
                                    {list.movies.map((movie) => (
                                        <div className="list-movie-image-box" key={movie.id}>
                                            <img
                                                className="list-movie-image"
                                                src={movie.poster_path}
                                                name={movie.title}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="list-interaction">
                            {isUserList ?
                                <NavLink className="edit-list-page" to={`/${user?.id}/lists/${list?.id}`}>
                                    <div className="edit-list-link">
                                        Edit List
                                    </div>
                                </NavLink>
                            :
                                <div className="list-sidebar-button" id="not-signed-in-list-sidebar">
                                    Only the creator of a list can edit it
                                </div>
                            }
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default ListDetails
