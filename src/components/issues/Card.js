import React from 'react'

function getIconAndColor(priority) {
	let value = {
		icon: '',
		color: ''
	}
	switch (priority) {
		case 'Low':
			value.icon = 'fa fa-arrow-down'
			value.color = 'text-success'
			break
		case 'Medium':
			value.icon = 'fa fa-minus'
			value.color = 'text-warning'
			break
		case 'High':
			value.icon = 'fa fa-arrow-up'
			value.color = 'text-danger'
			break
		case 'Critical':
			value.icon = ' fa fa-exclamation-triangle'
			value.color = 'text-danger'
			break
		default:
			break
	}
	return value
}

function IssueCard(props) {
	const iconAndColor = getIconAndColor(props.priority)
	return (
		<div className={`card pr-5 pl-5 pb-3 shadow`}>
			<div className="card-body">
				<h4 className="card-title">
					<div className="row">
						<div className="col-4">
							<span
								className={`${iconAndColor.color} clickable-icon`}
								role="button"
								data-toggle="collapse"
								data-target={`#collapseDescription${props.issueId}`}>
								<i className={iconAndColor.icon + ' mr-4'} />
								{props.title}
							</span>
						</div>
						<div className="col-4 text-center">
							<div className="row">
								<select
									className="form-control"
									onChange={(e) => {
										props.handleStatusChange(
											props.issueId,
											e.target.value
										)
									}}
									defaultValue={props.status}>
									<option value="TODO">TODO</option>
									<option value="In Progress">
										In Progress
									</option>
									<option value="Completed">Completed</option>
								</select>
							</div>
						</div>
						<div className="col-4">
							<i
								className="fa text-info fa-chevron-down float-right clickable-icon"
								role="button"
								data-toggle="collapse"
								data-target={`#collapseDescription${props.issueId}`}></i>
							<i
								className="fa text-danger fa-trash float-right clickable-icon mr-5"
								onClick={() => {
									props.handleDeleteIssue(props.issueId)
								}}
							/>
						</div>
					</div>
				</h4>
				<div
					className="collapse m-3 mt-4"
					id={`collapseDescription${props.issueId}`}>
					<span className="card-subtitle mb-2 text-muted">
						<h5>Description</h5>
					</span>
					<p className="card-text">{props.description}</p>
				</div>
			</div>
		</div>
	)
}

export default IssueCard
