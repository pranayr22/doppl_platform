import React from 'react';
import './ChartList.css';

const ChartList = () => {
    return(
        <div className="binList">
            <ul className="binItems">
                <li className="binItem"><div className="binCircle1"></div>36 bins Empty</li>
                <li className="binItem"><div className="binCircle2"></div>177 bins Partially Full</li>
                <li className="binItem"><div className="binCircle3"></div>322 bins Almost Full</li>
                <li className="binItem"><div className="binCircle4"></div>19 bins Full</li>
                <li className="binItem"><div className="binCircle5"></div>7 bins Overfilled</li>
            </ul>
        </div>
    )
}
export default ChartList;