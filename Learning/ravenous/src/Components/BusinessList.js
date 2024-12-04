// BusinessList.js
import React from 'react';
import Business from './Business';
import './BusinessList.css';

function BusinessList({ businesses }) {
    return (
        <div className="business-list">
            {businesses.map((business, index) => (
                <Business
                    key={index}
                    imageSrc={business.imageSrc}
                    name={business.name}
                    address={business.address}
                    city={business.city}
                    state={business.state}
                    zipcode={business.zipcode}
                    category={business.category}
                    rating={business.rating}
                    reviewCount={business.reviewCount}
                />
            ))}
        </div>
    );
}

export default BusinessList;

