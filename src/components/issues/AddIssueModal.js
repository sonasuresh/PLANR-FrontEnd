import React from 'react'

function AddIssueModal(props) {
	return (
		<div
			className="modal fade"
			id="addissueModal"
			tabIndex="-1"
			role="dialog"
			aria-labelledby="addissueModal"
			aria-hidden="true">
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="addissueModalLabel">
							Add New Issue
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
								className="form-control"
								placeholder="Enter Title of the Issue"
								onChange={props.handleTitleChange}
							/>
						</div>
						<div className="form-group">
							<label className="ml-2">Description</label>
							<textarea
								className="form-control"
								placeholder="Enter Description of the Issue"
								onChange={props.handleDescriptionChange}
							/>
						</div>
						<div className="form-group">
							<label className="ml-2">Priority</label>

							<select
								className="form-control"
								onChange={props.handlePriorityChange}
								defaultValue="Low">
								<option value="Low">Low</option>
								<option value="Medium">Medium</option>
								<option value="High">High</option>
								<option value="Critical">Critical</option>
							</select>
						</div>
					</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-secondary"
							data-dismiss="modal"
							onClick={props.onCancel}>
							Cancel
						</button>
						<button
							type="button"
							className="btn btn-primary"
							onClick={props.onConfirm}>
							Confirm
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AddIssueModal
