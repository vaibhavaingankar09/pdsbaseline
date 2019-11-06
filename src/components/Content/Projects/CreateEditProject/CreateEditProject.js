import React from 'react';

import classes from './CreateEditProject.module.css';

const createEditProject = (props) => {
    let username = "vaibhav_vaingankar";
    let buList = [
        { id: "0", name: "", value: "0" },
        { id: "1", name: "IBM Services", value: "1" },
        { id: "2", name: "IBM Products", value: "2" },
        { id: "3", name: "ISV-US", value: "3" },
        { id: "4", name: "Platform Solution and Integration", value: "4" },
        { id: "5", name: "Network Performance BU", value: "5" }
    ];

    let keyword = [
        { id: "-1", name: "[None]", value: "-1" },
        { id: "0", name: "[Any]", value: "0" },
        { id: "1", name: "vaibhav_vaingankar", value: "1" },
        { id: "2", name: "neeraj_buccam", value: "2" },
        { id: "3", name: "keshav_kelkar", value: "3" },
        { id: "4", name: "sairaj_anvekar", value: "4" },
        { id: "5", name: "siddhesh_naik", value: "5" },
        { id: "6", name: "nazeef_shaikh", value: "6" }
    ];

    return (
        <div className={classes.MainContainer}>

            <div className={classes.Navigator}>
                <div>Navigator - Business Units</div>
                <div>Filter & Settings</div> 
                <form>
                    <div id={classes.NavForm}>
                        <div className={classes.FormItems}>
                            <label>User</label>
                            <input type="text" name="user" value={username} />
                        </div>
                         <div className={classes.FormItems}>
                            <label>BU Name</label>
                            <select name="BU">
                                {buList.map(buItem => (
                                    <option
                                        key={buItem.id}
                                        value={buItem.value}
                                        label={buItem.name}>
                                        {buItem.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className={classes.FormItems}>
                            <label>Keyword</label>
                            <select name="keyword" multiple="multiple" size="3">
                                {keyword.map(keywordItem => (
                                    <option
                                        key={keywordItem.id}
                                        value={keywordItem.value}
                                        label={keywordItem.name}>
                                        {keywordItem.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className={classes.FormItems}>
                            <label>Update tree after every operation</label>
                            <input type="checkbox"/>
                        </div>
                        <button id={classes.FormSubmit}>Update tree</button>        
                    </div> 
                </form>
                </div>
                <div className={classes.Container}>
                    <span>Create Edit Project</span>
                    <p>
                        Purpose:
                        Create/Edit Project allows users to create new as well as view and edit all of the existing Business Units and Projects under the Business Units .
    
                        Getting Started:
                <ol>
                            <li>Create a new Business Unit by clicking on New Business Unit. Business units are needed to classify the Projects under the proper category. Incase of an erraneous entry we can delete the Business Unit by clicking on Delete Business Unit or edit by clicking on Edit </li>
                            <li>Select your newly created Business Unit in the navigation tree and create a new Project by clicking on Create Project .Another alternative method is to import a XLS sheet consisting of the Project Details neccesary into the particular selected Business Unit by clicking on Import Project Details.</li>
                            <li>The project contains details about Project Name, Project Code, Technology details, Database, DU Name, DU Manager, Delivery Head Account Name, Account Manager, Location, Billing Type, Project Type, Project Size, Project Cycle, Project Status, Team Size, PMI Rating and SQA Review</li>
                            <li>If you want to edit details of a Single project select the project from the Business Unit and click on Edit else if multiple projects under a Business Unit have to be modified you can reimport the XLS file with the changes being made to the existing project.</li>
                            <li>The Projects can be assigned to the respected SQA's while creating the projects by using the Keywords feature by moving the keywords from the Available Keywords to Assigned Keywords while either creating the Project or editing the Project.</li>
                            <li>Assign your created Projects to Baseline Release Plan when your Project Creation activity is finished.</li>
                        </ol>
                    </p>
                </div>
            </div>
            )
        }
        
export default createEditProject;