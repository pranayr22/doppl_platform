import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/dashboard" active>Dashboard</NavigationItem>
        <NavigationItem link="/containers">Containers</NavigationItem>
        <NavigationItem link="/">Routing</NavigationItem>
        <NavigationItem link="/">Reports</NavigationItem>
    </ul>
);


export default navigationItems;