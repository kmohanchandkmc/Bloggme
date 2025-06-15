import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { TbLogout } from "react-icons/tb";
import { FiLogIn } from "react-icons/fi";
import { AuthContext } from '../context/authContext';

const Navbar = () => {
  const {currentUser, logout}=useContext(AuthContext)
  return (
    <div className='navbar'> 
      <div className='container'>
        <div className='logo'>𝓫𝓵𝓸𝓰𝓰𝓶𝓮</div>
        <div className='links'>
          <Link className='link' to="/?cat=art">
          <h6>ART</h6>
          </Link>
          <Link className='link' to="/?cat=science">
          <h6>SCIENCE</h6>
          </Link>
          <Link className='link' to="/?cat=technology">
          <h6>TECHNOLOGY</h6>
          </Link>
          <Link className='link' to="/?cat=cinema">
          <h6>CINEMA</h6>
          </Link>
          <Link className='link' to="/?cat=design">
          <h6>DESIGN</h6>
          </Link>
          <Link className='link' to="/?cat=food">
          <h6>FOOD</h6>
          </Link>
          <span className='write'>
            <Link className="link" to="/write">Write</Link>
          </span>
          <span>{currentUser?.username}</span>
        </div>
        <div className='loginIcon'>
          {currentUser ? <span><TbLogout /></span> : <span><FiLogIn /></span>}
          {currentUser ? (<p onClick={logout}>Logout</p>) : (<Link className='link' to="/login">Login</Link>)}
        </div>
    </div>
    </div>
  )
}

export default Navbar