import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { darkTheme } from '../components/Themes'

//Components
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import ParticleComponent from '../subComponents/ParticleComponent'
import CommingSoon from '../subComponents/CommingSoon'

const MySkillsPage = () => {
   return (
      <ThemeProvider theme={darkTheme}>
         <Container>
            <SocialIcons theme='dark'/>
            <PowerButton theme='dark'/>
            <ParticleComponent param='skills'/>
            <CommingSoon />
         </Container>
      </ThemeProvider>
   )
}

const Container = styled.div`
   background-color: ${props => props.theme.body};
   color: ${props => props.theme.text};
   width: 100vw;
   height: 100vh;
   position: relative;
`;

export default MySkillsPage
