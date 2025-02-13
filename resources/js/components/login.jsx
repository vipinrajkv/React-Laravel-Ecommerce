// import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { loginUser } from '../redux/authSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';

export default function Login() {
   const [formInputs,setLoginForm] = useState({
      email : '',
      password : '',
   })
   const handleInput = (e)=> {
      const{name,value} = e.target;
      setLoginForm({...formInputs,[name]:value})
   }
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const location = useLocation();
   console.log(location);
   const storeLoginForm = (e)=>{
      e.preventDefault();
      const loginData = {
         email : formInputs.email,
         password : formInputs.password
      }
      dispatch(loginUser(loginData)).then((result)=>{
         
         if (result.payload){
            const from = location.state?.from || '/'; 
            navigate(from);
         }
      })   
   }
   return (

      <div className="login_area">
         <div id="login">
            <h3 className="text-center text-white pt-5">Login form</h3>
            <div className="container">
               <div id="login-row" className="row justify-content-center align-items-center">
                  <div id="login-column" className="col-md-6">
                     <div id="login-box" className="col-md-12">
                        <form onSubmit={storeLoginForm}>
                           <h3 className="text-center text-info text_color">Login</h3>
                           <div className="form-group">
                              <label for="username" className="text-info">Email:</label><br></br>
                              <input type="text" name="email" id="email" value={formInputs.email}
                               className="form-control" onChange={handleInput}></input>
                           </div>
                           <div className="form-group">
                              <label for="password" className="text-info">Password:</label><br></br>
                              <input type="text" name="password" id="password"  value={formInputs.password}
                               className="form-control"  onChange={handleInput}></input>
                           </div>
                           <div className="form-group">
                           <button type="submit" className="btn btn-dark">Submit</button>
                           </div>
                            <div id="register-link" className="text-right">
                                <a href="#" className="text-info">Click Here to Register</a>
                            </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
)
}
