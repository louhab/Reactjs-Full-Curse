import React from 'react';
import { Link, Outlet } from 'react-router-dom';
function Layouts() {
    return (
        <>
        
        <nav>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link to="/" className="nav-link active">Home</Link>
                </li> 
                <li className="nav-item">
                    <Link to="/blog" className="nav-link active">Blog</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link active">Contact</Link>
                </li>
            </ul>  
            </nav>
            <div className='container-fluid w-75 mx-auto'>
                <Outlet/>
            </div>
        </>
    );
}

export default Layouts;