import React from "react";

function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="#">produtos</a>
                <button className="navbar-toggler" 
                            type="button"  
                            data-bs-toggle="collapse" 
                            data-bs-target="#navbarColor01" 
                            aria-controls="navbarColor01" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home<span className="visually-hidden">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">cadastro</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">consulta</a>
                    </li>
                </ul>
            </div>
        </nav>


    )

}

export default Navbar;