import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAllLists, loadMovieLists } from "../../store/list";
import { useModal } from '../../context/Modal';
import './AddToListModal.css';
import { NavLink } from 'react-router-dom';


const AddToListModal = ({movie}) => {
    const dispatch = useDispatch();
    const listsObj = useSelector(state => state.list.allLists);
    const lists = Object.values(listsObj).slice(0,4);
    const listLength = lists.length;
    console.log("lists", lists)

    const {closeModal} = useModal();

    useEffect(() => {
        dispatch(loadAllLists())
    }, [dispatch, listLength])

    return (
        <div className='add-to-list-modal'>
            <div className='list-modal-content'>
                <div className='header'>
                    Add {movie.title} to lists
                    <button onClick={closeModal}>X</button>
                </div>
                <div className='actions'>
                    <div className='new-list'>
                        <NavLink to={`/lists/new/with/${movie.id}`} onClick={closeModal}>
                            <span>New List...</span>
                        </NavLink>
                    </div>
                    <div className='search'>

                    </div>
                </div>
                <div className='lists'>
                    {lists.map(list => (
                        <div className='list'>
                            <div className='list-names'>
                                {list.name}
                            </div>
                            <div className='number-of-movies'>
                                {list.movies.length} movies
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AddToListModal;
