import React from 'react';


const fillDot = (props) => {
        
        let fill = null 
        
            switch (Math.round((props.fill / 25))) {
            case 0:
                fill = "rgba(153, 102, 255, 0.6)";
                break;
            case 1:
                 fill = "rgba(75, 192, 192, 0.6)";
                break;
            // case 2:
            //     fillColor"rgba(75, 192, 192, 0.6)";
            //     break;
            case 2:
                 fill = "rgba(255, 206, 86, 0.6)";
                break;
            case 3:
                 fill = "rgba(54, 162, 235, 0.6)";
                break;
            case 4:
                 fill = "rgba(255, 69, 155, 0.6)";
                break;
            default:
                 fill = "rgba(255, 255, 255, 0.6)";
                }
        

        let style = {
            borderRadius: 10,
            padding: 6,
            border: '1px solid white',
            backgroundColor: fill
        };
        
        // console.log("fillArray", fillArray)
        return(
            <div style={style}>

            </div>
            
        )
   }




export default fillDot;