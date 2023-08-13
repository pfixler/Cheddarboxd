import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';


const AddToListModal = () => {
    const dispatch = useDispatch();

    return (
        <div className='add-to-list-box'>
            <div className='add-to-list-content'>
                
            </div>
        </div>
    )
}

export default AddToListModal;
