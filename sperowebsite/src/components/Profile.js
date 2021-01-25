import React from 'react'
import '../styles/Profile.css'
// import { Flex, Box, Text, Image } from '@chakra-ui/react'
import Fade from 'react-reveal/Fade'

const Profile = (props) => {
    return props.ambassador ? (
        <Fade bottom>
            <div className="profile-container">
                <img src={props.imageURL} alt="Logo" className="profile-img" />
                <div class="centered-amb">
                    <b>{props.name}</b>
                </div>
                <div class="below-amb">{props.title}</div>
            </div>
        </Fade>
    ) : (
        <Fade bottom>
            <div className="profile-container">
                <img src={props.imageURL} alt="Logo" className="profile-img" />
                <div class="top-dark">{props.description}</div>
                <div class="centered-dark">{props.name}</div>
                <div class="below-dark">{props.title}</div>
            </div>
        </Fade>
    )
}

export default Profile
