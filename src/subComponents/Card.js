import React from 'react'
import styled from 'styled-components'
import { GitHub } from '../components/AllSvgs'

const Card = (props) => {
   const { id, name, description, tags, demo, github } = props.data

   return (
      <Box key={id}>
         <Title>{name}</Title>
         <Description>{description}</Description>
         <Tags>
            {
               tags.map((t,id) => {
                  return <Tag key={id}>#{t}</Tag>
               })
            }
         </Tags>
         <Footer>
            <Link href={demo} target="_blank">
               Visit
            </Link> 
            <Git href={github} target="_blank">
               <GitHub width={30} height={30} />
            </Git> 
         </Footer>
      </Box>
   )
}

const Box = styled.div`
   width: 16rem;
   height: 40vh;
   background-color: ${props => props.theme.text};
   color: ${props => props.theme.body};
   padding: 1rem;
   margin-right: 8rem;
   border-radius: 0 50px 0 50px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   border: 1px solid ${props => props.theme.body};
   transition: all 0.2s ease;

   :hover{
      background-color: ${props => props.theme.body};
      color: ${props => props.theme.text};
      border: 1px solid ${props => props.theme.text};

   }
`;

const Title = styled.h2`
   font-size: calc(0.8rem + 1vw);
`;

const Description = styled.p`
   font-size: calc(0.8rem + 0.3vw);
   font-weight: 300;
   text-align: justify;
`;

const Tags = styled.p`
   border-top: 2px solid ${props => props.theme.body};
   padding-top: 0.3rem;
   display: flex;
   flex-wrap: wrap;
   ${Box}:hover &{
      border-top: 2px solid ${props => props.theme.text};
   }
`;

const Tag = styled.span`
   font-size: calc(0.6rem + 0.3vw);
   margin-right: 0.5rem;
`;

const Footer = styled.footer`
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

const Link = styled.a`
   background-color: ${props => props.theme.body};
   color: ${props => props.theme.text};
   text-decoration: none;
   padding:  0.5rem calc(2rem + 2vw);
   border-radius: 0 0 0 30px;
   font-size: calc(1rem + 0.5vw);

   ${Box}:hover &{
      background-color: ${props => props.theme.text};
      color: ${props => props.theme.body};
      cursor: pointer;
   }
`;

const Git = styled.a`
   color: inherit;
   text-decoration: none;

   ${Box}:hover &{
      &>*{
         fill: ${props => props.theme.text};
      }
   }
`;

export default Card
