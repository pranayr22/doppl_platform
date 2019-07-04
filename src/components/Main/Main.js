import React, {Component} from 'react';
import Maps from '../../components/Maps/Maps';
import './Main.css';
import ContainerList from '../Containers/ContainerList/ContainerList';
import Containers from '../FillDot/FillDot';
import {Route, Switch} from 'react-router-dom';


class Main extends Component {
    
    activeIconHandler = (id) => {
        this.props.active(id);
        return(
          console.log("Maps2")
        );
      }


    render(props) {
        return (
            <div className="main">
              <Switch>
                <Route path="/containers" render={(props) => (<ContainerList data={this.props.data} {...props} />)} />
                <Route path="/dashboard" render={(props) => (<Maps data={this.props.data} active={this.activeIconHandler} {...props} />)} />
              </Switch>
                {/* <Maps data={this.props.data} active={this.activeIconHandler}/> */}
                {/* <ContainerList data={this.props.data}/> */}
            </div>
        )
}
}


export default Main;