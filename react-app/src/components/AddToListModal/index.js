import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAllLists, loadMovieLists } from "../../store/list";
import { useModal } from '../../context/Modal';
import './AddToListModal.css';
import { NavLink } from 'react-router-dom';


const AddToListModal = ({movie}) => {
    console.log('movie', movie)
    const dispatch = useDispatch();
    const listsObj = useSelector(state => state.list.allLists);

    const lists = Object.values(listsObj);
    const listLength = lists.length;

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredLists, setFilteredLists] = useState(lists);

    const handleSearch = (e) => {
        const searchText = e.target.value.toLowerCase();
        setSearchTerm(searchText);

        const filtered = lists.filter((list) =>
          list.name.toLowerCase().includes(searchText)
        );
        setFilteredLists(filtered);
      };

    const [selectedLists, setSelectedLists] = useState([]);
    console.log('selectedlists:', selectedLists)

    const selectListFunction = (list) => {
        if (selectedLists.includes(list)) {
            setSelectedLists(selectedLists.filter(obj => obj !== list))
        }
        else {
            setSelectedLists([...selectedLists, list]);
        }
    }

    const {closeModal} = useModal();

    useEffect(() => {
        dispatch(loadAllLists())
    }, [dispatch, listLength])

    const createdAt = new Date();
    const stringDate = createdAt.toISOString().slice(0, 10);

    const handleSubmit = () => {
        for (let i in selectedLists) {
            if (selectedLists[i].includes(movie)) {

            }
            else {
                let updatedList = {
                    ...selectedLists[i],
                    updated_at:stringDate,
                    list_movies:selectedLists[i].movies.push(movie)
                }
            }
        }
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
                        <input
                            type="text"
                            placeholder="Type to search"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                        {/* <label></label> */}
                    </div>
                </div>
                <ul className='lists'>
                    {filteredLists.map((list, index) => (
                        <li key={index} className={`list ${selectedLists.includes(list) ? 'selected' : ''}`} onClick={() => selectListFunction(list)}>
                            <span className='list-names'>
                                {list.name}
                            </span>
                            <span className='number-of-movies'>
                                {list.movies.length} movies
                            </span>
                        </li>
                    ))}
                </ul>
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
