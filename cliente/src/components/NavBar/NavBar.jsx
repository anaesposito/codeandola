import React, { useState, useEffect } from "react";

//Importaciones externas
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

//Importaciones internas
import { ReactComponent as Menu } from "../../assets/svg/menu.svg"
import { ReactComponent as Close } from "../../assets/svg/close.svg"

import "./NavBar.scss"

const ID = 'NavBar';

function NavBar(props) {
console.log(props)
    const [ isOpen, setIsOpen ] = useState(false);

    const handleMenu = () => setIsOpen(!isOpen);

    const { location: { pathname } } = props;
      
    let path = pathname;

    useEffect(() => {
        setIsOpen(false)
    }, [path])

    return (
        <nav id={ID} className="nav-bar">
            <div className="nav-bar__title">
                <Link to="/">&lt; Codeandola &gt;</Link>
                <div className="nav-bar__title-icon">
                    <div onClick={ handleMenu }>
                        { !isOpen ? <Menu /> : <Close /> }
                    </div>
                </div>
            </div>
            <div className={`nav-bar__links ${isOpen ? "active" : ""}`}>
                <div className="nav-bar__links-container">
                    <div>
                        <ul className="nav-bar__links-option">
                            <li>
                                <Link to="/login">Login</Link>  
                            </li>
                            <li>
                                <Link to="/forum">Foro</Link>
                            </li>
                            <li>
                                <Link to="/about">Nosotros</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contacto</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="nav-bar__links-option">
                            <li>
                                <Link to="/fq">Preguntas frecuentes</Link>
                            </li>
                            <li>
                                <Link to="/tc">Términos y condiciones</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {isOpen && <div className="nav-bar__blur"></div>}
        </nav>
    )
}

export default withRouter(NavBar);