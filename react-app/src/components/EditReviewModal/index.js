import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import { updateReview, deleteReview } from '../../store/review';

const EditReviewModal = ({review}) => {
    // console.log('review in edit modal:', review)
    const dispatch = useDispatch();
    const normDateWatched = new Date(review.watch_date).toISOString().substring(0, 10);
    // console.log('normalized date:', normDateWatched)
    const [dateWatched, setDateWatched] = useState(normDateWatched);
    // console.log('date watched:', dateWatched)
    const [content, setContent] = useState(review.content);
    const [rating, setRating] = useState(review.rating);
    const [like, setLike] = useState(review.like);
    const [errors, setErrors] = useState([]);
    const {closeModal} = useModal();

    const createdAt = new Date();
    const stringDate = createdAt.toISOString().slice(0, 10)

    const handleChange = () => {
        setLike(!like)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const editedReview = {
            ...review,
            watch_date: dateWatched.toString().split('/').join('-'),
            rating,
            like,
            content,
            updated_at: stringDate
        }
        // console.log('edited review:', editedReview)

        dispatch(updateReview(editedReview))
            .then(closeModal)
    }

    // const handleCancelClick = (e) => {
    //     e.preventDefault();

    // }

    const deleteReviewFunction = (e) => {
        e.preventDefault()
        dispatch(deleteReview(review))
            .then(closeModal)
    }

    return (
        <div className="create-review-box">
            <div className="review-movie-image">

            </div>
            <div className="create-review-content">
                <div className="create-review-header">
                    I watched...
                    <div className="create-review-movie-title">
                        {review.movie.title}
                    </div>
                    <div className="create-review-movie-release-date">
                        {review.movie.release_date.split('-')[0]}
                    </div>
                <form className="create-review-form" onSubmit={handleSubmit}>
                    <div className="date-watched">
                        <label className='date-watched-label'>
                            Watched
                            <input
                                className='date-watched-input'
                                type='date'
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
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="rating">
                        <label className='rating-label'>
                            Rating
                            <input
                                className='rating-input'
                                type='range'
                                min={0}
                                max={5}
                                step={0.5}
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
                                checked={like}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className="submit">
                        <button className='review-submit-button' type='submit'>
                            Save
                        </button>
                    </div>
                    <div className='cancel'>
                        <button className='review-cancel-button' onClick={closeModal}>X</button>
                    </div>
                    <div className='delete'>
                        <button className='review-delete-button' onClick={deleteReviewFunction}>Delete</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default EditReviewModal
