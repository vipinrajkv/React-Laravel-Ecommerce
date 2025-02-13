import React from 'react'
import { Link, Navigate, Outlet, NavLink} from 'react-router-dom'
import NavCartDropDown from './navCartDropDown'

export default function DefaultNavBar() {
   return (
      <>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
               <li className="nav-item">
                  <NavLink to="" className="nav-link" >Home </NavLink>
               </li>
               {/* <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span className="nav-label">Cart </span><span className="caret"></span></a>
               </li> */}
               <NavCartDropDown/>
               <li className="nav-item">
                  <NavLink to="/login" className="nav-link" >Login </NavLink>
               </li>
               <li className="nav-item">
                  <NavLink to="/Register" className="nav-link" >Register </NavLink>
               </li>
               
               <li className="nav-item active">
                  {/* <a className="nav-link" href="product.html">Products</a> */}
                  {/* <Link className="nav-link"  to="/login">Login</Link> */}
               </li>


            </ul>
         </div>
      </>
   )
}
