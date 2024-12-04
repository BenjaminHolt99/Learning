import React from 'react';
import './Business.css';

function Business(props) {
    return (
        <div className="business">
            <div className="image-container">
                <img src={props.imageSrc} alt={props.name} />
            </div>
            <h2>{props.name}</h2>
            <div className="business-information">
                <div className="business-address">
                    <p>{props.address}</p>
                    <p>{props.city}</p>
                    <p>{props.state} {props.zipcode}</p>
                </div>
                <div className="business-details">
                    <p>{props.category.toUpperCase()}</p>
                    <p className="rating">Rating: {props.rating} stars</p>
                    <p>{props.reviewCount} reviews</p>
                </div>
            </div>
        </div>
    );
}

export default Business;
