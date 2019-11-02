import React from 'react';
import { Link } from 'react-router-dom';

import classes from './SubNavigationBar.module.css';

const subNavItem = (props) => {
    return (
        <li>
            <Link to={props.path} >{props.value}</Link>
        </li>
    );
}

export default subNavItem;