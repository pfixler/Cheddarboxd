import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import { createReview } from '../../store/review';

const CreateReviewModal = ({movie}) => {
    const dispatch = useDispatch();
    const [dateWatched, setDateWatched] = useState('');
    const [words, setWords] = useState('');
    const [rating, setRating] = useState(0);
    const [like, setLike] = useState(false)
    const [errors, setErrors] = useState([])
    const {closeModal} = useModal();

    const currentDate = new Date();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newReview = {

        }


        dispatch(createReview(newReview))
            .then(closeModal)
    }

    const handleCancelClick = (e) => {
        e.preventDefault();

    }

    return (
        <div className="create-review-box">
            <div className="review-movie-image">

            </div>
            <div className="create-review-content">
                <div className="create-review-header">
                    I watched...
                    <div className="create-review-movie-title">
                        {movie.title}
                    </div>
                    <div className="create-review-movie-release-date">
                        {movie.release_date.split('-')[0]}
                    </div>
                <form className="create-review-form" onSubmit={handleSubmit}>
                    <div className="date-watched">
                        <label className='date-watched-label'>
                            Watched
                            <input
                                className='date-watched-input'
                                type='checkbox'
                                value={dateWatched}
                                onChange={(e) => setDateWatched(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="words">
                        <label className='words-label'>
                            Review
                            <input
                                className='words-input'
                                type='text'
                                value={words}
                                onChange={(e) => setWords(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="rating">
                        <label className='rating-label'>
                            Rating
                            <input
                                className='rating-input'
                                type='range'
                                value={rating}
                                onChange={(e) => setRating(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="like">
                        <label className='like-label'>
                            Like
                            <input
                                className='like-input'
                                type='checkbox'
                                value={like}
                                onChange={(e) => setLike(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="submit">
                        <button className='review-submit-button' type='submit'>
                            Save
                        </button>
                    </div>
                    <div className='cancel'>
                        <button className='review-cancel-button' onClick={handleCancelClick}>X</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default CreateReviewModal
