import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
  <nav className="navbar">
    <Link to="/squads">View Squads</Link>
    <Link to="/squads/new">New Squad</Link>
    <Link to="/">Home</Link>
  </nav>
)

export default Navbar