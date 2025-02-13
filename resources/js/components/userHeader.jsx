import React, { useContext, useState,useEffect } from 'react'
import { Link, Navigate, Outlet, NavLink, useNavigate} from 'react-router-dom'
import NavBar from './navBar'
import { useDispatch, useSelector } from 'react-redux';

export default function UserHeader() {
	// const {tokenData, setTokenData, setUser, user} = useContext(StateContext)
	const tokenData =  useSelector(state => state.auth.token) ?? token ;
	const navigate = useNavigate();
	useEffect(() => {
    }, [tokenData]);

	if(!tokenData) {
		console.log(tokenData);
		return <Navigate to='/login'/>
	}

	const userLogOut = (e) => {
        e.preventDefault();
		axiosInstance.get('/logout').then(()=>{
			setTokenData(null);
			localStorage.removeItem('token');
			navigate('/login');
		})
    }

	// useEffect(()=> {
	// 	axiosInstance.get('/user').then(response =>{	
	// 		setUser(response.data);
	// 	})
    // },[setUser]);
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
					<NavBar/>
				</nav>
			</div>
		</header>
	</div>
	<Outlet/>
	</>
  )
}
