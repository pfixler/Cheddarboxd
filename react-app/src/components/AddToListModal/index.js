import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAllLists, loadMovieLists } from "../../store/list";
import { useModal } from '../../context/Modal';
import './AddToListModal.css';
import { NavLink } from 'react-router-dom';


const AddToListModal = ({movie}) => {
    const dispatch = useDispatch();
    const listsObj = useSelector(state => state.list.allLists);

    const lists = Object.values(listsObj);
    const listLength = lists.length;

    const {closeModal} = useModal();

    useEffect(() => {
        dispatch(loadAllLists())
    }, [dispatch, listLength])

    const handleSubmit = () => {

    }

    return (
        <div className='add-to-list-modal'>
            <form className='list-modal-content' onSubmit={handleSubmit}>
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
                <div className='submit'>
                    <button className='green-button'>
                        <span>
                            Add
                        </span>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddToListModal;
