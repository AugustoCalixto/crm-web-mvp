import React from 'react';
// import './App.css';
import { Container, Grid, Typography } from '@material-ui/core';
import styled from "styled-components";
import VideoChat from './VideoChat';

const StyledVideoPage = styled(Container)`
  min-width: 100vw;
  min-height: 100vh;
  background: -webkit-linear-gradient(to right, #025373, #50a0bf);
  background: linear-gradient(to right, #025373, #50a0bf);
`

const VideoPage = () => {
  return (
    <StyledVideoPage>
      <Grid>
        <VideoChat />
      </Grid>
    </StyledVideoPage>
  );
};

export default VideoPage;