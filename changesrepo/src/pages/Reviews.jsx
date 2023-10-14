import React from "react";
import Review from '../components/Review';
import reviewsData from '../assets/reviews.json'
const Reviews = () => {

  return (
    <section class="review" id="review">
      {reviewsData.map((review, index) => (
        <Review
          key={index}
          imageSrc={review.imageSrc}
          altText={review.altText}
          content={review.content}
          author={review.author}
          rating={review.rating}
          aos={index%2 ? "slide-left":"slide-right"}
        />
      ))}
    </section>
  );
};

export default Reviews;
