import React, {Component} from 'react'; //add {Component}
import './MapIcons.css';
import PropTypes from 'prop-types';
import shouldPureComponentUpdate from 'react-pure-render/function';
import {IconStyles, IconHoverStyles,} from './MapIconsStyles';

class MapIcons extends Component {
    static propTypes = {
      // GoogleMap pass $hover props to hovered components
      // to detect hover it uses internal mechanism, explained in x_distance_hover example
      $hover: PropTypes.bool,
      text: PropTypes.string
    };
  
    static defaultProps = {};
  
    shouldComponentUpdate = shouldPureComponentUpdate;
  
  
    render() {
      const newIconStyles = {
        ...IconStyles,
        backgroundColor: this.props.fill
      }
      const newIconHoverStyles = {
        ...IconHoverStyles,
        backgroundColor: this.props.fill
      }

      const style = this.props.$hover ? newIconHoverStyles : newIconStyles;
  
      
      return (
         <div style={style} onClick={e => this.props.clicked(this.props.id)}>
            {this.props.text}
         </div>
         
      );
    }
  }


// const MapIcons = ({ color }) => 
//     <div className="mapIcon" style={{
//         color: 'white', 
//         background: color,
//         padding: '4px 4px',
//         display: 'inline-flex',
//         textAlign: 'center',
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderRadius: '100%',
//         transform: 'translate(-50%, -50%)'
//     }}>
// </div>;

export default MapIcons;