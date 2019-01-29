import React from 'react';
import classes from './Head.module.css';
import Logo from '../../../assets/images/logo.svg';
import Logos from '../../../assets/images/logos.svg';

const Header = () => {
    return (
        <div className={classes.Header}>
            <div className={classes.Header_content}>
                <img className={classes.Logo} src={Logo} alt='Logo' />
                <img className={classes.Logos} src={Logos} alt='Logo' />
            </div>
        </div>
    );
}


export default Header;