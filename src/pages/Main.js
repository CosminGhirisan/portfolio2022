import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Intro from '../components/Intro';
import PowerButton from '../subComponents/PowerButton';
import SocialIcons from '../subComponents/SocialIcons';
import { motion } from 'framer-motion';

const Main = () => {
   const [click, setClick] = useState(false);

   const handleClick = () => setClick(!click);

   return (
      <>
         <MainContainer>
            <Container>
               <PowerButton />
               <SocialIcons />
               <Center click={click}>
                  <div onClick={() => handleClick()} >
                     <ArrowLeft click={click}>
                        &#60;
                     </ArrowLeft>
                  </div >
                  <div className='line' onClick={() => handleClick()}>
                     <Line click={click}/>
                  </div>
                  <div className='ArrowR' onClick={() => handleClick()}>
                     <ArrowRight click={click}>
                        &#62;
                     </ArrowRight>
                  </div>
               </Center>
               <Contact target="_blank" href="mailto:ghirisancosmin@gmail.com">
                  <motion.h3
                     initial={{
                        y:-200,
                        transition: {type: 'spring', duration: 1.5, delay: 1}
                     }}
                     animate={{
                        y:0,
                        transition: {type: 'spring', duration: 1.5, delay: 1}
                     }}
                     whileHover={{scale: 1.1}}
                     whileTap={{scale: 0.9}}
                  >
                     Say hi...
                  </motion.h3>
               </Contact>
               <Projects to="/projects">
                  <motion.h3
                     initial={{
                        y:-200,
                        transition: {type: 'spring', duration: 1.5, delay: 1}
                     }}
                     animate={{
                        y:0,
                        transition: {type: 'spring', duration: 1.5, delay: 1}
                     }}
                     whileHover={{scale: 1.1}}
                     whileTap={{scale: 0.9}}
                  >
                     Projects.
                  </motion.h3>
               </Projects>
               <BottomBar>
                  <About to="/about">
                     <motion.h3
                        initial={{
                           y:200,
                           transition: {type: 'spring', duration: 1.5, delay: 1}
                        }}
                        animate={{
                           y:0,
                           transition: {type: 'spring', duration: 1.5, delay: 0.5}
                        }}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                     >
                        About.
                     </motion.h3>
                  </About>
                  <MySkills to="/skills">
                     <motion.h3
                        initial={{
                           y:200,
                           transition: {type: 'spring', duration: 1.5, delay: 1}
                        }}
                        animate={{
                           y:0,
                           transition: {type: 'spring', duration: 1.5, delay: 0.5}
                        }}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                     >
                        Skills.
                     </motion.h3>
                  </MySkills>
               </BottomBar>
            </Container>
            {click ? <Intro click={click}/> : null}
         </MainContainer>
      </>
   )
}

const MainContainer = styled.div`
   position: relative;
   width: 100vw;
   height: 100vh;
   background: ${props => props.theme.body};
   color: ${props => props.theme.text};
   overflow: hidden;

   h2, h3, h4, h5, h6{
      font-family: 'Josefin Sans', sans-serif;
      font-weight: 500;
   }

   .line{
      z-index: 2;
   }

   .ArrowR{
      z-index: 1;
   }
`;

const Container = styled.div`
   padding: 2rem;
`

const Contact = styled.a`
   position: absolute;
   top: 2.5rem;
   right: calc(1rem + 2vw);
   color: ${props => props.theme.text};
   text-decoration: none;
   z-index: 3;
`;

const Projects = styled(NavLink)`
   position: absolute;
   top: 50%;
   right: calc(1rem + 2vw);
   transform: rotate(90deg) translate(-50%, -50%);
   color: ${props => props.theme.text};
   text-decoration: none;
   z-index: 1;
`;

const BottomBar = styled.div`
   position: absolute;
   bottom: 1rem;
   left: 0;
   right: 0;
   width: 100%;
   display: flex;
   justify-content: space-evenly;
`;

const About = styled(NavLink)`
   color: ${props => props.theme.text};
   text-decoration: none;
   z-index: 1;
`;

const MySkills = styled(NavLink)`
   color: ${props => props.theme.text};
   text-decoration: none;
   z-index: 1;
`;

const Center = styled.button`
   position: absolute;
   top: ${props => props.click ? '85%' : '50%'};
   left: ${props => props.click ? '85%' : '50%'};
   transform: translate(-50%, -50%);
   display: flex;
   justify-content: center;
   align-items: center;
   color: ${props => props.theme.text};
   background: transparent;
   border: none;
   outline: none;
   text-decoration: none;
   cursor: pointer;
   transition: all 1.5s ease;
`;

const Line = styled.span`
   display: inline-block;
   width: 4px;
   height: ${props => props.click ? "calc(1rem + 4vw)" : "calc(3rem + 7vw)"};
   background-color: ${props => props.theme.text};
   border-radius: 2px;
   box-shadow: 0px 0px 45px 10px rgba(0, 255, 0, 0.4),
      0px 0px 30px 45px rgba(0, 0, 0, 0.9),
      0px 0px 75px 30px rgba(0, 255, 0, 0.3); 
   
`;

const ArrowLeft = styled.div`
   font-family: 'Josefin Sans', sans-serif;
   font-size: ${props => props.click ? "calc(1rem + 4vw)" : "calc(3rem + 7vw)"};
   font-weight: 100;
   margin-right: ${props => props.click ? "calc(0.8rem + 1vw)" : "calc(3rem + 1vw)"}; 
`;

const ArrowRight = styled.span`
   font-family: 'Josefin Sans', sans-serif;
   font-size: ${props => props.click ? "calc(1rem + 4vw)" : "calc(3rem + 7vw)"};
   font-weight: 100;
   margin-left: ${props => props.click ? "calc(0.8rem + 1vw)" : "calc(3rem + 1vw)"};   
`;

export default Main
