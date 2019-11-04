import React from 'react';

import classes from './NavBarItem.module.css';
import SubNavBar from '../SubNavigationBar/SubNavigationBar';

const navItem = (props) => {
    return (
        // <Link to={props.path} className={classes.NavItem}>{props.value}</Link>
        <li className={classes.NavItem}>
            <span >{props.value}</span>
            <div className={classes.SubMenu}>

            <ul className={classes.NavItemList}>
                {props.submenu.map(item => <SubNavBar path={item.path} value={item.name} key={item.id} />)}
            </ul>
            </div>
        </li>

    );
}

export default navItem;