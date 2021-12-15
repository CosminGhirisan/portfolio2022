import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { LayerLeft, LayerRight } from '../components/AllSvgs';
import PowerButton from '../subComponents/PowerButton';
import SocialIcons from '../subComponents/SocialIcons';

const Main = () => {
   return (
      <>
         <MainContainer>
            <Container>
               <PowerButton />
               <SocialIcons />
               <Center>
                  <div>
                     <ArrowLeft>
                        &#60;
                     </ArrowLeft>
                  </div>
                  <div className='line'>
                     <Line />
                  </div>
                  <div className='ArrowR'>
                     <ArrowRight>
                        &#62;
                     </ArrowRight>
                  </div>
               </Center>
               <Contact target="_blank" href="mailto:ghirisancosmin@gmail.com">
                  <h3>
                     Say hi...
                  </h3>
               </Contact>
               <Projects to="/projects">
                  <h3>
                     Projects.
                  </h3>
               </Projects>
               <BottomBar>
                  <About to="/about">
                     <h3>
                        About.
                     </h3>
                  </About>
                  <MySkills to="/skills">
                     <h3>
                        Skills.
                     </h3>
                  </MySkills>
               </BottomBar>
            </Container>
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
   top: 2rem;
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
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   display: flex;
   justify-content: center;
   align-items: center;
   color: ${props => props.theme.text};
   background: transparent;
   border: none;
   text-decoration: none;
   outline: none;
   cursor: pointer;
   
`;

const Line = styled.span`
   display: inline-block;
   width: 4px;
   height: calc(3rem + 7vw);
   background-color: ${props => props.theme.text};
   border-radius: 2px;
   box-shadow: 5px 27px 98px 4px rgba(0, 255, 0, 0.3), 5px 5px 35px 45px #000, 0px -46px 67px 38px rgba(30, 74, 40, 0.4), 0px 46px 67px 38px rgba(30, 74, 40, 0.8);
`;

const ArrowLeft = styled.span`
   font-family: 'Josefin Sans', sans-serif;
   font-size: calc(3rem + 7vw);
   font-weight: 100;
   margin-right: calc(1.2rem + 2vw);   
`;

const ArrowRight = styled.span`
   font-family: 'Josefin Sans', sans-serif;
   font-size: calc(3rem + 7vw);
   font-weight: 100;
   margin-left: calc(1.2rem + 2vw);   
`;

export default Main
