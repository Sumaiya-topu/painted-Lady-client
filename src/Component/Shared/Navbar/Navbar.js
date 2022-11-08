import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/services'>Services</Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-200">
                <div className='w-11/12 mx-auto'>
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {
                                    menuItems
                                }
                                <Link to='/login' className="btn btn-sm btn-outline ">Login</Link >
                                <Link to='/signup' className="btn btn-sm btn-primary">Sign up</Link >
                            </ul>
                        </div>
                        <Link to='/' className="btn btn-ghost text-4xl font-bold">PAINTED-<span className='text-rose-600'>LADY</span></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            {menuItems}
                        </ul>
                    </div>
                    <div className="navbar-end hidden lg:flex ">
                        <Link to='/login' className="btn btn-sm btn-outline ">Login</Link >
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;