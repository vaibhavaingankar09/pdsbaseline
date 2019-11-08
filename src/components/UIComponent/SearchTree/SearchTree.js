import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faFolderOpen, faFileAlt } from '@fortawesome/free-regular-svg-icons'

import classes from './SearchTree.module.css';

const searchTree = (props) => {
    const folderOpen = <FontAwesomeIcon className={classes.Hover} icon={faFolderOpen} />;
    const file = <FontAwesomeIcon className={classes.Hover} icon={faFileAlt} />;
    const folder = <FontAwesomeIcon className={classes.Hover} icon={faFolder} />;

    let renderProjects = (showProjects, projects) => (showProjects ? <ul>
        {projects.map(project => (
            <li key={project.id} value={project.projectID} className={classes.ProjectClass}>
                <div className={classes.File} onClick={() => props.projectDetails(project.projectId)}>
                    {file} {project.projectName}
                </div>
            </li>
        ))}
    </ul> : null);

    let renderBU = () => (props.baselineOpen ? <ul>
        {props.searchResult.map(item => (
            <li key={item.id} value={item.BUCode}>
                <div className={classes.Folder} >
                    <span onClick={() => props.toggleBU(item.id)}>{item.openBU ? folderOpen : folder}</span>
                    <span onClick={props.editBU}>{item.BUName}</span>
                </div>
                {renderProjects(item.openBU, item.projects)}

            </li>
        ))}
    </ul> : null);

    return (

        <div className={classes.SearchTree}>
            <div className={classes.Folder} >
                <span onClick={props.toggleBaseline}>{props.baselineOpen ? folderOpen : folder}</span>
                <span onClick={props.createNewBU}>Baseline System</span>
            </div>
            {renderBU()}
        </div>
    );
}

export default searchTree;