import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const navigate = useNavigate();

    const login = () => {
        setisLoggedIn(true);
        navigate('/dashboard');
    }
    const logout = () => {
        setisLoggedIn(false);
        navigate('/');
    }
    return (
        <>
            <div className='navbar'>
                <Link to={"/"}>Home</Link>
                <div className="nav-right">
                    {isLoggedIn && (<>
                        <Link to={"/courses"}>Courses</Link>
                        <Link to={"/dashboard"}>Dashboard</Link>
                        <Link to={"/profile"}>Profile</Link>
                        <Link to={"/learning"}>Learning</Link>
                        {/* <Link className='logoutbtn' onClick={logout}>Logout</Link> */} 
                        {/* if work with link, navigate does not work. we need button for navigation */}
                        <button className='btn loginbtn' onClick={logout}>Logout</button>
                    </>)}

                    {!isLoggedIn && (<>
                        <Link to={"/about"}>About</Link>
                        <Link to={"/contact"}>Contact</Link>
                        <button className='btn loginbtn' onClick={login}>Login</button>
                    </>)}
                </div>
            </div>
        </>
    )
}

export default Navbar