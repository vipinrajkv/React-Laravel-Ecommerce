import React, { useContext, useState } from 'react'
import { Link, Navigate, Outlet, NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux';
import NavBar from './navBar'
import DefaultNavBar from './defaultNavBar'
// import { NavLink } from 'react-router-dom';

export default function DefaultHeader() {
	const token = localStorage.getItem('token');
	const tokenData =  useSelector(state => state.auth.token) ?? token ;
	console.log(tokenData);
	return (
		<>
			<div className="hero_area">
				<header className="header_section">
					<div className="container">
						<nav className="navbar navbar-expand-lg custom_nav-container ">
							<a className="navbar-brand" href="index.html"><img width="250" src="images/logo.png" alt="#" /></a>
							<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
								<span className=""> </span>
							</button>
							{tokenData ? <NavBar /> : <DefaultNavBar />}
						</nav>
					</div>
				</header>
			</div>
			 <Outlet/> 
		</>
	)
}
