import React, { useState, useEffect } from "react";
import * as professionalActions from "../../../../redux/actions/professional.action";
import { server } from "../../../../redux/constants";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import ProfileEmptyImage from '../../../../assets/images/user.png';

import LayoutApp from "../../../../layouts/LayoutApp";
import { Grid, Card, Button, Typography, Box, CardContent, CardMedia } from "@material-ui/core";

const Professional_index = (props) => {
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
                  <Grid container>
                  <Grid xs={10}>
                  <Typography>{prof.first_name+" "+prof.last_name}</Typography>
                  <Typography>Psicólogo</Typography>
                  </Grid>
                  <Grid xs={2}>

                  <Button variant="contained" onClick={() => handleClickConsulta(profId)}>Marcar Consulta</Button>
                  </Grid>
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
