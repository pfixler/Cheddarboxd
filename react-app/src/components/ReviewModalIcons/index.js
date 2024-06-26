import "../MovieDetails/MovieDetails.css";
import "./ReviewModalIcons.css";
import { useState } from "react";



const ReviewModalIcons = ({like, rating, onLikeChange, onRatingChange}) => {



    const [modalLike, setmodalLike] = useState(like);
    const likeClick = () => {
        setmodalLike(!modalLike);
        onLikeChange(!modalLike);
    }
    const likeIconClassName = "action-icon like" + (modalLike ? " on" : "");
    console.log('in component like:', modalLike);

    const [hoverRating, setHoverRating] = useState(0);

    const [reviewRating, setReviewRating] = useState(rating);
    console.log('in component rating:', reviewRating)

    const handleMouseEnter = (rating) => {
        setHoverRating(rating);
      };

    const handleMouseLeave = () => {
        setHoverRating(0);
      };

    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i += 1) {
            stars.push(
            <div
                key={i}
                className={`rate-icon ${hoverRating >= i ? 'hover' : ''} ${
                reviewRating >= i ? 'selected' : ''
                }`}
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
                onClick={() => ratingClick(i)}
                data-rating={i}
            >
            </div>
            );
        }
        return stars;
    };

    const ratingClick = (rating) => {
        setReviewRating(rating);
        onRatingChange(rating);
    }

    const removeRatingClick = () => {
        setReviewRating(0);
        onRatingChange(0);
    }



    return (
        <div className="review-modal-icons">
            <div className="action-row rate">
                <span className="rate-label">Rate</span>
                <div className="rate-movie-box">
                    <div className="rating-stars">
                        {renderStars()}
                    </div>
                </div>
                <div className="remove-rating" onClick={() => removeRatingClick()}>"Remove rating"</div>
            </div>
            <div className="action-row like">
                <span>Like</span>
                <span className="icon-box" onClick={() => likeClick()}>
                    <div className={likeIconClassName}></div>
                </span>
            </div>
        </div>
    )
}


export default ReviewModalIcons;
