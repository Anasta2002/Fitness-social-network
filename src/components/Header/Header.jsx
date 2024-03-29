import React from 'react';
import classes from './Header.module.css';
import Logo from './Logo.png';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <NavLink to={'/'}>
                <img src={Logo} alt=''/>            
            </NavLink>
            <div className={classes.login_block}>
                {props.isAuth ? props.login :
                    <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
}
export default Header;