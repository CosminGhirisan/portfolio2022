import React, { useEffect, useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'

//Components
import { darkTheme } from '../components/Themes'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import {Work} from '../assets/data/Work'
import Card from '../subComponents/Card'
import BigTitle from '../subComponents/BigTitle'


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
         <Container>
            <SocialIcons theme='dark'/>
            <PowerButton theme='dark'/>
            <Main ref={ref}>
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
         </Container>
      </ThemeProvider>
   )
}

const Container = styled.div`
   background-color: ${props => props.theme.body};
   color: ${props => props.theme.text};
   height: 400vh;
   position: relative;
   overflow: hidden;
   overflow: auto;

`;

const Main = styled.ul`
   position: fixed;
   top: 12rem;
   left: calc(10rem + 15vw);
   height: 40vh;
   display: flex;
`;

export default Projects
