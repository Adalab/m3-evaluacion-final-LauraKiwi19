import React from "react";
import rickmortylogo from "../images/rickmortylogo.png"
import "../styles/_header.scss"

const Header = () => {
    return (
        <header className="header">
            <img className="header__image" src={rickmortylogo} alt="rick and morty logo" />
        </header>
    )
}

export default Header