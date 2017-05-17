import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
  <nav className="navbar">
    <Link to="/"><img className="logo" src="/images/logo.png"/></Link>
    <Link to="/squads" className="navbar-link">View Squads</Link>
    <Link to="/squads/new" className="navbar-link">New Squad</Link>
  </nav>
)

export default Navbar