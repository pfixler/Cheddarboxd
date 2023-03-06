import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { loadAllLists } from "../../store/list";
import { useHistory, NavLink } from "react-router-dom";
import SingleList from "./SingleList";
import './ListsBrowser.css';


const ListsBrowser = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const listsObj = useSelector(state => state.list.allLists);
    const user = useSelector(state => state.session.user);
    const lists = Object.values(listsObj);
    const listLength = lists.length;


    useEffect(() => {
        dispatch(loadAllLists())
    }, [dispatch, listLength])


    if (!lists) {
        return null
    }

    const addlistButton = () => {
        if (user) {
            history.push('/lists/new')
        }
        else {
            window.alert("You must be signed in to create a list")
        }
    }



    return (
        <div className="lists-browser-box">
            <div className="create-list-section">
                <div className="create-list-text">
                    Collect, curate, and share. Lists are the perfect way to group movies.
                </div>
                <div className="create-list-button-box">
                    {/* <NavLink className="create-list-page" exact to='/lists/new'>
                        Start your own list
                    </NavLink> */}
                    <button onClick={addlistButton}>Start your own list</button>

                </div>
            </div>
            <div className="list-lists-section">
                {lists.map(list => (
                    <SingleList list={list} key={list.id}/>
                ))}
            </div>
        </div>
    )
}

export default ListsBrowser
