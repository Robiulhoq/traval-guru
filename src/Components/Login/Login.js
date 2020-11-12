import React, { useContext, useState } from 'react';
import  firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './Login.css'
import { PlaceContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);


const Login = () => {
    const [user, setUser] = useState(false);
    const hendleLogin = () =>{
        setUser(true);
    }
    const hendleCreated = () =>{
        setUser(false);
    }

    // const [createdUser, setCreatedUser] = useState({
    //     isSingIn: false,
    //     email:'',
    //     password:''
    // });

    const { loginValue } =React.useContext(PlaceContext);

    const [createdUser, setCreatedUser] = loginValue;

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    // console.log(createdUser.email, createdUser.password)
    const hendleBlur = (e) =>{
        
        let isFormvalid = true;
        if(e.target.name === "email"){
            isFormvalid = e.target.value;
        }
        if(e.target.name === "password"){
            isFormvalid = e.target.value;
        }
        if(isFormvalid){
            const newUser = {...createdUser};
            newUser[e.target.name] = e.target.value;
            setCreatedUser(newUser);
        }
    }
    // hendleFromsubmit
    const hendleFromSubmit = (e) =>{
        if(createdUser.email && createdUser.password){
        firebase.auth().createUserWithEmailAndPassword(createdUser.email,createdUser.password)
        .then(res =>{
            const newUser = {...createdUser};
            newUser.isSingIn = true;
            setCreatedUser(newUser);
            history.replace(from)
        
        })
        
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
           console.log(errorCode, errorMessage)
          })};
          e.preventDefault();
    }
    // hendleLoginSubMIt

    const hendleLoginSubmit = (e) =>{
        firebase.auth().signInWithEmailAndPassword(createdUser.email, createdUser.password)
        .then(res => {
            const newUser = {...createdUser};
            newUser.isSingIn = true;
            setCreatedUser(newUser);
            history.replace(from)
        })    
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
            // ...
          });
          e.preventDefault();
    }
 
// hendleGoogleSingIN
var provider = new firebase.auth.GoogleAuthProvider();

const hendleGoogleSingIN = () =>{
    firebase.auth().signInWithPopup(provider)
    .then(res=>  {const {email} =res.user;
        const singIn ={emeil: email,
                       isSingIn: true 
        }
        setCreatedUser(singIn);
        
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
}


    return (
        <div className="login-container">
          {user === false?  <div>
             <h3>Created an account</h3>
            <form action="">
                <input type="text" onBlur={hendleBlur} name="email" required placeholder="Email"/>
                <br/>
                <input type="password" onBlur={hendleBlur} name="password" id="" required placeholder="Password"/>
                <br/>
                <br/>
                <input className="btn" type="submit" onClick={hendleFromSubmit} value="Created an account"/>
            </form>
            <p>Allradey have an account?</p>
            <button className="btn" onClick={hendleLogin}>Login</button>
            {createdUser.isSingIn===true?<p>Account Created successfully</p>: null}
            </div>:
            
           
            <div className="login">
               <form action="">
                   <h2>Login</h2>
                   <input type="text" onBlur={hendleBlur} name="email" placeholder="Email"/>
                   <br/>
                   <input type="password" onBlur={hendleBlur} name="password" placeholder="password"/>
                   <br/>
                   <input className="btn" onClick={hendleLoginSubmit} type="submit" value="Login"/>
               </form>
               <p>Created an account?</p>
                <button className="btn" onClick={hendleCreated}>new account</button>
                {createdUser.isSingIn===true?<p>Login successfully</p>: null}
          </div> }


           <button className="btn" onClick={hendleGoogleSingIN}>Continue With Google</button>
        </div>
    );
};

export default Login;