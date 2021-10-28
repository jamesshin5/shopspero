import React from "react";
import { Box, CloseButton } from '@chakra-ui/react'
import '../styles/DesignPopup.css'
 
const DesignPopup = props => {
  return (
    <div className="popup-box">
      <Box className="box" 
        width={{ base: '90%',md: "80%", lg: "70%" }} 
        padding={{base: '1em', sm: '20px'}} 
        paddingTop={{base: '50px', md: '30px'}}
        paddingBottom={{base: '20px', md: '30px'}}
        mt="5vh"
        height="90vh"
        alignItems={{base: "flex-start", lg: 'center'}}
        >

        {/* <span className="close-icon" onClick={props.handleClose}> */}
          <CloseButton
            _focus={{ boxShadow: 'none' }}
            size="lg"
            onClick={props.handleClose}
            position="absolute"
            top="10px"
            right="10px"
          />
          {/* </span> */}
        {props.content}
      </Box>
    </div>
  );
};
 
export default DesignPopup;