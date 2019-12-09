import React from 'react'
import { Link } from 'react-router-dom'

function ProjectCard(props) {
	return (
		<div className="card shadow">
			<div className="card-body">
				<h4 className="card-title font-weight-bold">
					{props.title}
					<i

						className="fa text-violet fa-edit float-right clickable-icon"
						data-toggle="modal"
						data-target="#projectUpdateModal"
						onClick={() => {
							props.handleUpdateProjectClick(props.projectId)
						}}
					/>
				</h4>
				<hr />
				<h6 className="card-subtitle mt-4 mb-2 text-muted">
					Description
				</h6>
				<p className="card-text">{props.description}</p>
				<div className="row">
					<div className="col-6">
						<Link
							to={`issues/${props.projectId}`}
							className="btn btn-violet btn-block shadow"
							data-toggle="tooltip"
							data-placement="bottom"
							title="View Issues">
							<i className="fas fa-eye mr-1" />
							View Issues
						</Link>
					</div>
					<div className="col-6">
						<button
							className="btn btn-danger btn-block shadow"
							onClick={() =>
								props.handleDeleteProject(props.projectId)
							}
							data-toggle="tooltip"
							data-placement="bottom"
							title="Delete Project">
							<i className="fa fa-trash mr-1" />
							Delete
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProjectCard
