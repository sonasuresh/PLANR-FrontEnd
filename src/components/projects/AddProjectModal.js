import React from 'react'

function AddProjectModal(props) {
	return (
		<div
			class="modal fade"
			id="addProjectModal"
			tabIndex="-1"
			role="dialog"
			aria-labelledby="addProjectModal"
			aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="addProjectModalLabel">
							Add New Project
						</h5>
						<button
							type="button"
							class="close"
							data-dismiss="modal"
							aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<div class="form-group">
							<label className="ml-2">Title</label>
							<input
								type="text"
								className="form-control"
								placeholder="Enter Title of the Project"
								onChange={props.handleTitleChange}
							/>
						</div>
						<div class="form-group">
							<label className="ml-2">Description</label>
							<textarea
								className="form-control"
								placeholder="Enter Description of the Project"
								onChange={props.handleDescriptionChange}
							/>
						</div>
					</div>
					<div class="modal-footer">
						<button
							type="button"
							class="btn btn-secondary"
							data-dismiss="modal"
							onClick={props.onCancel}>
							Cancel
						</button>
						<button
							type="button"
							class="btn btn-primary"
							onClick={props.onConfirm}>
							Confirm
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AddProjectModal
