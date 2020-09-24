import React from 'react';
import LayoutApp from '../../../layouts/LayoutApp';
import { Grid, Typography } from '@material-ui/core';

import Image from './images/desenhando.svg';

const HomePage = () => {


  return (
    <LayoutApp>
      <Grid container>
        <Grid item container justify="center" alignItems="center" md="6">
          <img alt="" src={Image} className="p-2 mt-4" style={{width: '60%'}}/>
        </Grid>
        <Grid item justify="center" alignItems="center" md="6">
          <Typography paragrpah variant="h4" className="my-4">Início</Typography>
          <Typography paragraph variant="h5" className="my-4">Pacientes: 20</Typography>
          <Typography paragraph variant="h5" className="my-4">Consultas Agendadas: 5</Typography>
        </Grid>
      </Grid>
    </LayoutApp>
  );
}

export default HomePage;
