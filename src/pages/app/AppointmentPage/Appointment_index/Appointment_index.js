import React, { useState, useEffect } from "react";
import * as crudActions from "../../../../redux/actions/crud.action";
import { server } from "../../../../redux/constants";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import { Grid, Card, Button, Typography, Box, CardContent, CardMedia } from "@material-ui/core";
import LayoutApp from '../../../../layouts/LayoutApp';

import axios from 'axios'

const AppointmentPage_index = (props) => {
  const crudReducer = useSelector(
    ({ crudReducer }) => crudReducer
  );
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (localStorage.getItem(server.TOKEN_KEY) === null) {
  //     return props.history.push("/entrar");
  //   }
  //   dispatch(crudActions.index());
  // }, []);

  function confirmDelete(id) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(crudActions.remove(id));
        swal("Poof! Your data has been deleted!", {
          icon: "success",
        });
      }
    });
  }  

  const [allAppointments, setAllAppointments] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:8080/appointment').then(response => {
      setAllAppointments(response.data.data)  
      console.log(response.data.data)
      console.log(allAppointments)
      setAllAppointments(allAppointments => ({ ...allAppointments, a: response.data.data }));
    }).catch(error => console.log(error));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <LayoutApp>
      
    </LayoutApp>
  )
}

export default AppointmentPage_index;
