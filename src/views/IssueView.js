import React, { Component } from 'react'
import IssueCard from '../components/issues/Card'
import callAPI from '../lib/axios'
import { ToastContainer, toast } from 'react-toastify'

import AddIssueButton from '../components/issues/AddIssueButton'
import AddIssueModal from '../components/issues/AddIssueModal'
import NavBar from '../components/NavBar'

export class IssueView extends Component {
	constructor(props) {
		super(props)
		this.state = {
			issues: [],
			isIssueSelected: false,
			selectedIssue: {
				priority: 'Low'
			}
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
	onConfirm = async () => {
		try {
			await callAPI('post', '/issues', {
				data: {
					...this.state.selectedIssue,
					p_id: this.props.match.params.projectId
				}
			})
			toast.success('Issue Created')

			this.getAllIssues()
		} catch (error) {
			toast.error('Error in Creating Issue')
		}
	}

	handleStatusChange = async (issueId, status) => {
		try {
			await callAPI('put', '/issues/', {
				data: {
					i_id: issueId,
					status
				}
			})
			this.getAllIssues()
		} catch (error) {
			alert('An Error Occured')
		}
	}

	_renderIssueCards = () => {
		if (this.state.issues.length === 0) {
			return (
				<span>
					<h3 className="d-1 text-center text-danger">No Issues!</h3>
					<div className="text-center">
						<AddIssueButton
							data-toggle="modal"
							data-target="#addissueModal"
						/>
					</div>
				</span>
			)
		} else {
			return this.state.issues.map((issue, idx) => (
				<IssueCard
					key={idx}
					issueId={issue.i_id}
					title={issue.i_title}
					description={issue.i_desc}
					status={issue.status}
					priority={issue.priority}
					handleDeleteIssue={this.handleDeleteIssue}
					handleUpdateIssueClick={this.handleUpdateIssueClick}
					handleStatusChange={this.handleStatusChange}
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
	handlePriorityChange = (e) => {
		const { state: currentState } = this
		currentState.selectedIssue.priority = e.target.value
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

	_renderAddIssueButton = () => {
		if (this.state.issues.length !== 0) {
			return (
				<AddIssueButton
					data-toggle="modal"
					data-target="#addissueModal"
				/>
			)
		}
	}

	handleGoBack = () => {
		this.props.history.goBack()
	}
	render() {
		const totalIssues = this.state.issues.length
		const completedIssues = this.state.issues.filter((value) => {
			return value.status === 'Completed'
		}).length
		const percentage = (completedIssues / totalIssues) * 100
		return (
			<div>
				<NavBar />

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

						{this._renderAddIssueButton()}
					</div>
					Progress
					<span class="progress w-100 mb-5">
						<span
							className="progress-bar bg-success"
							role="progressbar"
							style={{ width: `${percentage}%` }}
							aria-valuenow="25"
							aria-valuemin="0"
							aria-valuemax="100"></span>
					</span>
					<AddIssueModal
						onConfirm={this.onConfirm}
						onCancel={this.handleCancel}
						handleTitleChange={this.handleTitleChange}
						handleDescriptionChange={this.handleDescriptionChange}
						handlePriorityChange={this.handlePriorityChange}
					/>
					{this._renderIssueCards()}
				</div>
			</div>
		)
	}
}

export default IssueView
