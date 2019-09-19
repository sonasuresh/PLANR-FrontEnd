import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify'

import ProjectCard from '../components/projects/Card'
import callAPI from '../lib/axios'
import AddProjectButton from '../components/projects/AddProjectButton'
import AddProjectModal from '../components/projects/AddProjectModal'
import NavBar from '../components/NavBar'

export class ProjectView extends Component {
	constructor() {
		super()
		this.state = {
			projects: [],
			isProjectSelected: false,
			selectedProject: {}
		}
	}

	componentDidMount() {
		this.getAllProjects()
	}

	getAllProjects = async () => {
		try {
			const results = await callAPI('get', '/projects/')
			const { state: currentState } = this
			currentState.projects = results.data
			this.setState(currentState)
		} catch (error) {
			toast.error('An error Occured. Try Again')
		}
	}

	handleDeleteProject = async (projectId) => {
		try {
			await callAPI('delete', `/projects/${projectId}`)
			this.getAllProjects()
			toast.success('Project Deleted')
		} catch (error) {
			toast.error('Project Cannot be Deleted')
		}
	}

	handleUpdateProjectClick = (projectId) => {
		const { state: currentState } = this
		const filteredProjects = currentState.projects.filter((project) => {
			return project.p_id === projectId
		})
		currentState.selectedProject = filteredProjects[0]
		this.setState(currentState)
	}

	_renderProjectCards = () => {
		if (this.state.projects.length > 0) {
			return (
				<div className="row">
					{this.state.projects.map((project, idx) => (
						<div
							className="col-sm-12 col-md-12 col-lg-4 col-xl-3"
							key={idx}>
							<ProjectCard
								title={project.p_name}
								description={project.p_desc}
								projectId={project.p_id}
								handleDeleteProject={this.handleDeleteProject}
								handleUpdateProjectClick={
									this.handleUpdateProjectClick
								}
							/>
						</div>
					))}
				</div>
			)
		} else {
			return (
				<div className="text-center">
					<h3 className="text-danger">
						<i className="fa fa-exclamation-circle mr-4" />
						No Projects
					</h3>
				</div>
			)
		}
	}

	handleTitleChange = (e) => {
		const { state: currentState } = this
		currentState.selectedProject.p_name = e.target.value
		this.setState(currentState)
	}
	handleDescriptionChange = (e) => {
		const { state: currentState } = this
		currentState.selectedProject.p_desc = e.target.value
		this.setState(currentState)
	}

	handleCancel = () => {
		this.getAllProjects()
	}

	handleUpdate = async () => {
		try {
			await callAPI('put', '/projects', {
				data: this.state.selectedProject
			})
			toast.success('Project Updated')
		} catch (error) {
			toast.error('Error in Updating the project')
		}
		this.getAllProjects()
	}
	onConfirm = async () => {
		try {
			await callAPI('post', '/projects', {
				data: this.state.selectedProject
			})
			toast.success('Project Created')

			this.getAllProjects()
		} catch (error) {
			toast.error('Error in Creating Project')
		}
	}

	render() {
		const { state } = this
		const { selectedProject } = state
		return (
			<div>
				<NavBar />
				<div className="m-5">
					<ToastContainer />
					<div className="d-flex justify-content-between align-items-center mt-5 mb-5">
						<h1>Current Projects</h1>
						<AddProjectButton
							data-toggle="modal"
							data-target="#addProjectModal"
						/>
					</div>
					<AddProjectModal
						onConfirm={this.onConfirm}
						onCancel={this.handleCancel}
						handleTitleChange={this.handleTitleChange}
						handleDescriptionChange={this.handleDescriptionChange}
					/>
					<div
						className="modal fade"
						id="projectUpdateModal"
						tabIndex="-1"
						role="dialog"
						aria-labelledby="projectUpdateModal"
						aria-hidden="true">
						<div className="modal-dialog" role="document">
							<div className="modal-content">
								<div className="modal-header">
									<h5
										className="modal-title"
										id="projectUpdateModalLabel">
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
											value={selectedProject.p_name}
											onChange={this.handleTitleChange}
											className="form-control"
											placeholder="Enter Title of the Project"
										/>
									</div>
									<div className="form-group">
										<label className="ml-2">
											Description
										</label>
										<textarea
											className="form-control"
											value={selectedProject.p_desc}
											onChange={
												this.handleDescriptionChange
											}
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

					{this._renderProjectCards()}
				</div>
			</div>
		)
	}
}

export default ProjectView
