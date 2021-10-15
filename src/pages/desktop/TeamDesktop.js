import React from 'react'
import Footer from '../../components/Footer'
import Profile from '../../components/Profile'
import '../../styles/desktop/TeamDesktop.css'
import Fade from 'react-reveal/Fade'
import Navbar from '../../components/NavBar'

import { AmbassadorProfiles, TeamProfiles } from './TeamProfileInfo'

import { Text, Box, VStack, Grid } from '@chakra-ui/react'

const TeamPage = (props) => {
    const profiles = TeamProfiles.map(profile => {
        return (
            <Profile
                name = {profile.name}
                title = {profile.position}
                description = {profile.description}
                imageURL={profile.image}
            />
        )
    })
    const ambassadorProfiles = AmbassadorProfiles.map(profile => {
        return (
            <Profile
                name = {profile.name}
                title = {profile.position}
                imageURL={profile.image}
                ambassador={true}
            />
        )
    })

    return (
        <div
            className="background-main"
        >
            <Box w="100%" h="100%" overflow="scroll">
                <Navbar />
                <VStack
                    textAlign="center"
                    px={{ base: '30px', lg: '100px' }}
                    color="#5c6a6f"
                    pt="25px"
                    alignItems="start"
                >
                    <Fade bottom>
                        <Text
                            fontFamily="Lexend Deca"
                            fontSize={{ base: '4xl', sm: '6xl' }}
                            border="none"
                            borderBottom="3px solid #5c6a6f"
                        >
                            TEAM SPERO
                        </Text>
                    </Fade>
                    <Fade bottom>
                        <Text
                            fontFamily="Tenor Sans"
                            fontSize={{ base: '10px', sm: '12px', md: '14px' }}
                            lineHeight={{ base: '25px', sm: '30px' }}
                            color="#5c6a6f"
                            py="20px"
                            textAlign="left"
                            maxWidth="1100px"
                        >
                            Shop Spero is comprised of a diverse group of
                            Christians who all choose to use their talents and
                            skills to glorify God through their work on this
                            team. This staff strives to sharpen one another and
                            inspire others to carry out God’s mission. Meet the
                            staff that makes Shop Spero a reality.
                        </Text>
                    </Fade>
                    <VStack spacing="5px">
                        <Grid
                            templateColumns={{
                                base: 'repeat(2, 5fr)',
                                sm: 'repeat(3,4fr)',
                                md: 'repeat(4, 3fr)',
                                lg: 'repeat(5,2fr)',
                            }}
                            gap={1}
                        >
                            {profiles}
                        </Grid>
                    </VStack>
                    <Fade bottom>
                        <Text
                            fontFamily="Lexend Deca"
                            fontSize={{ base: '4xl', sm: '6xl' }}
                            pt="70px"
                            border="none"
                            borderBottom="3px solid #5c6a6f"
                        >
                            AMBASSADORS
                        </Text>
                    </Fade>
                    <Fade bottom>
                        <Text
                            fontFamily="Tenor Sans"
                            fontSize={{ base: '10px', sm: '12px', md: '14px' }}
                            lineHeight={{ base: '25px', sm: '30px' }}
                            color="#5c6a6f"
                            py="20px"
                            maxWidth="1100px"
                            textAlign="left"
                        >
                            Meet our Ambassadors! Spero’s Ambassador Team helps
                            to amplify the message of Shop Spero at various
                            college campuses around the nation. Our Ambassadors
                            are a key part of Spero’s gospel-oriented and
                            community-based mission. Interested in being a light
                            on your campus? Email shopspero@gmail.com with your
                            resume!
                        </Text>
                    </Fade>
                    <Grid
                        templateColumns={{
                            base: 'repeat(2, 2fr)',
                            sm: 'repeat(3,1fr)',
                            md: 'repeat(4, 1fr)',
                            lg: 'repeat(4, 1fr)',
                        }}
                        gap={1}
                    >
                        {ambassadorProfiles}
                    </Grid>
                    <Fade bottom>
                        <Text
                            fontFamily="Lexend Deca"
                            fontSize={{ base: '4xl', sm: '6xl' }}
                            border="none"
                            borderBottom="3px solid #5c6a6f"
                            pt="80px"
                        >
                            JOIN OUR TEAM
                        </Text>
                    </Fade>
                    <Fade bottom>
                        <Text
                            fontFamily="Tenor Sans"
                            fontSize={{ base: '10px', sm: '12px', md: '14px' }}
                            lineHeight={{ base: '25px', sm: '30px' }}
                            color="#5c6a6f"
                            py="20px"
                            maxWidth="1100px"
                            textAlign="left"
                            pb="120px"
                        >
                            Interesting in working with an amazingly creative
                            team who loves God? We have finished actively
                            recruiting, but if you are excited about using your
                            creative talents to design apparel and merchandise
                            that glorifies God, email us your resume at
                            shopspero@gmail.com! We currently have a design
                            team, marketing team, operations team, and web
                            development team!
                        </Text>
                    </Fade>
                </VStack>
                <Footer />
            </Box>
        </div>
    )
}

export default TeamPage
