import React from 'react';

import classes from './NavBarItem.module.css';
import SubNavBar from '../SubNavigationBar/SubNavigationBar';

const navItem = (props) => {
    let subNavItems = props.submenu;
    console.log(subNavItems);
    return (
        // <Link to={props.path} className={classes.NavItem}>{props.value}</Link>
        <li className={classes.NavItem}>
            <span >{props.value}</span>
            <ul>
                {props.submenu.map(item => <SubNavBar path={item.path} value={item.name} key={item.id} />)}
            </ul>
        </li>

    );
}

export default navItem;