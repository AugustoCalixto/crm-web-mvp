import React, { useState, useEffect } from "react";
import * as crudActions from "../../../../redux/actions/crud.action";
import { server } from "../../../../redux/constants";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';

import LayoutApp from '../../../../layouts/LayoutApp';

const CRUD_index = (props) => {
  const crudReducer = useSelector(
    ({ crudReducer }) => crudReducer
  );
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (localStorage.getItem(server.TOKEN_KEY) === null) {
  //     return props.history.push("/login");
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
    <div className="container-fluid">
      <div className="container">
        <div className="page-container">
        <Table className="table table-hover text-nowrap">
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
                      <Link to={"/crud/update/" + data._id}>
                        Edit
                      </Link>
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
        </div>
      </div>    
    </div>
    </LayoutApp>
  )
}

export default CRUD_index;
