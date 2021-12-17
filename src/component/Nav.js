import React from 'react';
import { useHistory } from "react-router-dom";
import logo from '../shaadi.png';
import { Link } from 'react-router-dom';

export default function Nav() {
  const history = useHistory();
  const logoutHandler = () => {
    localStorage.clear();
    history.push('/login');
  }

  return (
    <div style={{ padding: "10px", backgroundColor: "#007bff", color: "#fff", overflow:'auto' }}>
       <Link style={{ float:'left', width: "90%"  }} to='/'><img src={logo} alt='logo' /></Link>
      <p onClick={logoutHandler} style={{ cursor: "pointer" }}>Logout</p>
    </div>
  )
}