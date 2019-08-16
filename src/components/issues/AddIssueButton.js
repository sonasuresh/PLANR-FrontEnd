import React from 'react'

function AddIssueButton(props) {
	return (
		<span {...props}>
			<button
				className="btn btn-outline-violet pill-button text-violet shadow"
				onClick={props.onClick}>
				<i className="fa fa-plus mr-2" /> Add Issue
			</button>
		</span>
	)
}

export default AddIssueButton
