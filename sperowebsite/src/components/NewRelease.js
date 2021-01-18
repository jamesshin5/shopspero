import React from 'react'
import '../styles/NewRelease.css'

import { Link } from 'react-router-dom'
import '../styles/NavBar.css'

const NewRelease = (props) => {
    return (
        <Link to={props.route}>
            <div className="release-container">
                <div className="new-label">
                    <div className="new-text"> New Release</div>
                </div>
                <div className="name-text">{props.name}</div>
            </div>
        </Link>
    )
}

export default NewRelease
