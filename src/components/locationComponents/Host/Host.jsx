import React from 'react';
import './Host.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const LocationModule = ({ title, location, tags, host, rating }) => {
    const ratingStars = generateRatingStars(rating);

    return (
        <div className="container">
            <div className="title-container">
                <h1 className="title">{title}</h1>
                <p className="location">{location}</p>
                <ul className="tag-list">
                    {tags.map((tag, index) => (
                        <li className="tag" key={index}>{tag}</li>
                    ))}
                </ul>
            </div>
            <div className="host-container">
                <div className="host-info">
                    <div className="host-name">
                        <h2 className="first-name">{getFirstName(host.name)}</h2>
                        <h2 className="last-name">{getLastName(host.name)}</h2>
                    </div>
                    <img className="host-image" src={host.picture} alt={host.name} />
                </div>
                <div className="rating-container">
                    <div className="rating">
                        {ratingStars.map((star, index) => (
                            <span className="star-icon" key={index}>{star}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const generateRatingStars = (rating) => {
    const stars = [];
    const fullStarIcon = <FontAwesomeIcon icon={faStar} color="#FF6060" />;
    const emptyStarIcon = <FontAwesomeIcon icon={faStar} color="#E3E3E3" />;

    for (let i = 1; i <= 5; i++) {
        stars.push(i <= rating ? fullStarIcon : emptyStarIcon);
    }

    return stars;
};

const getFirstName = (name) => {
    const names = name.split(' ');
    return names[0];
};

const getLastName = (name) => {
    const names = name.split(' ');
    return names.slice(1).join(' ');
};

export default LocationModule;
