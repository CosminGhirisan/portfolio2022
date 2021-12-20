import React, { useEffect, useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { motion } from 'framer-motion'

//Components
import { darkTheme } from '../components/Themes'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import {Work} from '../assets/data/Work'
import Card from '../subComponents/Card'
import BigTitle from '../subComponents/BigTitle'

const container = {
   hidden: {opacity: 0},
   show: {
      opacity: 1,
      transition: {
         staggerChildren: 0.5,
         duration: 0.5
      }
   }
}


const Projects = () => {
   const ref = useRef(null);
   
   useEffect(() => {
      let element = ref.current;
      
      const rotate = () => {
         element.style.transform = `translateX(${-window.pageYOffset}px)`;
      }
      window.addEventListener('scroll', rotate)
         
      return () => window.removeEventListener('scroll', rotate)
   },[])
   
   return (
      <ThemeProvider theme={darkTheme}>
         <MainContainer>
            <SocialIcons theme='dark'/>
            <PowerButton theme='dark'/>
            <Main ref={ref} variants={container} initial="hidden" animate="show">
               {
                  Work.map(data => 
                     <Card 
                        key={data.id}
                        data={data}
                     />
                  )
               }
            </Main>
            <BigTitle text="PROJECTS" top="10%" right="5%" />
         </MainContainer>
      </ThemeProvider>
   )
}

const MainContainer = styled.div`
   background-color: ${props => props.theme.body};
   color: ${props => props.theme.text};
   height: 400vh;
   position: relative;
   overflow: hidden;
   overflow: auto;

`;

const Main = styled(motion.ul)`
   position: fixed;
   top: 12rem;
   left: calc(10rem + 15vw);
   height: 40vh;
   display: flex;
   align-items: center;
`;

export default Projects
