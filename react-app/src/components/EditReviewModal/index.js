import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import { updateReview, deleteReview } from '../../store/review';
import '../CreateReviewModal/CreateReviewModal.css';
import './EditReviewModal.css';
import ReviewModalIcons from '../ReviewModalIcons';

const EditReviewModal = ({review}) => {

    const dispatch = useDispatch();
    const normDateWatched = new Date(review?.watch_date).toISOString().substring(0, 10);

    const [dateWatched, setDateWatched] = useState(normDateWatched);

    const [content, setContent] = useState(review.content);
    const [rating, setRating] = useState(review.rating);
    console.log('rating:', rating)
    const handleRatingChange = (ratingChange) => {
        setRating(ratingChange)
    };

    const [like, setLike] = useState(review.like);
    console.log('like:', like)
    const handleLikeChange = (likeChange) => {
        setLike(likeChange)
    };

    const [errors, setErrors] = useState([]);
    const {closeModal} = useModal();

    const createdAt = new Date();
    const stringDate = createdAt.toISOString().slice(0, 10)

    const handleChange = () => {
        setLike(!like)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let errorArr = [];

        if (content.length > 5000) {
            errorArr.push("Review content must not be greater than 5000 characters")
        }

        const editedReview = {
            ...review,
            watch_date: dateWatched.toString().split('/').join('-'),
            rating,
            like,
            content,
            updated_at: stringDate
        }

        if (errorArr.length > 0) {
            return window.alert(`${errorArr}`)
        }


        const data = await dispatch(updateReview(editedReview))
            if (data) {
                window.alert(`${data}`);
            } else {
                closeModal();
            }
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
            <div className="create-review-image-box">
                <img
                    // onClick={(movie) => routeToDetails(movie.id)}
                    className="create-review-image"
                    src={review.movie.poster_path}
                    // alt={}
                    name={review.movie.title}
                />
            </div>
            <div className="create-review-content">
                <div className='create-review-header'>
                    I watched...
                    <button onClick={closeModal}>X</button>
                </div>
                <div className='create-review-movie-information'>
                    <div className="create-review-movie-title">
                        {review.movie.title}
                    </div>
                    <div className="create-review-movie-release-date">
                        {review.movie.release_date.split('-')[0]}
                    </div>
                </div>
                <form className="create-review-form" onSubmit={handleSubmit}>
                    <div className="date-watched" id='review-input-box'>
                        <label className='date-watched-label'>
                            Watched on*
                            <input
                                className='date-watched-input'
                                type='date'
                                value={dateWatched}
                                onChange={(e) => setDateWatched(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div className="review-words" id='review-input-box'>
                        {/* <label className='words-label'> */}
                            <textarea
                                className='words-input'
                                placeholder='Add a review *required'
                                type='textarea'
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                required
                            />
                        {/* </label> */}
                    </div>
                    <div className='rating-and-like' id='review-input-box'>
                        <ReviewModalIcons onLikeChange={handleLikeChange} onRatingChange={handleRatingChange}
                        like={review.like} rating={review.rating}/>
                        {/* <div className="rating">
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
                        </div> */}
                    </div>
                    <div className='edit-review-buttons'>
                        <div className="submit">
                            <button className='green-button' id='save-edit-review' type='submit'>
                                <span>Save</span>
                            </button>
                        </div>
                        <div className='delete'>
                            <button className='grey-button' id='delete-edit-review' onClick={deleteReviewFunction}>
                                <span>Delete</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditReviewModal
