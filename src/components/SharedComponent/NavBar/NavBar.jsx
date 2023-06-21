import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='navbar flex gap-6 justify-center bg-black py-3 text-white'>
            <NavLink to="/" style={({ isActive }) => {
                return {
                    color: isActive && "Blue",
                };
            }}>Home</NavLink>
            <NavLink to="/adduser" style={({ isActive }) => {
                return {
                    color: isActive && "Blue",
                };
            }}>Add User</NavLink>
        </div>
    );
};

export default NavBar;