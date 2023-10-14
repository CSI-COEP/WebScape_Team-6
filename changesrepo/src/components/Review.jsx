import React from 'react';

function Review({ imageSrc, altText, content, author, rating, aos}) {
  return (
    <div className="box reviewbox" data-aos={aos}>
      <div className="profilecont">
        <img src={imageSrc} alt={altText} className="profile" />
      </div>
      <div className="reviewcontent">
        <p>{content}</p>
        <h3>{author}</h3>
        <div className="stars">
          {Array.from({ length: rating }, (_, index) => (
            <i key={index} className="fas fa-star"></i>
          ))}
          {rating % 1 !== 0 && (
            <i className="fas fa-star-half-alt"></i>
          )}
        </div>
      </div>
    </div>
  );
}

export default Review;
