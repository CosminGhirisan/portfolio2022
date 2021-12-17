import React from 'react'
import styled from 'styled-components'
import { Particles } from 'react-tsparticles'

import configAbout from '../assets/config/particlesjs-config-about.json'
import configSkills from '../assets/config/particlesjs-config-skills.json'

const ParticleComponent = (props) => {
   return (
      <Box>
         <Particles style={{position:'absolute', top:0}} params={props.param === 'about' ? configAbout : configSkills} />
      </Box>
   )
}

const Box = styled.div`
   position: absolute;
   top: 0;
   right: 0;
   left: 0;
   bottom: 0;
   z-index: 0;
`;

export default ParticleComponent
