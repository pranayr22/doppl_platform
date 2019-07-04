import React, {Component} from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import ContainerIcon from './ContainerIcon';
import shouldPureComponentUpdate from 'react-pure-render/function';
import './BinInfo.css';
import garbage from './garbage.png';


class BinInfo extends Component {
  
   state = {
     active: {
       id: 0
     }
   }
   
  
  static propTypes = {
      center: PropTypes.array,
      zoom: PropTypes.number,
      greatPlaceCoords: PropTypes.any
    };
  
    static defaultProps = {
        center: [44.231, -76.486],
        zoom: 17
    };
    
    shouldComponentUpdate = shouldPureComponentUpdate;
  

    
    componentDidUpdate() {
      let trueID = {}
      // this.props.data.filter(arr => arr.id === this.props.active);
      // console.log(this.props.data)
      // console.log("TrueID", trueID.long)
      // console.log("Test");
      // if (trueID['id'] === this.props.active) {
      //   console.log(trueID);
      // } else {
      //   let newID = trueID.filter(item => item.id === this.props.active)
      //   console.log(newID['id'])
      // }
      if (this.state.active.id !== this.props.active) {
        let newID = this.props.data.map(arr => {
            if (arr.id === this.props.active) {
              trueID = {...arr}
              this.setState({active: trueID})
              return(console.log(trueID.id))
            }
        })
        console.log("Test", trueID.fill)
        console.log(this.state.active)
    }
  }

    

render() {


  // const result = (item) => {
  //   let data = this.props.data.filter(arr => arr.id === this.props.active)
  //   // console.log(result)
  //   return result

  // }
return (

        <div className={this.state.active.id === 0 ? "none" : "rightBottom"}>
            <h1> Container Details</h1>
            <div className="containerContent">
                {/* <img className="garbagePhoto" src={garbage} alt="Garbage Can"></img> */}
                <ul className="containerInfo"> {/*place beside photo*/}
                    <li className="containerItem">Container ID: {this.state.active.id}</li>
                    <li className="containerItem">Type: {this.state.active.type}</li>
                    <li className="containerItem">Location: {this.state.active.loc}</li>
                    <li className="containerItem">Fill Level: {this.state.active.fill}</li>
                </ul>
            </div>
            <div style={{ height: '25vh', width: '22vw', marginLeft: '25px'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCxezfBISCdVjmV5nd7pBtGCsrLkB0E3qw" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <ContainerIcon
            lat={44.23110}
            lng={-76.48595}
            //text="My Marker"
            color="green"
          />
          
        </GoogleMapReact>
      </div>
        </div>
    )
}
}

export default BinInfo;