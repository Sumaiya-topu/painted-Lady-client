import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import logo from '../../../assets/icon/painted loady logo-01.svg'
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/services'>Services</Link></li>

    </>
    return (
        <div>
            <div className="navbar ">
                <div className='w-11/12 mx-auto'>
                    <div className="navbar-end">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="  h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {
                                    menuItems
                                }
                                {
                                    user ? <> <li><Link to='/myreviews'>My Reviews</Link></li><img className=' h-10 w-10 rounded-full ' src={user?.photoURL} alt="" />{user?.name} <Link onClick={handleLogOut} className=' text-rose-700 ' to='/'>Log Out</Link></> : <><Link to='/login' className="btn btn-sm btn-outline ">Login</Link >
                                    </>
                                }


                            </ul>
                        </div>
                        <img src={logo} className="w-12 h-12 inline-block mr-2" alt="" />
                        <Link to='/' className="lg:text-2xl text-lg font-bold">PAINTED-<span className='text-rose-600'>LADY</span></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            {menuItems}


                        </ul>
                    </div>
                    <div className="navbar-end hidden lg:flex ">
                        {
                            user ? <><Link className=' mx-4 my-2 ' to='/myreviews'>My Reviews</Link><img className=' h-10 w-10 rounded-full ' src={user?.photoURL} alt="" />{user?.name}<Link onClick={handleLogOut} to='/' className='text-rose-700 pl-2 pt-2 font-bold '>Log Out</Link></> : <><Link to='/login' className="btn btn-sm btn-outline ">Login</Link >
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;