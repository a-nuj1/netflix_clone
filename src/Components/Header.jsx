import React from 'react'
import logo from "../R.png"
import { Link } from 'react-router-dom'
import { RiSearchLine } from "react-icons/ri";


const Header = () => {
  return (
    <nav className='header'>
        <img src= {logo} alt="logo"/>
        <div>
            <Link to= "/tvshows">TV Shows</Link>
            <Link to= "/movies">Movies</Link>
            <Link to= "/tvshows"> Recetly Added </Link>
            <Link to= "/tvshows">My List</Link>
        </div>
        <RiSearchLine/>
    </nav>
  )
}

export default Header