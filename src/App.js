import React, { Component } from 'react';
import Layout from './HOC/Layout/Layout';
import './App.css';
import Main from './components/Main/Main';
import RightBar from './components/RightBar/RightBar';


import axios from 'axios';


class App extends Component {
  state = {
    bins: [],
    active: 0
}

activeIconHandler = (id) => {
    
    this.setState({active: id});
    // console.log(this.state.active)
}

      
  componentDidMount() {
    axios.get("https://my-json-server.typicode.com/pranayr22/dopplapi/bins")
      .then(response => {
        this.setState({bins: response.data})

      });
  }
  
  render() {
    return (
      <div className="App">
        <Layout data={this.state.bins}>
          <Main data={this.state.bins} active={this.activeIconHandler}/>
          <RightBar data={this.state.bins} active={this.state.active}/>
        </Layout>
      </div>
    );
  }
}

export default App;
