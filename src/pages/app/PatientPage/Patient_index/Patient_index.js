import React, { useState, useEffect } from "react";
import * as crudActions from "../../../../redux/actions/crud.action";
import { server } from "../../../../redux/constants";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Grid,
  Button
} from "@material-ui/core";

import LayoutApp from "../../../../layouts/LayoutApp";

const CRUD_index = (props) => {
  const crudReducer = useSelector(({ crudReducer }) => crudReducer);
  const dispatch = useDispatch();
  const history = useHistory();

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

  return (
    <LayoutApp>
          <Grid className="p-4">
            <Typography variant="h4">Meus Pacientes</Typography>
            <Table className="table table-hover text-nowrap mt-4">
              <TableHead>
                <TableRow>
                  <th>Alias</th>
                  <th>Serial Name</th>
                  <th>Created Date</th>
                  <th>Action</th>
                </TableRow>
              </TableHead>
              <TableBody>
                {crudReducer.result ? (
                  crudReducer.result.map((data, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell>{data.alias}</TableCell>
                        <TableCell>{data.serial_number}</TableCell>
                        <TableCell>{data.created}</TableCell>
                        <TableCell>
                          <Link to={"/crud/update/" + data._id}>Edit</Link>
                          {" | "}
                          <Link onClick={() => confirmDelete(data._id)}>
                            Delete
                          </Link>
                        </TableCell>
                      </TableRow>
                    );
                  })
                ) : (
                  <TableCell></TableCell>
                )}
              </TableBody>
            </Table>
            <Button variant="contained" color="primary" className="d-block ml-auto mt-4" onClick={() => history.push('/pacientes/new')}>Novo Paciente</Button>
          </Grid>
    </LayoutApp>
  );
};

export default CRUD_index;
