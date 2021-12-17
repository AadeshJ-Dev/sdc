import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <ul>
      <Link to='/home'><li>Home</li></Link>
      <Link to='/about'><li>About</li></Link>
    </ul>
  )
}