import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/NavBar'
import Fade from 'react-reveal/Fade'
import { Link } from 'react-router-dom'
import {
    HStack,
    Image,
    Text,
    Box,
    Flex,
    VStack,
    SlideFade,
} from '@chakra-ui/react'
import Background from '../../images/home-bgimage.png'

const AboutDesktop = (props) => {
    return (
        <div
            style={{
                backgroundColor: '#e7e9e0',
                backgroundImage: `url(${Background})`,
                backgroundPosition: 'right -9vw',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Box w="100%" h="100%" overflow="scroll">
                <Navbar />
                <VStack
                    textAlign="center"
                    px={{ base: '30px', lg: '100px' }}
                    color="#5c6a6f"
                    pt="25px"
                >
                    <Fade bottom>
                        <Text
                            fontFamily="Lexend Deca"
                            fontSize={{ base: '4xl', sm: '6xl' }}
                            border="none"
                            borderBottom="3px solid #5c6a6f"
                        >
                            ABOUT US
                        </Text>
                    </Fade>
                    <Fade bottom>
                        <Text
                            fontFamily="Lexend Deca"
                            fontSize={{ base: '10px', sm: '12px', md: '14px' }}
                            lineHeight={{ base: '25px', sm: '30px' }}
                            color="#5c6a6f"
                            pb="20px"
                            pt="30px"
                            maxW="1000px"
                        >
                            We are a team of UC Berkeley students dedicated to
                            bridging <b>fashion and mission</b>. We source our
                            clothes through various Bay Area thrift stores.
                            Spero also has in-house designers that create{' '}
                            <b>original, mission-driven</b> clothing underlying
                            our company's purpose. All of our proceeds go
                            towards various local and global charitable
                            organizations.
                        </Text>
                    </Fade>
                    <Fade bottom>
                        <Image
                            src={require('../../images/about-image-1.jpg')}
                            maxW="1000px"
                            pb={{ base: '150px', md: '200px' }}
                        />
                    </Fade>
                    <Fade bottom>
                        <Box
                            w={{
                                base: '300px',
                                sm: '500px',
                                md: '700px',
                                lg: '1000px',
                            }}
                            h="1px"
                            bgColor="#5c6a6f"
                            position="relative"
                            top="-100px;"
                        ></Box>
                    </Fade>
                    <HStack textAlign="left" color="#5c6a6f" spacing="150px">
                        <Fade bottom>
                            <Image
                                src={require('../../images/design-photos/abide-window.jpg')}
                                width={{ base: '325px' }}
                                height={{ base: '325px' }}
                                position="relative"
                                top={{
                                    base: '-550px',
                                    sm: '-175px',
                                    md: '-150px;',
                                }}
                            />
                        </Fade>
                        <VStack textAlign="left" color="#5c6a6f" align="left">
                            <Fade bottom>
                                <Text
                                    fontFamily="Tenor Sans"
                                    fontSize={{
                                        base: '16px',
                                        sm: '18px',
                                        md: '20x',
                                    }}
                                    lineHeight={{ base: '25px', sm: '30px' }}
                                    color="#5c6a6f"
                                    pb="20px"
                                    maxW="300px"
                                    textAlign="left"
                                    pr="10px"
                                >
                                    <b>MISSION</b>
                                </Text>
                            </Fade>
                            <Fade bottom>
                                <Text
                                    fontFamily="Lexend Deca"
                                    fontSize={{
                                        base: '10px',
                                        sm: '12px',
                                        md: '14px',
                                    }}
                                    lineHeight={{ base: '25px', sm: '30px' }}
                                    color="#5c6a6f"
                                    // pb="20px"
                                    maxW="300px"
                                    pr="10px"
                                >
                                    In Latin, the word "spero" means "
                                    <b>to hope</b>
                                    ". Our vision is also inspired by{' '}
                                    <b>Matthew 10:29-31</b>, where something as
                                    insignificant as a sparrow will be
                                    remembered and cared for.
                                    <br />
                                    We want to expose the poverty in these
                                    neglected communities through an innovative
                                    medium.{' '}
                                    <b>
                                        The goal of Spero is to bring hope to
                                        the hopeless and light into darkness.
                                    </b>
                                </Text>
                            </Fade>
                        </VStack>
                    </HStack>
                    <HStack
                        textAlign="left"
                        color="#5c6a6f"
                        pb="175px"
                        spacing="150px"
                    >
                        <VStack
                            textAlign="left"
                            color="#5c6a6f"
                            align="left"
                            position="relative"
                            top="150px"
                        >
                            <Fade bottom>
                                <Text
                                    fontFamily="Tenor Sans"
                                    fontSize={{
                                        base: '16px',
                                        sm: '18px',
                                        md: '20x',
                                    }}
                                    lineHeight={{ base: '25px', sm: '30px' }}
                                    color="#5c6a6f"
                                    pb="20px"
                                    maxW="300px"
                                    textAlign="left"
                                    pl="10px"
                                >
                                    <b>MATTHEW 10:29-31</b>
                                </Text>
                            </Fade>
                            <Fade bottom>
                                <Text
                                    fontFamily="Lexend Deca"
                                    fontSize={{
                                        base: '10px',
                                        sm: '12px',
                                        md: '14px',
                                    }}
                                    lineHeight={{ base: '25px', sm: '30px' }}
                                    color="#5c6a6f"
                                    pb="20px"
                                    maxW="225px"
                                    pl="10px"
                                >
                                    "Are not two sparrows sold for a penny? And
                                    not one of them will fall to the ground
                                    apart from your Father. But even the hairs
                                    of your head are all numbered. Fear not,
                                    therefore; you are of more value than many
                                    sparrows."
                                </Text>
                            </Fade>
                        </VStack>
                        <Fade bottom>
                            <Image
                                src={require('../../images/about-sticker.jpg')}
                                maxW="325px"
                                position="relative"
                                top="100px"
                            />
                        </Fade>
                    </HStack>
                    <Fade bottom>
                        <Box
                            w={{
                                base: '300px',
                                sm: '500px',
                                md: '700px',
                                lg: '1000px',
                            }}
                            h="1px"
                            bgColor="#5c6a6f"
                            position="relative"
                            top="100px"
                        ></Box>
                    </Fade>
                    <HStack
                        textAlign="left"
                        color="#5c6a6f"
                        pb="150px"
                        spacing="150px"
                    >
                        <Fade bottom>
                            <Image
                                src={require('../../images/design-photos/abide-overlay.jpg')}
                                maxW="325px"
                                position="relative"
                                top="25px"
                            />
                        </Fade>
                        <VStack
                            textAlign="left"
                            color="#5c6a6f"
                            align="left"
                            position="relative"
                            top="125px"
                        >
                            <Fade bottom>
                                <Text
                                    fontFamily="Tenor Sans"
                                    fontSize={{
                                        base: '16px',
                                        sm: '18px',
                                        md: '20x',
                                    }}
                                    lineHeight={{ base: '25px', sm: '30px' }}
                                    color="#5c6a6f"
                                    pb="20px"
                                    maxW="300px"
                                    textAlign="left"
                                    pr="10px"
                                >
                                    <b>VISION</b>
                                </Text>
                            </Fade>
                            <Fade bottom>
                                <Text
                                    fontFamily="Lexend Deca"
                                    fontSize={{
                                        base: '10px',
                                        sm: '12px',
                                        md: '14px',
                                    }}
                                    lineHeight={{ base: '25px', sm: '30px' }}
                                    color="#5c6a6f"
                                    pb="20px"
                                    maxW="300px"
                                    pr="10px"
                                >
                                    Our vision is inspired by Matthew 10:29-31,
                                    where something as insignificant as a
                                    sparrow, will be remembered and cared for.
                                    <br />
                                    His eye is on the sparrow and He watches
                                    over us. And through this we have identity
                                    and know our worth through Him.
                                </Text>
                            </Fade>
                        </VStack>
                    </HStack>
                </VStack>
                <Footer />
            </Box>
        </div>
    )
}

export default AboutDesktop
