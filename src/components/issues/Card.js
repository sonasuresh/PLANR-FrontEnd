import React from 'react'

function IssueCard(props) {
	return (
		<div className="card shadow">
			<div className="card-body">
				<h4 className="card-title">
					{props.title}
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
