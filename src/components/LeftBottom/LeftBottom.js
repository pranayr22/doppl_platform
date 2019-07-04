import React from 'react';
import './LeftBottom.css';


const LeftBottom = () => {
    return (
        <div className="leftBottom">
            <ul className="pagesList"> 
                <li className="pageItem">Dashboard</li>
                <li className="pageItem">Containers</li>
                <li className="pageItem">Vehicle Routes</li>
                <li className="pageItem">Reports</li>
                <li className="pageItem">Account</li>
            </ul>

        </div>
    )
}

export default LeftBottom;