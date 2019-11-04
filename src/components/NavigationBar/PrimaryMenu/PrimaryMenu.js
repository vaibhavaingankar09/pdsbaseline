import React from 'react';
import { Link } from 'react-router-dom';

import classes from './PrimaryMenu.module.css';

const primaryMenu = (props) => {
    const user = "Vaibhav Vaingankar";
    const role = "Admin";
    const version = "1.7";

    return (
        <div className={classes.PrimaryMenu}>
            <div className={classes.userPrimaryMenu}>
                <span className={classes.AppName}>PDS {version} :</span>
                <span className={classes.UserName}>{user} ({role})</span>
                <ul>
                    {props.menuItems.map(item => <li key={item.id}>
                        {/* <a href={item.path}>{item.name}</a> */}
                        <Link to={item.path}>{item.name}</Link>
                    </li>)}
                </ul>
            </div>
            <div className={classes.BaselineReleasePlan}>
                <span>Baseline Release Plan</span>
                <select>
                    <option>Oct-Nov-Dec 19</option>
                </select>
            </div>
        </div>
    );
};

export default primaryMenu;