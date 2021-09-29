import React from 'react'
import Footer from '../../components/Footer'
import Profile from '../../components/Profile'
import '../../styles/desktop/TeamDesktop.css'
import Fade from 'react-reveal/Fade'
import Navbar from '../../components/NavBar'

import { Text, Box, VStack, Grid } from '@chakra-ui/react'

const TeamPage = (props) => {
    return (
        <div
            className="background-main"
            // style={{
            //     backgroundColor: '#e7e9e0',
            //     backgroundImage: `url(${Background})`,
            //     backgroundPosition: 'right -9vw',
            // }}
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
                            // pr={{ base: 'none', sm: '40px' }}
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
                            <Profile
                                name="REBECCA SOO"
                                title="CEO"
                                imageURL={require('../../images/updated-staff/Rebecca-min.jpg')}
                                description="Hi! I’m Rebecca! I am majoring in Sociology and Media Studies with a minor in Public Policy. In my free time I like finding new snacks at Trader Joe’s and taking pictures of sunsets. I love Spero because it gives us the opportunity to be a light on campus and meet new people :’)"
                            />
                            <Profile
                                name="DORCAS CHEUNG"
                                title="MARKETING LEAD"
                                imageURL={require('../../images/updated-staff/dorcas-min.jpg')}
                                description="hello!! I am Dorcas, a Business and Public Policy student at Berkeley. I am passionate about marketing strategies, storytelling, and social impact. You will find me going on a run, planning the next picnic, and listening to podcasts in my free time. I hope that through Spero, we will bring attention to His glory."
                            />
                            <Profile
                                name="ANDREW CHENG"
                                title="OPERATIONS LEAD"
                                imageURL={require('../../images/updated-staff/Andrew-min.jpg')}
                                description="What is up!! I'm Andrew, a third year at UC Berkeley studying Data Science and music. I love basketball, running, acappella, magic, camping, smash ultimate, and many other small things in life! I'm serving in Spero because I hope to use fashion as a platform to spread the gospel!"
                            />
                            <Profile
                                name="JAMES SHIN"
                                title="DEVELOPMENT LEAD"
                                imageURL={require('../../images/updated-staff/James-min.jpg')}
                                description="Hello! I'm James Shin, a junior at UC Berkeley studying Computer Science and Data Science. I love reading, playing the guitar, wearing big hoodies, binging shows (watch The West Wing and Bojack Horseman), and working with all the talented, creative, and God-fearing people at Spero!"
                            />
                            <Profile
                                name="JASMINE CHEN"
                                title="DESIGN LEAD"
                                imageURL={require('../../images/updated-staff/jasmine-min.jpg')}
                                description=" hi friends (о´∀`о) I'm Jasmine, a second year at Cal studying Architecture! In my free time, I like to go thrifting, play with my dogs, watch korean dramas, and make stickers!! I joined Spero because I wanted to design for a higher purpose, and hopefully learn new ways to think about my faith!"
                            />
                            <Profile
                                name="JUSTIN PARK"
                                title="OPERATIONS"
                                imageURL={require('../../images/updated-staff/justin-min.jpeg')}
                                description="Hey!  My name is Justin Park, and I am a third year @ UC Berkeley studying cognitive science and data science.  I love singing, going on adventures, driving, and hanging out for hours at the park!  I joined Spero because it is filled with people passionate about God and love to serve God with all of their lives."
                            />
                            <Profile
                                name="MATTHEW FLORES"
                                title="WEB DEVELOPER"
                                imageURL={require('../../images/updated-staff/matt-min.jpg')}
                                description="Hi! I'm Matt, a third year at UC Berkeley studying Cognitive Science! I love to dance, shop, binge new mockumentaries/ comedies, and try all different types of boba and latte drinks! I joined Spero because I could combine my passion for design with something so important to me like my faith!"
                            />
                            <Profile
                                name="JENNY WOO"
                                title="MARKETING"
                                imageURL={require('../../images/updated-staff/jenny-min.jpeg')}
                                description="Heyhey!! I'm Jenny, a second year at UC Berkeley hoping to major in Public Health! I love photography (like photoshoots with friendzz), coffee, baking, calligraphy, and theology books (heh)! I joined Spero because I wanted to share the gospel through an art form 🙂"
                            />
                            {/* <Profile
                                name="RACHEL SOO"
                                title="DESIGN"
                                imageURL={require('../../images/staff/rachelsoo-min.jpg')}
                                description="Hello y'all! I'm Rachel, a senior at Mission Viejo High School. In my free time, you can find me browsing anything Disney, singing along to my favorite musicals, or drawing funny pictures of my friends! I joined Spero because I want to use my talents to spread the good news and help develop my faith :)"
                            /> */}
                            <Profile
                                name="ESTHER YOU"
                                title="MARKETING"
                                imageURL={require('../../images/updated-staff/esther-min.jpg')}
                                description=" Hi! I'm Esther, a second year at UC Berkeley studying Econ and Public Policy. I love exploring the Bay Area, drinking coffee, making TikToks, and taking pics. I joined Spero because I really believe in its mission and love giving back to the community (also love the  aesthetic hehe)."
                            />
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
                        <Profile
                            name="CHAERIN SUNG"
                            title="USC '24"
                            imageURL={require('../../images/ambassadors/ambassador-chaerin.jpg')}
                            ambassador={true}
                        />
                        <Profile
                            name="GRACE CHOI"
                            title="UPENN '23"
                            imageURL={require('../../images/ambassadors/ambassador-grace.jpg')}
                            ambassador={true}
                        />
                        <Profile
                            name="JOY PARK"
                            title="UCI '23"
                            imageURL={require('../../images/ambassadors/ambassador-joy.jpg')}
                            ambassador={true}
                        />
                        <Profile
                            name="YASMIN SIWY"
                            title="PURDUE '22"
                            imageURL={require('../../images/ambassadors/ambassador-yasmin.jpg')}
                            ambassador={true}
                        />
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

        // <div className="staff-main-container">
        //     <Navbar />
        //     <div className="staff-card-container">
        //         <Fade bottom>
        //             <div className="staff-title">TEAM SPERO</div>
        //         </Fade>
        //         <Fade bottom>
        //             <div className="staff-description">
        //                 Shop Spero is comprised of a diverse group of Christians
        //                 who all choose to use their talents and skills to
        //                 glorify God through their work on this team. This staff
        //                 strives to sharpen one another and inspire others to
        //                 carry out God’s mission. Meet the staff that makes Shop
        //                 Spero a reality.
        //             </div>
        //         </Fade>

        //         <Fade bottom>
        //             <div className="cards-table">
        //                 <Profile
        //                     name="REBECCA SOO"
        //                     title="CEO"
        //                     imageURL={require('../../images/staff/rebeccasoo-min.jpg')}
        //                     description="Hi! I’m Rebecca! I am majoring in Sociology and Media Studies with a minor in Public Policy. In my free time I like finding new snacks at Trader Joe’s and taking pictures of sunsets. I love Spero because it gives us the opportunity to be a light on campus and meet new people :’)"
        //                 />
        //                 <Profile
        //                     name="DORCAS CHEUNG"
        //                     title="MARKETING LEAD"
        //                     imageURL={require('../../images/staff/dorcascheung-min.jpg')}
        //                     description="hello!! I am Dorcas, a Business and Public Policy student at Berkeley. I am passionate about marketing strategies, storytelling, and social impact. I often travel to and from my current home in the Bay Area to my east coast and HongKong roots. You will find me going on a run, planning the next picnic, and listening to podcasts in my free time. I hope that through Spero, we will bring attention to His glory."
        //                 />
        //                 <Profile
        //                     name="ANDREW CHENG"
        //                     title="OPERATIONS LEAD"
        //                     imageURL={require('../../images/staff/andrewcheng-min.jpg')}
        //                     description="What is up!! I'm Andrew, a third year at UC Berkeley studying Data Science and music. I love basketball, running, acappella, magic, camping, smash ultimate, and many other small things in life! I'm serving in Spero because I hope to use fashion as a platform to spread the gospel!"
        //                 />
        //                 <Profile
        //                     name="JAMES SHIN"
        //                     title="DEVELOPMENT LEAD"
        //                     imageURL={require('../../images/staff/jamesshin-min.jpg')}
        //                     description="Hello! I'm James Shin, a junior at UC Berkeley studying computer science and data science. I love playing the guitar, wearing big hoodies, binging TV shows like Suits or Mad Men, playing basketball and Fortnite, and working with all the talented and creative people at Spero!"
        //                 />
        //                 <Profile
        //                     name="JASMINE CHEN"
        //                     title="DESIGN LEAD"
        //                     imageURL={require('../../images/staff/jasminechen-min.jpg')}
        //                     description=" hi friends (о´∀`о) I'm Jasmine, a second year at Cal studying Architecture! In my free time, I like to go thrifting, play with my dogs, watch korean dramas, and make stickers!! I joined Spero because I wanted to design for a higher purpose, and hopefully learn new ways to think about my faith!"
        //                 />
        //             </div>
        //         </Fade>

        //         <Fade bottom>
        //             <div className="cards-table">
        //                 <Profile
        //                     name="JUSTIN PARK"
        //                     title="OPERATIONS"
        //                     imageURL={require('../../images/staff/justinpark-min.jpg')}
        //                     description="Hey!  My name is Justin Park, and I am a third year @ UC Berkeley studying cognitive science and data science.  I love singing, going on adventures, driving, and hanging out for hours at the park!  I joined Spero because it is filled with people passionate about God and love to serve God with all of their lives."
        //                 />
        //                 <Profile
        //                     name="MATTHEW FLORES"
        //                     title="WEB DEVELOPER"
        //                     imageURL={require('../../images/staff/matthewflores-min.jpg')}
        //                     description="Hi! I'm Matt, a third year at UC Berkeley studying Cognitive Science, and I'm the head of Web Design and tech! I love to dance, shop, binge new mock-umentaries/comedies, studying in cafes, and trying all different types of boba and latte drinks! I joined Spero because I could combine my passion for design with something so important to me like my faith!"
        //                 />
        //                 <Profile
        //                     name="JENNY WOO"
        //                     title="MARKETING"
        //                     imageURL={require('../../images/staff/jenny-min.jpg')}
        //                     description="Heyhey!! I'm Jenny, a second year at UC Berkeley hoping to major in Public Health! I love photography (like photoshoots with friendzz), coffee, baking, calligraphy, and theology books (heh)! I joined Spero because I wanted to share the gospel through an art form 🙂"
        //                 />
        //                 <Profile
        //                     name="RACHEL SOO"
        //                     title="DESIGN"
        //                     imageURL={require('../../images/staff/rachelsoo-min.jpg')}
        //                     description="Hello y'all! I'm Rachel, a senior at Mission Viejo High School. In my free time, you can find me browsing anything Disney, singing along to my favorite musicals, or drawing funny pictures of my friends! I joined Spero because I want to use my talents to spread the good news and help develop my faith :)"
        //                 />
        //                 <Profile
        //                     name="ESTHER YOU"
        //                     title="MARKETING"
        //                     imageURL={require('../../images/staff/estheryou-min.jpg')}
        //                     description=" Hi! I'm Esther, a second year at UC Berkeley studying Econ and Public Policy. I love exploring the Bay Area, drinking coffee, making TikToks, and taking pics. I joined Spero because I really believe in its mission and love giving back to the community (also love the  aesthetic hehe)."
        //                 />
        //             </div>
        //         </Fade>

        //         <Fade bottom>
        //             <div className="staff-title">AMBASSADORS</div>
        //         </Fade>

        //         <Fade bottom>
        //             <div className="staff-description">
        //                 Shop Spero is comprised of a diverse group of Christians
        //                 who all choose to use their talents and skills to
        //                 glorify God through their work on this team. This staff
        //                 strives to sharpen one another and inspire others to
        //                 carry out God’s mission. Meet the staff that makes Shop
        //                 Spero a reality.
        //             </div>
        //         </Fade>

        //         <Fade bottom>
        //             <div className="ambassador-cards-table">
        //                 <Profile
        //                     name="CHAERIN SUNG"
        //                     title="USC '24"
        //                     imageURL={require('../../images/ambassadors/ambassador-chaerin.jpg')}
        //                     ambassador={true}
        //                 />
        //                 <Profile
        //                     name="GRACE CHOI"
        //                     title="UPENN '23"
        //                     imageURL={require('../../images/ambassadors/ambassador-grace.jpg')}
        //                     ambassador={true}
        //                 />
        //                 <Profile
        //                     name="JOY PARK"
        //                     title="UCI '23"
        //                     imageURL={require('../../images/ambassadors/ambassador-joy.jpg')}
        //                     ambassador={true}
        //                 />
        //                 <Profile
        //                     name="YASMIN SIWY"
        //                     title="PURDUE '22"
        //                     imageURL={require('../../images/ambassadors/ambassador-yasmin.jpg')}
        //                     ambassador={true}
        //                 />
        //             </div>
        //         </Fade>
        //     </div>
        //     <Footer color="#fff2e6" />
        // </div>
    )
}

export default TeamPage
