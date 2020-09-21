import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import {UserContext} from '../../App'
import { useHistory, useLocation } from 'react-router-dom';
import { handleFbLogin, initializeLoginFramework, handleGoogleSignIn, handleSignOut,  createUserWithEmailAndPassword, signInWithEmailAndPassword } from './LoginManager';
const Login = () => {
    
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn : false,
    name:'',
    email:'',
    password:'',
    photo:'',
    error:'',
    success: false
  });

  initializeLoginFramework();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
    handleGoogleSignIn()
    .then(res => {
      handleResponse(res, true);
    })
  }

  const fbLogin = () => {
    handleFbLogin()
    .then(res => {
      handleResponse(res, true);
    })
  }
  const signOut = () => {
    handleSignOut()
    .then(res => {
      handleResponse(res, false);
    })
  }

  const handleResponse = (res, redirect ) => {
    setUser(res);
    setLoggedInUser(res);
    if(redirect){
      history.replace(from);
    }
  }
 
  const handleBlur = (e) => {
    
    let isFormValid = true;
    if(e.target.name === 'email'){
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
       
    }
    if(e.target.name === 'password'){
      const isPasswordValid = e.target.value.length > 6;
      const passwordNumber = /\d{1}/.test(e.target.value);
      isFormValid =  isPasswordValid && passwordNumber;
    }
    if(isFormValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }
  const handleSubmit = (e) => {
    if( newUser && user.email && user.password){
     createUserWithEmailAndPassword(user.name, user.email, user.password)
     .then(res => {
      handleResponse(res, true);
     })
    }
    if(!newUser && user.email && user.password){
      signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        handleResponse(res, true);
      })
    }
    e.preventDefault();
  }
  
    return (
        <div>
          <div style={{width:'350px',margin:'0 auto',boxShadow:"0 25px 50px -12px rgba(0,0,0,0.25",padding:'20px'}}>
          
                <h3>Login</h3>
                <form  onSubmit={handleSubmit}>
                {newUser && <input className="form-control" name="name" onBlur={handleBlur} type="text" placeholder="Your Name"/>}
                <br/>
                <input  className="form-control" type="text" onBlur={handleBlur} name="email" placeholder="Enter Your Email" required/>
                <br/>
                <input  className="form-control" type="password" onBlur={handleBlur} name="password" placeholder="Enter Your Password" required/>
                <br/>
                <input  type="checkbox"  onChange={() => setNewUser(!newUser)} name="newUser" />
                <label htmlFor="">Create new account</label>
                <br/>
                
                <input  className="form-control bg-warning" type="submit" value={newUser ? 'Sign up' : 'Login'}/>
                
                </form>

                <p style={{color:'red'}}> {user.error}</p>
                {user.success && <p style={{color:'green'}}>User {newUser? 'Created' : 'logged In'} Successfully</p>}
         
                          
            <p className="text-center">Or</p>
            <Button style={{borderBottom:'3px solid gray'}} className="form-control" onClick={googleSignIn} >continue with google</Button>
            
            <Button className="form-control " onClick={fbLogin}  >continue Facebook</Button>
           
            </div>
           
        </div>
    );
};

export default Login;