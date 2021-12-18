import React from 'react'
import styled from 'styled-components';

const CommingSoon = () => {
   return (
      <Box>
         <h2>Comming soon...</h2>
      </Box>
      
   )
}

const Box = styled.div`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   width: 30vw;
   height: 3rem;
   background-color: #cee8fa90;
   border: 5px solid #117540;
   border-radius: 2px;

   h2{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: #cee8fa;
      font-family: 'Josefin Sans', sans-serif;
      font-variant: small-caps;
      letter-spacing: 2px;
   }
`;

export default CommingSoon
