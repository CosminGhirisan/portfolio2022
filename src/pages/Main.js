import React from 'react'
import styled from 'styled-components'
import PowerButton from '../subComponents/PowerButton';

const Main = () => {
   return (
      <div>
         <MainContainer>
            <Container>
                  <PowerButton />
                  
            </Container>
         </MainContainer>
      </div>
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
      /* font-family: ; */
      font-weight: 500;

   }
`;

const Container = styled.div`
   padding: 2rem;
`

export default Main
