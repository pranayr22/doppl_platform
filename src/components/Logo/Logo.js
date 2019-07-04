import React from 'react';
import torontoLogo from '../../assets/images/toronto-logo.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={torontoLogo} alt="TorontoLogo" />
    </div>
);


export default logo;