import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { PowerBtn } from '../components/AllSvgs'

const PowerButton = () => {
   return (
      <Power>
         <NavLink to="/">
            <PowerBtn width={30} height={30} fill="currentColor" />
         </NavLink>
      </Power>
   )
}

const Power = styled.button`
   position: fixed;
   top: 2rem;
   left: 50%;
   width: 2.5rem;
   height: 2.5rem;
   color: #117540;
   background-color: rgba(7, 46, 25, 0.4);
   padding: 0.3rem;
   /* border: 1px solid #117540; */
   border: none;
   border-radius: 50%;
   cursor: pointer;
   transform: translate(-50%, 0);
   z-index: 3;

   &:hover{
      color: #117540;
      background-color: rgba(7, 46, 25, 0.4);
      box-shadow: 0 0 8px 6px rgba(0, 255, 0, 0.2);

   }

   &>*:first-child {
      display: flex;
      justify-content: center;
      align-items: center;
      color: inherit;
      text-decoration: none;
   }
`;

export default PowerButton
