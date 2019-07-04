import React, {Component} from 'react';
import Aux from '../Aux/Aux';
import classes from './Layout.module.css';
import LeftBar from '../../components/LeftBar/LeftBar';
// import Main from '../../components/Main/Main';
// import RightBar from '../../components/RightBar/RightBar';

class Layout extends Component {
    
    
    

   render() { 
       return(
            <Aux>
                <LeftBar />
            <div className={classes.Layout}>
                {/* <Main data={this.props.data} active={this.activeIconHandler}/>
                <RightBar data={this.props.data} active={this.state.active}/> */}
                {this.props.children}
            </div>
            </Aux>
       )
   }
}

export default Layout;