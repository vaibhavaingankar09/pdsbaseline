import React from 'react';

import NavBarItem from './NavBarItem/NavBarItem';
import classes from './NavigationBar.module.css';
import PrimaryMenu from './PrimaryMenu/PrimaryMenu';


const navigationBar = (props) => {

    let primaryMenuItems = [
        {
            id: '11',
            name: 'Home',
            path: '/'
        },
        {
            id: '12',
            name: 'Feedback',
            path: '/feedback'
        },
        {
            id: '13',
            name: 'Help',
            path: '/help'
        },
        {
            id: '14',
            name: 'Demo Version',
            path: '/demoVersion'
        },
        {
            id: '15',
            name: 'User Guide',
            path: '/userGuide'
        },
        {
            id: '16',
            name: 'SQA Guide',
            path: '/sqaGuide'
        },
        {
            id: '17',
            name: 'Metrics Plan Template',
            path: '/metricsPlanTemplate'
        },
        {
            id: '18',
            name: 'Logout',
            path: '/logout'
        }
    ];
    let navItems = [
        {
            id: '2',
            name: 'Reports',
            path: '/reports',
            submenu: [
                {
                    id: '21',
                    name: 'Baseline Reports',
                    path: '/reports/baselineReports'
                },
                {
                    id: '22',
                    name: 'Dashboard Reports',
                    path: '/reports/dashboardReports'
                },
                {
                    id: '23',
                    name: 'Metrics Non Compliance Report',
                    path: '/reports/metricsNonComplianceReport'
                },
                {
                    id: '24',
                    name: 'Goal Met Report',
                    path: '/reports/goalMetReport'
                },
                {
                    id: '25',
                    name: 'DIR Report',
                    path: '/reports/dirReport'
                },
                {
                    id: '26',
                    name: 'Incorrect Master',
                    path: '/reports/incorrectMaster'
                },
                {
                    id: '27',
                    name: 'Summary Report',
                    path: '/reports/summaryReport'
                }
            ]
        },
        {
            id: '3',
            name: 'Projects',
            path: '/projects',
            submenu: [
                {
                    id: '31',
                    name: 'Create/Edit Project',
                    path: '/projects/createEditProject'
                },
                {
                    id: '32',
                    name: 'Search Project',
                    path: '/projects/searchProject'
                },
                {
                    id: '33',
                    name: 'Metrics Plan',
                    path: '/projects/metricsPlan'
                }
            ]
        },
        {
            id: '4',
            name: 'Baseline Planning',
            path: '/baselinePlanning',
            submenu: [
                {
                    id: '41',
                    name: 'Create Baseline Plan',
                    path: '/baselinePlanning/createBaselinePlan'
                }
            ]
        },
        {
            id: '5',
            name: 'Metrics Baseline Contents',
            path: '/metricsBaselineContents',
            submenu: [
                {
                    id: '51',
                    name: 'Add/Remove Project(s)',
                    path: '/metricsBaselineContents/addRemoveProjects'
                }
            ]
        },
        {
            id: '6',
            name: 'Project Metrics',
            path: '/projectMetrics',
            submenu: [
                {
                    id: '61',
                    name: 'Upload Metrics Data',
                    path: '/projectMetrics/uploadMetricsData'
                },
                {
                    id: '62',
                    name: 'Metrics Data Validation',
                    path: '/projectMetrics/metricsDataValidation'
                }
            ]
        },
        {
            id: '7',
            name: 'Setting',
            path: '/settings',
            submenu: [
                {
                    id: '71',
                    name: 'User Management',
                    path: '/settings/userManagement'
                },
                {
                    id: '72',
                    name: 'Project Mapping',
                    path: '/settings/projectMapping'
                },
                {
                    id: '73',
                    name: 'Options',
                    path: '/settings/options'
                }
            ]
        }
    ];
    return (
        <div>
            <PrimaryMenu menuItems={primaryMenuItems} />

            <div className={classes.NavBar}>
                <ul className={classes.NavBarItem}>
                    {navItems.map(navItem => (
                        <NavBarItem key={navItem.id} value={navItem.name} path={navItem.path} submenu={navItem.submenu} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default navigationBar;