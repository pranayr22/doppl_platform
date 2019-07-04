import React from 'react';
import './LeftTop.css';
import dopplLogo from './dopplLogo.png';
import cityLogo from './cityLogo.png';

const LeftTop = () => {
    return (
        <div className="leftTop">
            
                <img className="dopplLogo" src={dopplLogo} alt={"Doppl Logo"}></img>
                <img className="cityLogo" src={cityLogo} alt={"City Logo"}></img>
        </div>
    )
}

export default LeftTop;