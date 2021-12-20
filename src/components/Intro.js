import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Circles from '../subComponents/Circles'

const Intro = () => {
   return (
      <Box
         initial={{opacity:0}}
         animate={{opacity:1}}
         transition={{duration:2, delay:0.2}}
      >
         <SubBox>
            <Text>
               <motion.h1
                  initial={{opacity:0}}
                  animate={{opacity: 1}}
                  transition={{duration:1, delay:1.1}}
               >Hi,</motion.h1>
               <motion.h3
                  initial={{opacity:0}}
                  animate={{opacity: 1}}
                  transition={{duration:1, delay:1.3}}   
               >I'm Cosmin.</motion.h3>
               <motion.h6
                  initial={{opacity:0}}
                  animate={{opacity: 1}}
                  transition={{duration:1, delay:1.5}} 
               >Pasionate Frontend React.js   Developer.</motion.h6>
            </Text>
         </SubBox>
         <SubBox>
            <motion.div
               initial={{opacity:0}}
               animate={{opacity: 1}}
               transition={{duration:1, delay:2}}
            >
               <Circles />
            </motion.div>
         </SubBox>
      </Box>
   )
}

const Box = styled(motion.div)`
   position: absolute;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);
   width: 55vw;
   min-height: 50vh;
   display: flex;
   border: 1px solid white;
   box-shadow: 0px 0px 6px 2px rgba(255, 255, 255, 0.5), 0px 0px 1px 1px rgba(255, 255, 255, 0.5) inset;   
   z-index: 1;
`;

const SubBox = styled.div`
   width: 50%;
   position: relative;
   display: flex;
`;

const Text = styled(motion.div)`
   font-size: calc(0.2rem + 2.5vw);
   color: ${props => props.theme.text};
   padding: 2rem;
   cursor: pointer;
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;

   h1, h3{
      font-family: 'Josefin Sans', sans-serif;
   }

   h6{
      color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
      font-size: calc(0.2rem + 1.5vw);
      font-weight: 100;
   }
`; 

export default Intro;
