const K_SIZE = 2;



const IconStyles = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_SIZE,
  height: K_SIZE,
  left: -K_SIZE / 2,
  top: -K_SIZE / 2,

//   border: '5px solid #f44336',
  borderRadius: K_SIZE * 2,
//   textAlign: 'center',
//   color: '#3f51b5',
//   fontSize: 16,
//   fontWeight: 'bold',
  padding: 4,
  cursor: 'pointer'
  

  
  


};


const IconHoverStyles = {
  ...IconStyles,
//   border: '5px solid #3f51b5',
//   color: '#f44336'
    padding: 6,
    borderRadius: K_SIZE * 4,
    border: '1px solid white'
};

export {IconStyles, IconHoverStyles, K_SIZE};


//NEW ICON STYLES
//1) WHEN THE ICON IS NOT BEING HOVERED, TURN TO COLOUR OF FILL LEVEL
//2) WHEN THE ICON IS BEING HOVERED, GROW THE ICON USING ANIMATION