const user = {
    username: "Vaibhav Vaingankar",
    role: "Admin"
}

const version = "1.7";

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

let displayItems = [
    {
        headline: "Capturing TestCases Created per Person per Hour helps:",
        subheadline: "",
        description: [
            { line: "Estimating Test case creation time and hence team size effectively at the start of the project." },
            { line: "Tracking this metrics at regular intervals to know the deviations." },
            { line: "Analyzing the cause of low productivity in current release like very high complexity of the modules,requirements changing frequently etc.." },
            { line: "Identifying means to improve the productivity by taking different measures like creating reusable test cases,providing additional trainings to team members etc.." },
            { line: "Re-estimating the schedule and raising the risks and mitigation plan with client well ahead of time" }
        ],
        imageUrl: "coq.jpg"
    },
    {
        headline: "Cost Of Quality is a derived metric which tells how much efforts the team is spending on quality activities.",
        subheadline: "To Caputre Cost Of Quality::",
        description: [
            { line: "Each task being executed in project, its efforts are to be captured (A simple excel sheet can also help here)" },
            { line: "Categorize the tasks to calculate Appraisal cost [AC], Prevention Cost [PC] and Failure Cost [FC]" },
            { line: "COQ = sum of efforts on AC, PC, FC / Total Efforts spent on all Project Activities" }
        ],
        imageUrl: "story_points.jpg"
    },
    {
        headline: "Following Agile method of project Execution..?",
        subheadline: "Capture the following:",
        description: [
            { line: "Total Efforts used in a Sprint." },
            { line: "Total Story Points (Velocity) in a Sprint." },
            { line: "It gives SP per Person per hour/day" }
        ],
        imageUrl: "tc_created.jpg"
    }
];