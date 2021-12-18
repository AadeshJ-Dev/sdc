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
    <div style={{ padding: "10px 40px", backgroundColor: "#007bff", color: "#fff", display: "flex", alignItems: "center", justifyContent: "space-between", }}>
      <Link to='/'><img src={logo} alt='logo' /></Link>
      <h3 onClick={logoutHandler} style={{ cursor: "pointer" }}>Logout</h3>
    </div>
  )
}