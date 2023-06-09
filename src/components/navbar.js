import * as React from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styled from "@emotion/styled"
import "../styles/navbar.css"
import Pill from "../components/pill"
import {Link, navigate} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";

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


const Navbar = ({toggleModal}) => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    return (
        <header>
            <div className="left">
            <Link to="/">
                <StaticImage
                    placeholder= 'none'
                    src="../images/EASIT-Logo-slim.png"
                    loading="eager"
                    width={120}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="EASIT Logo"
                    className="easit-logo"
                />
            </Link>
            </div>
            <div className="right">
            <nav ref={navRef}>
                <A><Link to="/#productSection" className="link" activeClassName="active">Produkte</Link></A>
                <A><Link to="/pricing" className="link" activeClassName="active">Preise</Link></A>
                <A><Link to="/how-it-works" className="link" activeClassName="active">Wie funktioniert's?</Link></A>
                <A><Link to="/faq" className="link" activeClassName="active">FAQ</Link></A>
                <A><Link to="/contact" className="link" activeClassName="active">Kontakt</Link></A>
                <Pill action={() => navigate("/pricing")} className={"pills"}>Zum Angebot</Pill>
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
            </div>
        </header>
    );
}

export default Navbar;