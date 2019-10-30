import React from 'react';
import { Link } from 'react-router-dom';

import classes from './NavBarItem.module.css';

const navItem = (props) => {
    return (
        <Link to={props.path} className={classes.NavItem}>{props.value}</Link>
    );
}

export default navItem;