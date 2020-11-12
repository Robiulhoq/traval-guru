import React from 'react';

const TourPlaceItem = (props) => {
    const {title, description} = props.singlePlace;
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default TourPlaceItem;