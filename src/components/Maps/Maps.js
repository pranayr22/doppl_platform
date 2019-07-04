import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import MapIcons from '../MapIcons/MapIcons';
import shouldPureComponentUpdate from 'react-pure-render/function';
import './Maps.css';
 
class Maps extends Component {
  
  static propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number,
    greatPlaceCoords: PropTypes.any
  };

  static defaultProps = {
      center: [44.231, -76.486],
      zoom: 14
  };
  
  shouldComponentUpdate = shouldPureComponentUpdate;

  state = {
    bins: [],
    active: 0
  }

      
  activeIconHandler = (id) => {
    this.props.active(id);
    
  }
  // componentDidMount() {
  //   axios.get("https://my-json-server.typicode.com/pranayr22/dopplapi/bins")
  //     .then(response => {
  //       this.setState({bins: response.data})
  //       console.log(this.state.bins);
  //     });
  // }
 
  render() {
    console.log(this.props)
    const bins = this.props.data.map(bin => {
      let fillRate = 6;
      switch (Math.round((bin.fill / 20))) {
        case 0:
          fillRate = "rgba(153, 102, 255, 0.6)";
          break;
        case 1:
          fillRate = "rgba(75, 192, 192, 0.6)";
          break;
        case 2:
          fillRate = "rgba(75, 192, 192, 0.6)";
          break;
        case 3:
          fillRate = "rgba(255, 206, 86, 0.6)";
          break;
        case 4:
          fillRate = "rgba(54, 162, 235, 0.6)";
          break;
        case 5:
          fillRate = "rgba(255, 69, 155, 0.6)";
          break;
        default:
          console.log("im typing")
      }
      return <MapIcons key={bin.id} id={bin.id} lat={bin.lat} lng={bin.long} fill={fillRate} clicked={this.activeIconHandler}/>
    });


    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '55vw' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCxezfBISCdVjmV5nd7pBtGCsrLkB0E3qw" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {bins}
          {/* <MapIcons
            lat={44.226}
            lng={-76.494}
            //text="My Marker"
            color="green"
          />
          <MapIcons
            lat={44.232}
            lng={-76.492}
            //text="My Marker"
            color="#ff0000"
          />
          <MapIcons
            lat={44.231}
            lng={-76.485}
            //text="My Marker"
            color="red"
          />
          <MapIcons
            lat={44.226}
            lng={-76.487}
            //text="My Marker"
            color="orange"
          />
          <MapIcons
            lat={44.230}
            lng={-76.479}
            //text="My Marker"
            color="orange"
          />
          <MapIcons
            lat={44.223}
            lng={-76.492}
            //text="My Marker"
            color="green"
          />
          <MapIcons
            lat={44.231}
            lng={-76.491}
            //text="My Marker"
            color="#ff0000"
          />
          <MapIcons
            lat={44.231}
            lng={-76.481}
            //text="My Marker"
            color="red"
          />
          <MapIcons
            lat={44.225}
            lng={-76.483}
            //text="My Marker"
            color="orange"
          />
          <MapIcons
            lat={44.232}
            lng={-76.48}
            //text="My Marker"
            color="orange"
          /> */}
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Maps;