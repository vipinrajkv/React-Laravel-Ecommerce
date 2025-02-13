import React from 'react'
import { Link, Navigate, Outlet, NavLink} from 'react-router-dom'
import NavCartDropDown from './navCartDropDown'
import { useSelector } from 'react-redux';
export default function NavBar() {
   const user_name = localStorage.getItem('user_name');
   const userName =  useSelector(state => state.auth.userName) ?? user_name ;

   return (
      <>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
               <li className="nav-item">
                  <NavLink to="" className="nav-link" >Home </NavLink>
               </li>
               <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span className="nav-label">Pages </span><span className="caret"></span></a>
               </li>
               <NavCartDropDown/>
               <li className="nav-item">
                  <NavLink to="" className="nav-link" >Pages </NavLink>
               </li>
               <li className="nav-item">
                  <NavLink to="" className="nav-link" >{userName} </NavLink>
               </li>
               
            </ul>
         </div>
      </>
   )
}
