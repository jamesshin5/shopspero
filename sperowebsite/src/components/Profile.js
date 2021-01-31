import React from 'react'
import '../styles/Profile.css'
import { Flex, Box, Text, Image, VStack } from '@chakra-ui/react'
import Fade from 'react-reveal/Fade'

const Profile = (props) => {
    return props.ambassador ? (
        <Fade bottom>
            {/* <Box
                bgImage={props.imageURL}
                w="210px"
                h="280px"
                bgColor="gray.500"
                justifyContent="center"
                alignItems="center"
            >
                <Image
                    src={props.imageURL}
                    alt="Logo"
                    className="profile-img"
                    w="210px"
                    h="280px"
                    _hover={{ opacity: 0 }}
                    objectFit="cover"
                />
                <VStack pt="50%">
                    <Text>{props.name}</Text>
                    <Text>{props.title}</Text>
                </VStack>
            </Box> */}
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
