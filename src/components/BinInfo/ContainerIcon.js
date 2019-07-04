import React from 'react'; //add {Component}
// import './MapIcons.css';
// import PropTypes from 'prop-types';
// import shouldPureComponentUpdate from 'react-pure-render/function';
// import {IconStyles, IconHoverStyles} from './MapIconsStyles';

// class MapIcons extends Component {
//     static propTypes = {
//       // GoogleMap pass $hover props to hovered components
//       // to detect hover it uses internal mechanism, explained in x_distance_hover example
//       $hover: PropTypes.bool,
//       text: PropTypes.string
//     };
  
//     static defaultProps = {};
  
//     shouldComponentUpdate = shouldPureComponentUpdate;
  
  
//     render() {
//       const style = this.props.$hover ? IconHoverStyles : IconStyles;
  
//       return (
//          <div style={style}>
//             {this.props.text}
//          </div>
//       );
//     }
//   }


const ContainerIcon = ({ color }) => 
    <div className="mapIcon" style={{
        color: 'white', 
        background: color,
        padding: '6px 6px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        transform: 'translate(-50%, -50%)'
    }}>
</div>;

export default ContainerIcon;