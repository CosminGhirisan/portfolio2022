import React from 'react'
import styled from 'styled-components'
import { GitHub, LinkedIn } from '../components/AllSvgs'
import { motion } from 'framer-motion'

const SocialIcons = () => {
   return (
      <Icons>
         <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.6}}
         >
            <a style={{color: "inherit"}} href='https://github.com/CosminGhirisan' target="_blank" rel="noreferrer">
               <GitHub width={25} height={25} fill="currentColor"/>
            </a>
         </motion.div>
         <motion.div
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1}}
         >
            <a style={{color: "inherit"}} href='https://www.linkedin.com/in/cosmin-ghirisan/' target="_blank" rel="noreferrer">
               <LinkedIn width={25} height={25}  fill="currentColor"/>
            </a>
         </motion.div>
         <Line 
            initial={{ height: 0}}
            animate={{height: '8rem'}}
            transition={{type:'spring', duration:1, delay:0.5}}
         />
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

const Line = styled(motion.span)`
   width: 1px;
   height: 8rem;
   background-color: ${props => props.theme.text};
`;

export default SocialIcons
