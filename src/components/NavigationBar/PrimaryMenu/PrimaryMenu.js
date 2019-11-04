import React from 'react';

import classes from './PrimaryMenu.module.css';

const primaryMenu = (props) =>{
    const user = "Vaibhav Vaingankar";
    const role = "Admin";
    const version = "1.7";

    return (
        <div className={classes.PrimaryMenu}>
            <div className={classes.userPrimaryMenu}>
                <span className={classes.AppName}>PDS Baseline[version {version}]</span>
                <span className={classes.UserName}>{user} ({role})</span>
                <ul>
                    {props.menuItems.map(item=><li key={item.id}><a href={item.path}>{item.name}</a></li>)}
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