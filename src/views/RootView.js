import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ProjectView from './ProjectView'
import IssueView from './IssueView'
import LoginView from './LoginView'

export class RootView extends Component {
	constructor(props) {
		super(props)
		if (!localStorage.getItem('token')) {
			window.location = '/#/login'
		}
	}

	render() {
		return (
			<div className="wrapper">
				<Route path="/login" component={LoginView}></Route>
				<Route path="/" exact component={ProjectView}></Route>
				<Route path="/projects" exact component={ProjectView}></Route>
				<Route
					path="/issues/:projectId"
					exact
					component={IssueView}></Route>
			</div>
		)
	}
}

export default RootView
