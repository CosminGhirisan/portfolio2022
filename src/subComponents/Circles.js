import React from 'react'
import styled from 'styled-components'

const Circles = () => {
   return (
      <Cont>
         <Container>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
      </Container>
      </Cont>
   )
}

const Cont = styled.div`
   position: absolute;
   left: 50%;
   bottom: 30%;
   transform: translateX(-50%);
`

const Container = styled.div`
   position: relative;
   width: calc(2rem + 12vw);
   height: calc(1.6rem + 10vw);
   transform-style: preserve-3d;
   transform: perspective(500px) rotateX(60deg) rotateY(-15deg) rotateZ(40deg);

   span{
      position: absolute;
      display: block;
      box-shadow: 0 5px 0 ${props => props.theme.text},
                  inset 0 5px 0 ${props => props.theme.text};
      box-sizing: border-box;
      border-radius: 35%;
      animation: animate 4s ease-in-out infinite;

      @keyframes animate {
         0%, 100%{
            transform: translateZ(-100px);
         }
         50%{
            transform: translateZ(100px);
         }
      }

      :nth-child(1){
         top: 0;
         right: 0;
         bottom: 0;
         left: 0;
         animation-delay: 1.4s;
      }

      :nth-child(2){
         top: 5px;
         right: 5px;
         bottom: 5px;
         left: 5px;
         animation-delay: 1.3s;
      }

      :nth-child(3){
         top: 10px;
         right: 10px;
         bottom: 10px;
         left: 10px;
         animation-delay: 1.2s;
      }

      :nth-child(4){
         top: 15px;
         right: 15px;
         bottom: 15px;
         left: 15px;
         animation-delay: 1.1s;
      }

      :nth-child(5){
         top: 20px;
         right: 20px;
         bottom: 20px;
         left: 20px;
         animation-delay: 1s;
      }

      :nth-child(6){
         top: 25px;
         right: 25px;
         bottom: 25px;
         left: 25px;
         animation-delay: 0.9s;
      }

      :nth-child(7){
         top: 30px;
         right: 30px;
         bottom: 30px;
         left: 30px;
         animation-delay: 0.8s;
      }

      :nth-child(8){
         top: 35px;
         right: 35px;
         bottom: 35px;
         left: 35px;
         animation-delay: 0.7s;
      }

      :nth-child(9){
         top: 40px;
         right: 40px;
         bottom: 40px;
         left: 40px;
         animation-delay: 0.6s;
      }

      :nth-child(10){
         top: 45px;
         right: 45px;
         bottom: 45px;
         left: 45px;
         animation-delay: 0.5s;
      }

      :nth-child(11){
         top: 50px;
         right: 50px;
         bottom: 50px;
         left: 50px;
         animation-delay: 0.4s;
      }

      :nth-child(12){
         top: 55px;
         right: 55px;
         bottom: 55px;
         left: 55px;
         animation-delay: 0.3s;
      }

      :nth-child(13){
         top: 60px;
         right: 60px;
         bottom: 60px;
         left: 60px;
         animation-delay: 0.2s;
      }

      :nth-child(14){
         top: 65px;
         right: 65px;
         bottom: 65px;
         left: 65px;
         animation-delay: 0.1s;
      }

      :nth-child(15){
         top: 70px;
         right: 70px;
         bottom: 70px;
         left: 70px;
         animation-delay: 0s;
      }
   }
`;

export default Circles
