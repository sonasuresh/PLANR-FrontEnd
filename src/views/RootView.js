import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ProjectView from './ProjectView'
import IssueView from './IssueView'
import LoginView from './LoginView'
import RegisterView from './RegisterView'

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
				<Route path="/register" component={RegisterView}></Route>
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
