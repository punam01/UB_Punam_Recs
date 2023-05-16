import React, { useState } from 'react';
import { FaBars, FaPencilAlt, FaReadme, FaSearch, FaUserCircle} from 'react-icons/fa';
import { IconContext } from "react-icons";

function Navbar(props){
    return(
        <>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.heading}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar">
                    <IconContext.Provider value={{ className: "top-react-icons" }}>
                        <FaBars/>
                    </IconContext.Provider>
                </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">                  
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2 border-0" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn" type="submit">
                            <IconContext.Provider value={{ className: "top-react-icons" }}>
                                <FaSearch/>
                            </IconContext.Provider>
                        </button>
                    </form>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="/">
                                <IconContext.Provider value={{ className: "top-react-icons" }}>
                                    <FaPencilAlt/>
                                </IconContext.Provider>
                            </a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link active" aria-current="page" href="/">
                                <IconContext.Provider value={{ className: "top-react-icons" }}>
                                    <FaReadme/>
                                </IconContext.Provider>
                            </a>
                        </li>
                        <li className="nav-item dropdown mx-2">
                            <a className="nav-link" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <IconContext.Provider value={{ className: "top-react-icons" }}>
                                    <FaUserCircle/>
                                </IconContext.Provider>
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/">Action</a></li>
                                <li><a className="dropdown-item" href="/">Another action</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="/">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>                    
                </div>            
            </div>
        </nav>
        <h3 className='head text-center fixed-top my-2'>WELCOME</h3>
        </>
    );
}
export default Navbar;