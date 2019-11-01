import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NavBar from '../../components/NavigationBar/NavigationBar';
import Home from '../../components/Content/Home/Home';
import Demoversion from '../../components/Content/Home/DemoVersion/Demoversion';
import Feedback from '../../components/Content/Home/Feedback/Feedback';
import Help from '../../components/Content/Home/Help/Help';
import MetricsPlanTemplate from '../../components/Content/Home/MetricsPlanTemplate/MetricsPlanTemplate';
import SQAGuide from '../../components/Content/Home/SQAGuide/SqaGuide';
import UserGuide from '../../components/Content/Home/UserGuide/UserGuide';
import BaselineReports from '../../components/Content/Reports/BaselineReports/BaselineReports';
import DashboardReports from '../../components/Content/Reports/DashboardReports/DashboardReports';
import DIRReports from '../../components/Content/Reports/DIRReports/DIRReports';
import GoalMetReports from '../../components/Content/Reports/GoalMetReports/GoalMetReports';
import IncorrectMaster from '../../components/Content/Reports/IncorrectMaster/IncorrectMaster';
import MetricsNonComplianceReports from '../../components/Content/Reports/MetricsNonComplianceReports/MetricsNonComplianceReports';
import SummaryReport from '../../components/Content/Reports/SummaryReport/SummaryReport';
import CreateEditProject from '../../components/Content/Projects/CreateEditProject/CreateEditProject';
import MetricsPlan from '../../components/Content/Projects/MetricsPlan/MetricsPlan';
import SearchProject from '../../components/Content/Projects/SearchProject/SearchProject';
import CreateBaselinePlan from '../../components/Content/BaselinePlanning/CreateBaselinePlan/CreateBaselinePlan';
import AddRemoveProjects from '../../components/Content/MetricsBaselineContent/AddRemoveProject/AddRemoveProject';
import MetricsDataValidation from '../../components/Content/ProjectMetrics/MetricsDataValidation/MetricsDataValidation';
import UploadMetricsData from '../../components/Content/ProjectMetrics/UploadMetricsData/UploadMetricsData';
import Options from '../../components/Content/Settings/Options/Options';
import ProjectMapping from '../../components/Content/Settings/ProjectMapping/ProjectMapping';
import UserManagement from '../../components/Content/Settings/UserManagement/UserManagement';



class Layout extends Component {
    state = {

    }

    render() {
        return (
            <div>
                <Router>
                    <NavBar />
                    <Switch>
                        <Route path='/reports/baselineReports'><BaselineReports /></Route>
                        <Route path='/reports/dashboardReports'><DashboardReports /></Route>
                        <Route path='/reports/metricsNonComplianceReport'><MetricsNonComplianceReports /></Route>
                        <Route path='/reports/goalMetReport'><GoalMetReports /></Route>
                        <Route path='/reports/dirReport'><DIRReports /></Route>
                        <Route path='/reports/incorrectMaster'><IncorrectMaster /></Route>
                        <Route path='/reports/summaryReport'><SummaryReport /></Route>
                        <Route path='/projects/createEditProject'><CreateEditProject /></Route>
                        <Route path='/projects/searchProject'><SearchProject /></Route>
                        <Route path='/projects/metricsPlan'><MetricsPlan /></Route>
                        <Route path='/baselinePlanning/createBaselinePlan'><CreateBaselinePlan /></Route>
                        <Route path='/metricsBaselineContents/addRemoveProjects'><AddRemoveProjects /></Route>
                        <Route path='/projectMetrics/uploadMetricsData'><UploadMetricsData /></Route>
                        <Route path='/projectMetrics/metricsDataValidation'><MetricsDataValidation /></Route>
                        <Route path='/settings/userManagement'><UserManagement /></Route>
                        <Route path='/settings/projectMapping'><ProjectMapping /></Route>
                        <Route path='/settings/options'><Options /></Route>
                        <Route path='/feedback'><Feedback /></Route>
                        <Route path='/help'><Help /></Route>
                        <Route path='/demoVersion'><Demoversion /></Route>
                        <Route path='/userGuide'><UserGuide /></Route>
                        <Route path='/sqaGuide'><SQAGuide /></Route>
                        <Route path='/metricsPlanTemplate'><MetricsPlanTemplate /></Route>
                        <Route path='/logout'><Home /></Route>
                        <Route path='/'><Home /></Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Layout;