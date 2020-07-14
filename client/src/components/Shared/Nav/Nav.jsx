import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {

    return (
        <nav>
            <div className="nav">
                <NavLink className="logo" to="/">BlogsApp</NavLink>
                <div className="links">
                    <NavLink className="link" to="/blogs">Blogs</NavLink>
                    <NavLink className="link" to="/add-blog">Add Blog</NavLink>
                </div>
            </div>
        </nav>
    )

}

export default Nav