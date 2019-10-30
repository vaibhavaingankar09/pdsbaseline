import React from 'react';

import NavBarItem from './NavBarItem/NavBarItem';

const navigationBar = (props) => {

    let navItems = [
        { id: '1', name: 'Home', path: '/' },
        { id: '2', name: 'Reports', path: '/reports' },
        { id: '4', name: 'Projects', path: '/projects' },
        { id: '3', name: 'Baseline Planning', path: '/planning' },
        { id: '5', name: 'Metrics Baseline Contents', path: '/baseline' },
        { id: '6', name: 'Project Metrics', path: '/projectMetrics' },
        { id: '7', name: 'Setting', path: '/settings' }
    ];
    return (
        <div>
            <ul>
                {navItems.map(navItem => (
                    <NavBarItem key={navItem.id} value={navItem.name} path={navItem.path} />
                ))}
            </ul>
        </div>
    );
}

export default navigationBar;