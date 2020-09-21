import React from 'react'
import { Link } from 'react-router-dom';
 const Navbar = () => {
    return (
        <nav className = "navbar navbar-dark bg-dark mb-5">
            <span className = "navbar-brand mb-0 h1 mx-auto text-white"><Link to= "/"><i className="fas fa-music"></i> Cheezam</Link></span>
        </nav>
    )
}

export default Navbar;