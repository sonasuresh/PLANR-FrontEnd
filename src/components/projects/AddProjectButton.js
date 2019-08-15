import React from 'react'

function AddProjectButton(props) {
    return (
        <span {...props}>
            <button className="btn btn-outline-violet pill-button text-violet" onClick={props.onClick}>
                <i className="fa fa-plus mr-2"></i> Add Project
        </button>
        </span>
    )
}

export default AddProjectButton