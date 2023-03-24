import * as React from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styled from "@emotion/styled"
import "../styles/navbar.css"
import Pill from "../components/pill"
import { Link } from "gatsby";

const A = styled.div`
    float: left;
    padding-left: 0.75em;
    padding-right: 0.75em;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 0.3rem;
    white-space: nowrap;
    color: black!important;
    
    Link{
    color: black!important;
    
    }
`

const Navbar = () => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    return (
        <header>
            <nav ref={navRef}>
                <A><Link to="/" className="link" activeClassName="active">Home</Link></A>
                <A> Produkte</A>
                <A><Link to="/how-it-works" className="link" activeClassName="active">Wie funktioniert's?</Link></A>
                <A><Link to="/contact" className="link" activeClassName="active">Kontakt</Link></A>
                <Pill link="#default">Zum Angebot</Pill>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button
                className="nav-btn"
                onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;