import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FillDot from '../../FillDot/FillDot';
import Moment from 'react-moment';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

function createData(binId, fillLevel, location, lastServiced, lastDetect) { //Change To Bin Info
    console.log({ binId, fillLevel, location, lastServiced, lastDetect })
    return { binId, fillLevel, location, lastServiced, lastDetect };
  
}



//MAP THROUGH BIN DATA INTO createData()
  // createData('Frozen yoghurt', 159, 6.0, 24, 4.0), //Bin ID , Location, Fill Level, Percent Change 
  // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  // createData('Eclair', 262, 16.0, 24, 6.0),
  // createData('Cupcake', 305, 3.7, 67, 4.3),
  // createData('Gingerbread', 356, 16.0, 49, 3.9),

  
  const fillDotHandler = (prop) => {
    let fill = []   
    prop.map(bin => {
        let o = Object.assign({}, bin)
        switch (Math.round((bin.fill / 25))) {
        case 0:
            fill.push("rgba(153, 102, 255, 0.6)");
            break;
        case 1:
            fill.push("rgba(75, 192, 192, 0.6)");
            break;
        // case 2:
        //     fillColor"rgba(75, 192, 192, 0.6)";
        //     break;
        case 2:
            fill.push("rgba(255, 206, 86, 0.6)");
            break;
        case 3:
            fill.push("rgba(54, 162, 235, 0.6)");
            break;
        case 4:
            fill.push("rgba(255, 69, 155, 0.6)");
            break;
        default:
            fill.push("rgba(255, 255, 255, 0.6)");
        }
    });
    return fill;
    }



const containerList = (props) => {
    const classes = useStyles();
    const rows = [ ];
    props.data.map(bin => {
      rows.push(createData(bin.id, bin.fill, bin.loc, bin.service, bin.detect ))
      console.log("binId", bin.id)
      console.log("props.fill", bin.fill)
      console.log("BinLocation", bin.loc)
      console.log("BinBin", bin)
      console.log("Servicing", bin.service)
      console.log("Detect", bin.detect)
    })
    console.log("Row Array", rows)
    const calendarStrings = {
      lastDay : '[Yesterday at] LT',
      sameDay : '[Today at] LT',
      nextDay : '[Tomorrow at] LT',
      lastWeek : '[last] dddd [at] LT',
      nextWeek : 'dddd [at] LT',
      sameElse : 'L'
    };
    const calendarStringss = { //Test different names
      lastDay : 'MMMM DD [at] LT',
      sameDay : '[Today at] LT',
      nextDay : '[Tomorrow at] LT',
      lastWeek : '[last] dddd [at] LT',
      nextWeek : 'dddd [at] LT',
      sameElse : 'L'
    };

  
    return (

    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Container Name</TableCell>
            <TableCell align="right">Fill Level</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Last Servicing</TableCell>
            <TableCell align="right">Last Sensor Update</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row"> {/*binId, fillLevel, location, lastServiced, lastDetect*/}
                {row.binId}
              </TableCell>
          <TableCell align="right"><FillDot fill={row.fillLevel}/>{row.fillLevel}</TableCell> {/*Add <FillDot color=row.fillColor /> */}
              <TableCell align="right">{row.location}</TableCell>
              <TableCell align="right"><Moment unix calendar={calendarStrings}>{row.lastServiced}</Moment></TableCell>
              <TableCell align="right"><Moment unix calendar={calendarStrings}>{row.lastDetect}</Moment></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
export default containerList;