import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import './MovieDetails.css'

const MovieReviews = ({reviews}) => {
    const dispatch = useDispatch()
    const [reviewsLoaded, setReviewsLoaded] = useState(false)

    useEffect(() => {
        if (reviews.length > 0) {
            setReviewsLoaded(true)
        }
    }, [dispatch, reviews])

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
                            list
                            <div className="reviewer-image">
                                image
                            </div>
                            <div className="review-information">
                                <div className="review-stats">
                                    <div className="reviewer-name">
                                        {review.reviewer?.username}
                                    </div>
                                    <div className="review-rating">
                                        {review.rating}
                                    </div>
                                <div className="review-words">
                                    {review.content}
                                </div>
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
