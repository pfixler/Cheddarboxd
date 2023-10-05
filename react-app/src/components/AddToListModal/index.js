import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import './AddToListModal.css';
import { NavLink } from 'react-router-dom';


const AddToListModal = ({movie}) => {
    const dispatch = useDispatch();
    //testing

    const {closeModal} = useModal();

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
                            New List
                        </NavLink>
                    </div>
                    <div className='search'>

                    </div>
                </div>
                <div className='lists'>
                    <div className='list-names'>

                    </div>
                    <div className='number-of-movies'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddToListModal;
