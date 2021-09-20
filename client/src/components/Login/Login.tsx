import React, { FunctionComponent, FormEvent } from 'react';

import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ParticlesBg from 'particles-bg';
import './Login.css';

import { BlinkingCursorTextBuilder } from 'react-animated-text-builders'

const Login: FunctionComponent = () => {
  return (
    <>
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar style={{width: '310px', height: '180px'}} sx={{ m: 6, bgcolor: 'secondary.main' }}>
            <img src="https://studio.uxpincdn.com/studio/wp-content/uploads/2020/12/The-Best-React-Design-Patterns-You-Should-Know-About-1-1024x512.png"/>
          </Avatar>
            <BlinkingCursorTextBuilder
            textStyle={{fontWeight :"bold", fontFamily: "'Fjalla One', sans-serif", fontSize : "30px", color: '#f27059'}}
            lettersApperanceDelay={250}

      >
       WELCOME TO REACTVERSE
      </BlinkingCursorTextBuilder>
        </Box>
      </Container>
      <ParticlesBg type="cobweb" color="#883955"  bg={true} />
      </>
  )
}

export default Login;
