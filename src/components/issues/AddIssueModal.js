import React from 'react'

function AddIssueModal(props) {
    return (
        <div
            class="modal fade"
            id="addissueModal"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="addissueModal"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="addissueModalLabel">
                            Add New Issue
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
                                placeholder="Enter Title of the Issue"
                                onChange={props.handleTitleChange}
                            />
                        </div>
                        <div class="form-group">
                            <label className="ml-2">Description</label>
                            <textarea
                                className="form-control"
                                placeholder="Enter Description of the Issue"
                                onChange={props.handleDescriptionChange}
                            />
                        </div>
                        <div class="form-group">
                            <label className="ml-2">Priority</label>

                            <select className="form-control"
                                onChange={props.handlePriorityChange} >
                                <option value="Low" selected>Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                                <option value="Critical">Critical</option>
                            </select>
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

export default AddIssueModal
