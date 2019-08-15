// import React from 'react'
// import { Link } from 'react-router-dom'

// function IssueCard(props) {
//     return (
//         <div class="card bg-light mb-3 shadow">
//             <div class="h3 card-header">{props.title}</div><i className="fa text-violet fa-edit float-right clickable-icon" data-toggle="modal" data-target="#issueUpdateModal" onClick={() => { props.handleUpdateIssueClick(props.issueId) }}></i>
//             <div class="card-body">
//                 <h5 class="card-title">Description</h5>
//                 <p class="card-text">{props.description}</p>
//             </div>
//             <div className="card-footer">
//                 <button className="btn btn-violet" onClick={() => { props.handleDeleteIssue(props.issueId) }}>Delete</button>
//             </div>
//         </div >
//     )
// }

// export default IssueCard

import React from 'react'
import { Link } from 'react-router-dom'

function IssueCard(props) {
    return (
        <div className="card shadow" >
            <div className="card-body">
                <h4 className="card-title">{props.title}<i className="fa text-violet fa-edit float-right clickable-icon" data-toggle="modal" data-target="#issueUpdateModal" onClick={() => { props.handleUpdateIssueClick(props.issueId) }}></i></h4>
                <h6 className="card-subtitle mb-2 text-muted">Description</h6>
                <p className="card-text">{props.description}</p>
                <button className="btn btn-violet" onClick={() => props.handleDeleteIssue(props.issueId)} >Delete Issue</button>
            </div>
        </div>
    )
}

export default IssueCard