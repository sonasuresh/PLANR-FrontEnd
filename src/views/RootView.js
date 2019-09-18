import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Login from '../components/Login';
import NavBar from '../components/NavBar';
import ProjectView from './ProjectView';
import IssueView from './IssueView';

export class RootView extends Component {
    render() {
        return (
            <div className="wrapper">
                <Login />
                <NavBar />
                <Route path="/projects" exact component={ProjectView}></Route>
                <Route path="/issues/:projectId" exact component={IssueView}></Route>
            </div>
        )
    }
}

export default RootView
