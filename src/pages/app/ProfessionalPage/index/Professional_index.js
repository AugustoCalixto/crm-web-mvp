import React, { useState, useEffect, useRef } from "react";
import * as professionalActions from "../../../../redux/actions/professional.action";
import { server } from "../../../../redux/constants";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import ProfileEmptyImage from '../../../../assets/images/user.png';

import LayoutApp from "../../../../layouts/LayoutApp";
import { Grid, Card, Button, Typography, Box, CardContent, CardMedia } from "@material-ui/core";

// new imports 
import TextField from '@material-ui/core/TextField';
import jwt from 'jsonwebtoken'

const card_title = {
  color: '#333333',
  fontSize: '1.2rem',
  fontWeight: 'bold'
}

const card_subTitle = {
  color: '#666666',
  fontSize: '0.9rem',
}

const card_crp = {
  color: '#717171',
  fontSize: '0.6rem',
}

const card_paragraph = {
  fontSize: '0.8rem',
  color: '#717171',
  width: '50%'
}

const card_form = {
  marginBottom: '10px'
}

const Professional_index = (props) => {
  const [isConsult, setConsult] = useState(null);
  const [confirmConsult, setConfirmConsult] = useState(false);
  const dateRef = useRef(null)

  const handleConsult = (profId) => {
    setConsult(profId)
  }

  const handleConfirmConsult = () => {
    try {
      console.log(dateRef.current.value)
      setConfirmConsult(!!dateRef.current.value)
    } catch {
    }
  }

  const createNewAppointment = (profId) => {
    const jwToken = localStorage.getItem('token')
    const {id} = jwt.decode(jwToken)
    const reqBody = {
      patient_id: id,
      professional_id: profId,
      appointment_date: dateRef.current.value,
    }

    axios.post('http://localhost:8080/appointment', reqBody).then(response => {
      console.log(response);
    }).catch(error => console.log(error));

    console.log(reqBody)
  }

  const professionalReducer = useSelector(
    ({ professionalReducer }) => professionalReducer
  );
  const [professionals, setProfessionals] = useState([]);
  const dispatch = useDispatch();

  const handleClickConsulta = (profId) => {
    swal({
      title: "Consulta Marcada com Sucesso",
      icon: "success"
    })
  }

  useEffect(() => {
    if (localStorage.getItem(server.TOKEN_KEY) === null) {
      return props.history.push("/entrar");
    }

    // process.env.REACT_APP_API_URL
    const level = "staff";
    axios.get("http://localhost:8080/fetchUser/" + level).then((res) => {
      setProfessionals(res.data.data);
    });

    // dispatch(professionalActions.index());
  }, [props.history]);

  useEffect(() => {
    console.log(professionals);
  }, [professionals]);

  function confirmDelete(id) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(professionalActions.remove(id));
        swal("Poof! Your data has been deleted!", {
          icon: "success",
        });
      }
    });
  }

  return (
    <LayoutApp>
      <Grid>
        {professionals.map((prof) => {
          const profId = prof.first_name+prof.last_name+"_id";

          return (
            <Box m={2}>
              <Card>
                <CardMedia
                  image={ProfileEmptyImage}
                />
                <CardContent>
                  <Grid container
                        direction="column"
                        justify="space-around"
                        alignItems="flex-end">
                  <Grid xs={12}
                        container>
                    <Grid xs={10}>
                    <Typography  style={card_title}>{prof.first_name+" "+prof.last_name}</Typography>
                    <Typography style={card_subTitle}>Psicólogo</Typography>
                    <Typography style={card_crp} >CRP: 00/12345 | Rio de Janeiro</Typography>
                    </Grid>

                    <Grid xs={2}>
                    <Button variant="contained" onClick={() => handleConsult(profId)}>Marcar Consulta</Button>
                    </Grid>
                  </Grid>
                  { isConsult === profId ?
                  <Grid id={profId}
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                        className="dateGrid">
                    <Grid>
                      <Typography style={card_paragraph}>Pós graduanda em Psicologia Positiva e Autoconhecimento-PUC-RS.Especialização em Psicologia Clínica pela PUC-RJ;Graduação em Psicologia pelo IBMR;</Typography>
                    </Grid>
                    <Grid direction="column"
                          justify="space-between">
                      <form style={card_form} noValidate>
                      <TextField
                          inputRef={dateRef}
                          onChange={() => handleConfirmConsult()}
                          id="datetime-local"
                          label="Next appointment"
                          type="datetime-local"
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </form>
                      <Button variant="contained" disabled={!confirmConsult} onClick={()=> {createNewAppointment(profId)}}>Confirmar</Button>
                    </Grid>
                  </Grid>
                  : <Grid/>}
                  </Grid>
                </CardContent>
              </Card>
            </Box>
          );
        })}
      </Grid>
    </LayoutApp>
  );
};

export default Professional_index;
