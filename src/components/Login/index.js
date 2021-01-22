import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import { auth, provider } from '../Firebase';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../StateProvider/reducer';

function Login() {
   const [{}, dispatch] = useStateValue();

   const signIn = () => {
      auth.signInWithPopup(provider)
         .then(result => {
            dispatch({
               type: actionTypes.SET_USER,
               user: result.user
            })
         })
         .catch(error => alert(error.message))
   }

   return (
      <div className="login">
         <div className="login__container">
            <img 
               src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/WhatsApp_logo-color-vertical.svg/langfr-220px-WhatsApp_logo-color-vertical.svg.png" 
               alt="WhatsApp"
            />
            <div className="login__text">
               <h1>Sign in to WhatsApp</h1>
            </div>

            <Button 
               type="submit"   
               onClick={signIn}
            >
               Sign In With Google
            </Button>
         </div>
      </div>
   )
}

export default Login
