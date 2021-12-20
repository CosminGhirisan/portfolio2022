import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { darkTheme } from '../components/Themes'

//Components
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import ParticleComponent from '../subComponents/ParticleComponent'
import BigTitle from '../subComponents/BigTitle'
import { motion } from 'framer-motion'

const AboutPage = () => {
   return (
      <ThemeProvider theme={darkTheme} >
         <Container
            // exit={{background: 'black'}}
            // transition={{duration: 0.5}}
         >
            <SocialIcons theme='dark'/>
            <PowerButton theme='dark'/>
            <ParticleComponent param='about'/>
            <Box
               initial={{left: -3000}}
               animate={{left: 'calc(5rem + 5vw)'}}
               transition={{type: "spring", stiffness:25}}
               
            >
               <p>
                  My name is Cosmin and I am an automation engineer and a freelancer front-end web developer. 
               </p>
               <p>
                  The desire to always learn new things, the inclination to achieve everything as close to perfection, minuteness, punctuality and passion for technology, are just some of the qualities others around me have always appreciated.
               </p>
               <p>
                  <span>"Today is tomorrow's history. Make your history better!" </span> &#8594; That's the motto of my life. Everything I do today will have an impact on my history, which will be read tomorrow. This is why I find myself always trying to make my history better.
               </p>
            </Box>
            <BigTitle text="ABOUT" top="5%" right="15%" />
         </Container>
      </ThemeProvider>
   )
}

const Container = styled(motion.div)`
   background-color: ${props => props.theme.body};
   color: ${props => props.theme.text};
   width: 100vw;
   height: 100vh;
   position: relative;
`;

const Box = styled(motion.div)`
   position: absolute;
   top: 7rem;
   left: calc(5rem + 5vw);
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: start;

   width: 50vw;
   height: 60vh;

   border: 1px solid ${props => props.theme.text};
   box-shadow: 0px 0px 6px 2px rgba(255, 255, 255, 0.5), 0px 0px 1px 1px rgba(255, 255, 255, 0.5) inset;   
   padding: 3rem calc(0.7rem + 1vw);
   backdrop-filter: blur(4px);
   font-family: 'Ubuntu Mono', monospace;
   font-style: italic;
   font-size: calc(0.5rem + 1vw);
   font-weight: 300;
   text-align: justify;
   line-height: 1.5;
   overflow: scroll;
   z-index: 3;

   p:not(:last-child){
      padding-bottom: 1rem;
   }

   span{
      font-style: normal;
      color: #117540;
   }

`;

export default AboutPage
