import React from 'react'

function getIconAndColor(priority) {
	let value = {
		icon: "",
		color: ""
	}
	switch (priority) {
		case 'Low':
			value.icon = "fa fa-arrow-down"
			value.color = "text-success"
			break;
		case 'Medium':
			value.icon = "fa fa-minus"
			value.color = "text-warning"
			break;
		case 'High':
			value.icon = "fa fa-arrow-up"
			value.color = "text-danger"
			break;
		case 'Critical':
			value.icon = " fa fa-exclamation-triangle"
			value.color = "text-danger"
			break;
		default:
			break;
	}
	return value
}

function IssueCard(props) {
	const iconAndColor = getIconAndColor(props.priority)
	return (
		<div className="card shadow">
			<div className="card-body">
				<h4 className="card-title">
					<span className={iconAndColor.color} >
						<i className={iconAndColor.icon + " mr-2"} />
						{props.title}
					</span>
					<i
						className="fa text-violet fa-edit float-right clickable-icon"
						data-toggle="modal"
						data-target="#issueUpdateModal"
						onClick={() => {
							props.handleUpdateIssueClick(props.issueId)
						}}
					/>
				</h4>
				<h6 className="card-subtitle mb-2 text-muted">Description</h6>
				<p className="card-text">{props.description}</p>
				<button
					className="btn btn-violet"
					onClick={() => props.handleDeleteIssue(props.issueId)}>
					Delete Issue
				</button>
			</div>
		</div>
	)
}

export default IssueCard
