import React from 'react';

import classes from './SearchForm.module.css';

const searchForm = (props) => {
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
        <div>

            <form>
                <div id={classes.NavForm}>
                    <div id={classes.Filter}>Filter & Settings</div>
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
                        <input type="checkbox" />
                    </div>
                    <button id={classes.FormSubmit}>Update tree</button>
                </div>
            </form>
        </div>
    );
}

export default searchForm;