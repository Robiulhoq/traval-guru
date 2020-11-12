import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { PlaceContext } from '../../App';
import Booking from '../Booking/Booking';
import './TourPlace.css';


const TourPlace = ({place, hendleClick}) => {
    const {bookingValue} = React.useContext(PlaceContext);
    const [booking] = bookingValue;
    const {title, img, id} = place;

     return ( <div className="tourplace">

      {booking === false? <div onClick={() =>hendleClick(id)} >
           <img src={img} alt=""/>
            <h2>{title}</h2>
            </div>:
          <div>
             <Booking></Booking>
          </div>}
                    
        </div>
    );
};

export default TourPlace;