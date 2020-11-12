import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';
import './Booking.css';

const Booking = () => {
    const [calender, setCalender] = useState(false);
    const [value, onChange] = useState(new Date());
    const [tovalue, setTovalue] = useState(new Date());
    let date = value.getDate() + "-"+ parseInt(value.getMonth()+1) +"-"+value.getFullYear();
    
    let date2 = tovalue.getDate() + "-"+ parseInt(tovalue.getMonth()+1) +"-"+tovalue.getFullYear();
   
   const hendleCalender = () =>{
       setCalender(true)
   }
    
    return (
        <div className="booking-container">
            <h5>Origin</h5>
           <input type="text"/>
           <h5>Destination</h5>
           <input type="text"/>
           <p>From</p>
           <div className="calender">
           {calender === true?
           <div>
           <input value={date} type="text"/>
           <br/>
           <Calendar onChange={onChange}/>
           </div>:
           <input value={date} onClick={hendleCalender} type="text"/>
           }
           <p>To</p>
           { calender === true?<div>
           <input value={date2} type="text"/>
           <br/>
           <Calendar onChange={setTovalue}/>
           </div>:<input value={date2} onClick={hendleCalender} type="text"/> }
           </div>
           <br/>
          <Link to="/hotel"><button>Start Booking</button></Link>
           
      
        </div>
    );
};

export default Booking;