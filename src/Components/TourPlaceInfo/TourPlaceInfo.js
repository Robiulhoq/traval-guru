import React, { useContext } from 'react';
import { PlaceContext } from '../../App';
import TourPlaceItem from '../TourPlaceItem/TourPlaceItem';
import './TourPlaceInfo.css';

const TourPlaceInfo = () => {
    const {placeValue, bookingValue} =React.useContext(PlaceContext);

    const [place, setPlace] = placeValue;
    const [booking, setBooking] = bookingValue;
    

    const hendleBooking = () =>{
        setBooking(true);
    }
    return (
        <div>
           <div className="tourinfo">
                    {
                place.map(singlePlace => <TourPlaceItem singlePlace={singlePlace}></TourPlaceItem>)
                    }
           </div>
           {booking=== false? <button onClick={hendleBooking}>Booking</button>:
           null}
        </div>
    );
};

export default TourPlaceInfo;