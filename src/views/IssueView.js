import React, { Component } from 'react'
import IssueCard from '../components/issues/Card'
import callAPI from '../lib/axios'
import { ToastContainer } from 'react-toastify'

import AddIssueButton from '../components/issues/AddIssueButton'

export class IssueView extends Component {
	constructor(props) {
		super(props)
		this.state = {
			issues: [],
			isIssueSelected: false,
			selectedIssue: {}
		}
	}

	componentDidMount() {
		this.getAllIssues()
	}

	getAllIssues = async () => {
		const projectId = this.props.match.params.projectId
		try {
			const results = await callAPI('get', `/issues/${projectId}`)
			const { state: currentState } = this
			currentState.issues = results.data
			this.setState(currentState)
		} catch (error) {
			alert('Error Occurred')
		}
	}

	handleDeleteIssue = async (issueId) => {
		try {
			await callAPI('delete', `/issues/${issueId}`)
			this.getAllIssues()
			alert('Issue Deleted')
		} catch (error) {
			alert('Error Occurred')
		}
	}
	handleUpdateIssueClick = (issueId) => {
		const { state: currentState } = this
		const filteredIssues = currentState.issues.filter((issue) => {
			return issue.i_id === issueId
		})
		currentState.selectedIssue = filteredIssues[0]
		this.setState(currentState)
	}

	_renderIssueCards = () => {
		if (this.state.issues.length === 0) {
			return (
				<span>
					<h3 className="d-1 text-center text-danger">
						Oops! No Issues!
					</h3>
				</span>
			)
		} else {
			return this.state.issues.map((issue) => (
				<IssueCard
					issueId={issue.i_id}
					title={issue.i_title}
					description={issue.i_desc}
					handleDeleteIssue={this.handleDeleteIssue}
				/>
			))
		}
	}
	handleTitleChange = (e) => {
		const { state: currentState } = this
		currentState.selectedIssue.i_title = e.target.value
		this.setState(currentState)
	}
	handleDescriptionChange = (e) => {
		const { state: currentState } = this
		currentState.selectedIssue.i_desc = e.target.value
		this.setState(currentState)
	}

	handleCancel = () => {
		this.getAllIssues()
	}

	handleUpdate = async () => {
		try {
			await callAPI('put', '/issues', {
				data: this.state.selectedIssue
			})
			alert('Updated issue')
		} catch (error) {
			alert('An Error Occured')
		}
		this.getAllIssues()
	}

	handleGoBack = () => {
		this.props.history.goBack()
	}
	render() {
		const { state } = this
		const { selectedIssue } = state
		return (
			<div className="m-5">
				<ToastContainer />
				<div className="d-flex justify-content-between align-items-center mt-5 mb-5">
					<span className="h1">
						<i
							className="fa fa-chevron-circle-left text-violet clickable-icon pill-button shadow mr-4"
							onClick={this.handleGoBack}
						/>
						Current Issues
					</span>
					<AddIssueButton
						data-toggle="modal"
						data-target="#addissuemodal"
					/>
				</div>
				<div
					className="modal fade"
					id="issueUpdateModal"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="IssueUpdateModal"
					aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5
									className="modal-title"
									id="issueUpdateModalLabel">
									Edit Project Details
								</h5>
								<button
									type="button"
									className="close"
									data-dismiss="modal"
									aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<div className="form-group">
									<label className="ml-2">Title</label>
									<input
										type="text"
										value={selectedIssue.i_title}
										onChange={this.handleTitleChange}
										className="form-control"
										placeholder="Enter Title of the Project"
									/>
								</div>
								<div className="form-group">
									<label className="ml-2">Description</label>
									<textarea
										className="form-control"
										value={selectedIssue.i_desc}
										onChange={this.handleDescriptionChange}
										placeholder="Enter Description of the Project"
									/>
								</div>
							</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-secondary"
									data-dismiss="modal"
									onClick={this.handleCancel}>
									Cancel
								</button>
								<button
									type="button"
									className="btn btn-primary"
									onClick={this.handleUpdate}>
									Update
								</button>
							</div>
						</div>
					</div>
				</div>
				<div
					className="modal fade"
					id="addissuemodal"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="addissuemodaltitle"
					aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5
									className="modal-title"
									id="addissuemodaltitle">
									New Issue
								</h5>
								<button
									type="button"
									className="close"
									data-dismiss="modal"
									aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<div className="form-group">
									<label className="ml-2">Title</label>
									<input
										type="text"
										value={selectedIssue.i_title}
										onChange={this.handleTitleChange}
										className="form-control"
										placeholder="Enter Title of the Project"
									/>
								</div>
								<div className="form-group">
									<label className="ml-2">Description</label>
									<textarea
										className="form-control"
										value={selectedIssue.i_desc}
										onChange={this.handleDescriptionChange}
										placeholder="Enter Description of the Project"
									/>
								</div>
							</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-secondary"
									data-dismiss="modal"
									onClick={this.handleCancel}>
									Cancel
								</button>
								<button
									type="button"
									className="btn btn-primary"
									onClick={this.handleUpdate}>
									Update
								</button>
							</div>
						</div>
					</div>
				</div>
				{this._renderIssueCards()}
			</div>
		)
	}
}

export default IssueView
