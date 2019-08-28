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
		<div className="card pr-5 pl-5 pb-3 shadow">
			<div className="card-body">
				<h4 className="card-title">
					<span
						className={`${iconAndColor.color} clickable-icon`}
						role="button"
						data-toggle="collapse"
						data-target={`#collapseDescription${props.issueId}`}>
						<i className={iconAndColor.icon + ' mr-4'} />
						{props.title}
					</span>
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
					<i
						className="fa text-violet fa-edit float-right clickable-icon mr-5"
						data-toggle="modal"
						data-target="#issueUpdateModal"
						onClick={() => {
							props.handleUpdateIssueClick(props.issueId)
						}}
					/>
				</h4>
				<div
					class="collapse m-3 mt-4"
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
