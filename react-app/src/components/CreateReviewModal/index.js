import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import { createReview } from '../../store/review';

const CreateReviewModal = ({movie}) => {
    const dispatch = useDispatch();
    const [dateWatched, setDateWatched] = useState('');
    const [content, setContent] = useState('');
    const [rating, setRating] = useState(0);
    const [like, setLike] = useState(false)
    const [errors, setErrors] = useState([])
    const {closeModal} = useModal();

    const createdAt = new Date();
    const stringDate = createdAt.toISOString().slice(0, 10)

    const handleChange = () => {
        setLike(!like)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let errorArr = [];

        const newReview = {
            watch_date: dateWatched.toString().split('/').join('-'),
            rating,
            like,
            content,
            created_at: stringDate
        }

        if (errorArr.length > 0) {
            return window.alert(`${errorArr}`)
        }


        const data = await dispatch(createReview(newReview, movie.id))
            if (data) {
                window.alert(`${data}`);
            } else {
                closeModal();
            }
    }

    // const handleCancelClick = (e) => {
    //     e.preventDefault();
    //     closeModal;
    // }

    return (
        <div className="create-review-box">
            <div className="create-review-image-box">
                <img
                    // onClick={(movie) => routeToDetails(movie.id)}
                    className="create-review-image"
                    src={movie.poster_path}
                    // alt={}
                    name={movie.title}
                />
            </div>
            <div className="create-review-content">
                <div className='create-review-header'>
                    I watched...
                    <button onClick={closeModal}>X</button>
                </div>
                <div className='create-review-movie-information'>
                    <div className="create-review-movie-title">
                        {movie.title}
                    </div>
                    <div className="create-review-movie-release-date">
                        {movie.release_date.split('-')[0]}
                    </div>
                </div>
                <form className="create-review-form" onSubmit={handleSubmit}>
                    <div className="date-watched" id='review-input-box'>
                        <label className='date-watched-label'>
                            Watched on
                            <input
                                className='date-watched-input'
                                type='date'
                                value={dateWatched}
                                onChange={(e) => setDateWatched(e.target.value)}
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
                    </div>
                    <div className="submit">
                        <button className='review-submit-button' type='submit'>
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateReviewModal
