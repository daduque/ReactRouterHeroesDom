import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to={`/`}>Hero App</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link" end to={`/`}>Home</NavLink>
                            <NavLink className="nav-link" end to={`dc`}>DC Comics</NavLink>
                            <NavLink className="nav-link" end to={`marvel`}>Marvel Comics</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />

            <footer className='w-100 h-25 bg-dark'> asd</footer>
        </>
    )
}

export default NavBar