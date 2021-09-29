import React from 'react'
import '../styles/Profile.css'
import Fade from 'react-reveal/Fade'
import { useMediaQuery } from 'react-responsive'

const Profile = (props) => {
    const isMobile = useMediaQuery({ query: '(max-width: 480px)' })
    if (isMobile) {
        return props.ambassador ? (
            <Fade bottom>
                <div className="profile-container mobile">
                    <img
                        src={props.imageURL}
                        alt="Logo"
                        className="profile-img-mobile"
                    />
                    <div class="centered-amb mobile-middle">
                        <b>{props.name}</b>
                    </div>
                    <div class="below-amb mobile-fontsize">{props.title}</div>
                </div>
            </Fade>
        ) : (
            <Fade bottom>
                <div className="profile-container mobile">
                    <div className="image-proportion">
                        <img
                            src={props.imageURL}
                            alt="Logo"
                            className="profile-img-mobile"
                        />
                    </div>
                    <div class="top-dark mobile-topfont">
                        {props.description}
                    </div>
                    <div class="centered-dark mobile-middle">{props.name}</div>
                    <div class="below-dark mobile-fontsize">{props.title}</div>
                </div>
            </Fade>
        )
    } else {
        return props.ambassador ? (
            <Fade bottom>
                <div className="profile-container">
                <div className="image-proportion">
                    <img
                        src={props.imageURL}
                        alt="Logo"
                        className="profile-img"
                    />
                    </div>
                    <div class="centered-amb">
                        <b>{props.name}</b>
                    </div>
                    <div class="below-amb">{props.title}</div>
                </div>
            </Fade>
        ) : (
            <Fade bottom>
                <div className="profile-container">
                    <img
                        src={props.imageURL}
                        alt="Logo"
                        className="profile-img"
                    />
                    <div class="top-dark">{props.description}</div>
                    <div class="centered-dark">{props.name}</div>
                    <div class="below-dark">{props.title}</div>
                </div>
            </Fade>
        )
    }
}

export default Profile
