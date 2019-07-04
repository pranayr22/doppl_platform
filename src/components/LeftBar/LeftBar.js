import React from 'react';
import './LeftBar.css';
import Logo from '../Logo/Logo';
import Toolbar from '../Navigation/Toolbar/Toolbar';




const LeftBar = () => {
    return (
        <div className="leftBar">
            <Logo />
            <Toolbar />
        </div>
    )
}

export default LeftBar;