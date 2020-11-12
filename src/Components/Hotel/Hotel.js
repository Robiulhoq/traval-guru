import React from 'react';
import data from '../../Components/fakeData/hoteldata.json';
import map from '../../image/map.png'
import './Hotel.css';

const Hotel = () => {
    
    return (
        <div className="hotel-container">
            <h3>Stay in Cox's bazar</h3>
            {
                data.map(hotel => <div className="hotel">
                        <img src={hotel.img} alt=""/>
                        <div className="hotel-info">
                        <h3>{hotel.title}</h3>
                        <p>{hotel.description}</p>
                        </div>
                </div>)
            }
            <div className="google-map">
                <img src={map} alt=""/>
            </div>
        </div>
    );
};

export default Hotel;