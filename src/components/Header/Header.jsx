import React from "react";
import logo from '../../IMG/logo.png';
import s from './Header.module.css';

const Header = () => {
    return(
        <div className={s.header}>
            <img src={logo} className={s.logo}/>
            <h1 className={s.header}> Social network </h1>
        </div>
        )
}

export default Header;
