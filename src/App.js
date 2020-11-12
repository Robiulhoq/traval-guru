import './App.css';
import Error from './Components/Error/Error';
import Header from './Components/Header/Header';
import Slider from './Components/Slider/Slider';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Booking from './Components/Booking/Booking';
import TourPlaceInfo from './Components/TourPlaceInfo/TourPlaceInfo';
import { createContext, useState } from 'react';
import Login from './Components/Login/Login';
import Hotel from './Components/Hotel/Hotel';
import PrivatedRoute from './Components/PrivatedRoute/PrivatedRoute';


export  const PlaceContext = createContext();
function App() {

const [place, setPlace] = useState([]);
const [booking, setBooking] = useState(false);
const [createdUser, setCreatedUser] = useState({
  isSingIn: false,
  email:'',
  password:''
});
  return (
    <PlaceContext.Provider value={{placeValue: [place, setPlace], bookingValue : [booking, setBooking], loginValue: [createdUser, setCreatedUser]}}>
  <Router>
    <Switch>
      <Route path="/slider">
        <Slider></Slider>
      </Route>
      <Route exact path="/">
      <Header></Header>  
      </Route>
      <Route path="/login">
        <Login></Login>
      </Route>
      <PrivatedRoute path="/hotel">
        <Hotel></Hotel>
      </PrivatedRoute>
      <Route path="*">
          <Error></Error>
      </Route>
    </Switch>
    </Router>   
    </PlaceContext.Provider>
  );
}

export default App;
