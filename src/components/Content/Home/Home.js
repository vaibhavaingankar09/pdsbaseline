import React from 'react';

import classes from './Home.module.css';

const home = (props) => {

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

    return (
        <div className={classes.Card}>
            {displayItems.map((item, index) => {
                let imageSrc = "resources/" + item.imageUrl;
                return (<div className={classes.CardItem} key={index}>
                    <img src={imageSrc} alt={item.imageUrl} />
                    <h6>{item.headline}</h6>
                    <h6>{item.subheadline}</h6>
                    {item.description.map((line, index) => (<p key={index}>{line.line}</p>))}
                </div>);
            })}

        </div>
    )
}

export default home;