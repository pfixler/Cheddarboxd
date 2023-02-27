import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { loadAllLists } from "../../store/list";
import { useHistory } from "react-router-dom";
import SingleList from "./SingleList";


const ListsBrowser = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const listsObj = useSelector(state => state.list.allLists);
    const lists = Object.values(listsObj);


    useEffect(() => {
        dispatch(loadAllLists())
    }, [dispatch])


    if (!lists) {
        return null
    }

    const addlistButton = () => {
        history.push('/lists/new')
    }



    return (
        <div className="lists-browser-box">
            <div className="create-list-section">
                <div className="create-list-text">
                    Collect, curate, and share. Lists are the perfect way to group movies.
                </div>
                <div className="create-list-button-box">
                    <button className="create-list-button" onClick={addlistButton}>
                        Start your own list
                    </button>
                </div>
            </div>
            <div className="list-lists-section">
                {lists.map((list) => (
                    <SingleList list={list} key={list.id}/>
                ))}
            </div>
        </div>
    )
}

export default ListsBrowser
