import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faFolderOpen, faFileAlt } from '@fortawesome/free-regular-svg-icons'

import classes from './SearchTree.module.css';

const searchTree = (props) => {
    const folderOpen = <FontAwesomeIcon icon={faFolderOpen} />;
    const file = <FontAwesomeIcon icon={faFileAlt} />;
    const folder = <FontAwesomeIcon icon={faFolder} />;
    let baselineOpen = true;
    let projects = [
        { id: "1", projectName: "IBM-NetezzaDev", projectId: "PSL000612" },
        { id: "2", projectName: "IBM-NetezzaQA", projectId: "PSL000613" },
        { id: "3", projectName: "IBM-Netezza-TechSupport-L1", projectId: "PSL000266" }
    ];

    const toggleBaseline = () => {
        console.log('clicked', 'baseline');
    }

    const toggleBU = (name) => {
        console.log('clicked', name);
    }

    const projectDetails = (projectID) => {
        console.log('clicked project', projectID);
    }
    return (
        <div className={classes.SearchTree}>
            <ul>
                <li>
                    <div className={classes.Folder} ><span onClick={toggleBaseline}>{folderOpen} </span><span>Baseline System</span></div>
                    <ul>
                        {props.searchResult.map(item => (
                            <li key={item.id} value={item.BUCode}>
                                <div className={classes.Folder} ><span onClick={() => toggleBU("BU")}>{folder} </span><span>{item.BUName}</span></div>
                                <ul>
                                    {projects.map(project => (
                                        <li key={project.id} value={project.projectID} className={classes.ProjectClass}>
                                            <div className={classes.File} onClick={() => projectDetails(project.projectId)}>{file} {project.projectName}</div>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>

        </div>
    );
}

export default searchTree;