import React from 'react'
import styled from 'styled-components'
import { GitHub, LinkedIn } from '../components/AllSvgs'

const SocialIcons = () => {
   return (
      <Icons>
         <div>
            <a style={{color: "inherit"}} href='https://github.com/CosminGhirisan' target="_blank" >
               <GitHub width={25} height={25} fill="currentColor"/>
            </a>
         </div>
         <div>
            <a style={{color: "inherit"}} href='https://www.linkedin.com/in/cosmin-ghirisan/' target="_blank" >
               <LinkedIn width={25} height={25}  fill="currentColor"/>
            </a>
         </div>
         <Line />
      </Icons>
   )
}

const Icons = styled.div`
   position: fixed;
   bottom: 0;
   left: 2rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   z-index:3;

   &>*:not(:last-child){
      margin: 0.5rem 0;
   } 
`;

const Line = styled.span`
   width: 1px;
   height: 8rem;
   background-color: ${props => props.theme.text};
`;

export default SocialIcons
