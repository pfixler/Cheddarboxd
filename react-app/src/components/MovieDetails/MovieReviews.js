import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom";
import './MovieDetails.css'

const MovieReviews = ({reviews}) => {
    const dispatch = useDispatch()
    const [reviewsLoaded, setReviewsLoaded] = useState(false)

    useEffect(() => {
        if (reviews.length > 0) {
            setReviewsLoaded(true)
        }
    }, [dispatch, reviews])

    const likeIconClassName = (like) => like ? "" : "off";

    return (
        <>
            {reviewsLoaded && (
            <div className="reviews-box">
                <div className="reviews-header">
                    Reviews
                </div>
                <div className="review-content">
                    {reviews?.map(review => (
                        <div className="single-review-box" key={review.id}>
                            <div className="reviewer-image">
                                <NavLink to={`/profiles/${review.reviewer?.id}`}>
                                    <i className="fas fa-user-circle fa-2x" id="reviewer-icon"/>
                                </NavLink>
                            </div>
                            <div className="review-information">
                                <div className="review-stats">
                                    <div className="reviewer-name">
                                        Review by <span>{review.reviewer?.username}</span>
                                    </div>
                                    <div className={`like ${likeIconClassName(review?.like)}`}></div>
                                    <div className="review-rating" style={{width:`${review.rating*13}px`}}>
                                        {/* {review.rating} Stars */}
                                    </div>
                                </div>
                                <div className="review-words">
                                    {review.content}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            )}
        </>
    )
}

export default MovieReviews
