import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar'
import {useDispatch} from 'react-redux'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {userSignOut} from 'actions/Auth';
import IntlMessages from 'util/IntlMessages';

const UserInfo = () => {

  const dispatch = useDispatch();

  const [anchorE1, setAnchorE1] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = event => {
    setOpen(true);
    setAnchorE1(event.currentTarget);
  };

  const handleRequestClose = () => {
    setOpen(false);
  };

  return (
    <Link to={"app/perfil"}>
    <div className="user-profile d-flex flex-row align-items-center">

      <Avatar
        alt='...'
        src={"https://via.placeholder.com/150x150"}
        className="user-avatar "
      />
      <div className="user-detail">
        <h4 className="user-name" >Robert Johnson
        </h4>
      </div>

    </div>
    </Link>

  );
};

export default UserInfo;


