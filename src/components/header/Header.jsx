import React from "react";
import './Header.css'
import { BsFillCartFill } from "react-icons/bs";

const Header = () => {
    return (
        <div className="header"><h3 className="title">Intocode Coding Shopcamp</h3><BsFillCartFill  className="icon"/></div>
    )
}

export default Header;
