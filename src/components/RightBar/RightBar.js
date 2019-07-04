import React, {Component} from 'react';
import BinInfo from '../../components/BinInfo/BinInfo';
import BinChart from '../BinChart/BinChart';
import './RightBar.css';

class RightBar extends Component {
    
    updateData = (prop) => {
        let myArr = []
        let binCount = {}
        let five = [0, 1, 2, 3, 4]
        let result = []
        prop.map(arr => myArr.push(Math.round(arr.fill / 25)))
        myArr.forEach(x => { binCount[x] = (binCount[x] || 0)+1; });
        console.log(binCount)
        five.map((arr) => {
            if (binCount[arr] > 0 ){
                result.push(binCount[arr])
            } else {
                result.push(0)
            }
            return result 
        })
        console.log(result)
        return result
    }
    

    render() {
    return (
        <div className="rightBar">
            <BinChart data={this.updateData(this.props.data)}/>
            <BinInfo data={this.props.data} active={this.props.active}/>
        </div>
    )
    }
}

export default RightBar;
