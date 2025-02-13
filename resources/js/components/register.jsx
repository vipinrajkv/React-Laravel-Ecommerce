// import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { addToCart, decrement, increment } from '../redux/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

export default function Register() {
   const [formInputs,setRegisterForm] = useState({
      name:'',
      email:'',
      password:''
   })
   const handleInput = (e)=> {
      const {name,value} = e.target;
      setRegisterForm({...formInputs,[name]:value});
   }
   const navigate = useNavigate();
   const submitRegisterForm = (e)=> {
      e.preventDefault();
      const data = {
         name :formInputs.name,
         email : formInputs.email,
         password : formInputs.password,
      }
      console.log(data);
      axios.post('http://localhost:8000/api/register',data,{})
         .then(response => {
            if(response.data.status) {
               localStorage.setItem('token',response.data.token)
            }
            // navigate('/');
         }).catch(function(error) {
            if(error.response) {
               if (error.response.status === 401) {
                  setValidationError(error.response.data.errors)
              }
            }
         });
   }
   return (
      <div className="login_area">
         <div id="login">
            <h3 className="text-center text-white pt-5">Register form</h3>
            <div className="container">
               <div id="login-row" className="row justify-content-center align-items-center">
                  <div id="login-column" className="col-md-6">
                     <div id="login-box" className="col-md-12">
                        <form  onSubmit={submitRegisterForm}>
                           <h3 className="text-center text-info text_color">Register</h3>

                           <div className="form-group">
                              <label for="username" className="text-info">Name:</label><br></br>
                              <input type="text" name="name" id="name" value={formInputs.name}  onChange={handleInput}
                              className="form-control"></input>
                           </div>
                           <div className="form-group">
                              <label for="username" className="text-info">Email:</label><br></br>
                              <input type="text" name="email" id="email" value={formInputs.email}  onChange={handleInput}
                              className="form-control"></input>
                           </div>
                           <div className="form-group">
                              <label for="password" className="text-info">Password:</label><br></br>
                              <input type="text" name="password" id="password" value={formInputs.password}  onChange={handleInput} 
                               className="form-control"></input>
                           </div>
                           <div className="form-group">
                           <button type="submit" className="btn btn-dark">Submit</button>
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
