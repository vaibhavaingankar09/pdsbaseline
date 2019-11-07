import React from 'react';

import SearchTree from '../../../UIComponent/SearchTree/SearchTree';
import SearchForm from '../../../UIComponent/SearchForm/SearchForm';
import classes from './CreateEditProject.module.css';

const createEditProject = (props) => {
    let searchResult = [
        {
            id:"1", 
            BUName: "IBM Services", 
            BUCode: "",
            projects: [
                {id: "1", projectName: "IBM-NetezzaDev", projectId:"PSL000612"},
                {id: "2", projectName: "IBM-NetezzaQA", projectId:"PSL000613"},
                {id: "3", projectName: "IBM-Netezza-TechSupport-L1", projectId:"PSL000266"}
            ]
        },
        {id:"2", BUName: "IBM Products", BUCode : "" },
        {id:"3", BUName: "ISV-US", BUCode : "" },
        {id:"4", BUName: "Platform Solution and Integration", BUCode : "" },
        {id:"5", BUName: "Network Performance BU", BUCode : "" }
    ];
    return (
        <div className={classes.MainContainer}>
            <div className={classes.Navigator}>
            <div id={classes.Navigator}>Navigator - Business Units</div>
                <SearchForm />
                <SearchTree searchResult={searchResult}/>
            </div>
                <div className={classes.Container}>
                    <label>Create Edit Project</label>
                        Purpose:
                    <p>
                        Create/Edit Project allows users to create new as well as view and edit all of the existing Business Units and Projects under the Business Units .
    
                        </p>
                        Getting Started:
                    <ol>
                            <li>Create a new Business Unit by clicking on New Business Unit. Business units are needed to classify the Projects under the proper category. Incase of an erraneous entry we can delete the Business Unit by clicking on Delete Business Unit or edit by clicking on Edit </li>
                            <li>Select your newly created Business Unit in the navigation tree and create a new Project by clicking on Create Project .Another alternative method is to import a XLS sheet consisting of the Project Details neccesary into the particular selected Business Unit by clicking on Import Project Details.</li>
                            <li>The project contains details about Project Name, Project Code, Technology details, Database, DU Name, DU Manager, Delivery Head Account Name, Account Manager, Location, Billing Type, Project Type, Project Size, Project Cycle, Project Status, Team Size, PMI Rating and SQA Review</li>
                            <li>If you want to edit details of a Single project select the project from the Business Unit and click on Edit else if multiple projects under a Business Unit have to be modified you can reimport the XLS file with the changes being made to the existing project.</li>
                            <li>The Projects can be assigned to the respected SQA's while creating the projects by using the Keywords feature by moving the keywords from the Available Keywords to Assigned Keywords while either creating the Project or editing the Project.</li>
                            <li>Assign your created Projects to Baseline Release Plan when your Project Creation activity is finished.</li>
                        </ol>
                   
                </div>
            </div>
            )
        }
        
export default createEditProject;