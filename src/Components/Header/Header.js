
import React, { useContext, useEffect, useState } from 'react';
import './Header.css';
import logo from '../../image/Logo.png'
import { Link, useParams } from 'react-router-dom';
import TourPlaceInfo from '../TourPlaceInfo/TourPlaceInfo';
import TourPlace from '../TourPlace/TourPlace';
import fakeData from '../fakeData/fakeData.json';
import { PlaceContext } from '../../App';


const Header = () => {
    const data = fakeData;
    const {placeValue} =React.useContext(PlaceContext)
    const [place, setPlace] = placeValue;
    useEffect(() => {
     const onedata =  data.filter(onePlace => onePlace.id === "01");
     setPlace(onedata);    
    }, []);
    // useEffect(()=>{
        // const hendleChangData = data.find(tourPlace => tourPlace.id === "01");
        // setPlace(hendleChangData);
    // },[])

const hendleClick = (id) =>{
    const ditackData = data.filter(onePlace => onePlace.id === id);
    setPlace(ditackData);
}
    return (
        <div className="img-container">
        <div className="top-header">
        <div className="main-logo">
            <img src={logo} alt=""/>
        </div>
        <div className="link">
           <a>News</a>
           <a>Distraction</a>
           <a>Blog</a>
           <a>Contact</a>
           <Link><button>Login</button></Link>
        </div>
        </div>
        <div className="tour">
        <div className="tour-placeinfo">
         <TourPlaceInfo></TourPlaceInfo>
        </div>
        <div className="tour-place">
        {
            data.map(singlePlace => <TourPlace hendleClick={hendleClick} place={singlePlace}></TourPlace>)
        }
        </div>
        </div>
      </div>
      
    );
};

export default Header;