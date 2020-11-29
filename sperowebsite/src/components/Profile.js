import React from 'react';
import '../styles/Profile.css';

const Profile = (props) => {
    var name_style = "centered-light"
    var title_style = "below-light"
    return (
        <div>
            <div className='profile-container'>
                <img src={props.imageURL} alt='Logo' className="profile-img"/>
                <div class="top-dark">{props.description}</div>
                <div class="centered-dark">{props.name}</div>
                <div class="below-dark">{props.title}</div>
            </div>
        </div>
    )
}

export default Profile;