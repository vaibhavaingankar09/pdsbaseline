import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NavBar from '../../components/NavigationBar/NavigationBar';
import Home from '../../components/Home/Home';
import Reports from '../../components/Reports/Reports';
import Projects from '../../components/Projects/Projects';
import Planning from '../../components/Planning/Planning';
import Baseline from '../../components/Baseline/Baseline';
import ProjectMetrics from '../../components/ProjectMetrics/ProjectMetrics';
import Settings from '../../components/Settings/Settings';

class Layout extends Component {
    state = {

    }

    render() {
        return (
            <div>
                <Router>
                    <NavBar />
                    <Switch>
                        <Route path="/reports">
                            <Reports />
                        </Route>
                        <Route path="/projects">
                            <Projects />
                        </Route>
                        <Route path="/planning">
                            <Planning />
                        </Route>
                        <Route path="/baseline">
                            <Baseline />
                        </Route>
                        <Route path="/projectMetrics">
                            <ProjectMetrics />
                        </Route>
                        <Route path="/settings">
                            <Settings />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Layout;