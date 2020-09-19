import React, {useState} from "react";
import {Link, withRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { server } from "../../../../constants";
import { Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {COLLAPSED_DRAWER, FIXED_DRAWER} from "constants/ActionTypes";
import SearchBox from "components/SearchBox";
import {switchLanguage, toggleCollapsedNav} from "actions/Setting";
import IntlMessages from "util/IntlMessages";

const Index = (props) => {

  const dispatch = useDispatch();

  const {drawerType, locale} = useSelector(({settings}) => settings);
  const [langSwitcher, setLangSwitcher] = useState(false);
  const [mailNotification, setMailNotification] = useState(false);
  const [appNotification, setAppNotification] = useState(false);
  const [searchBox, setSearchBox] = useState(false);
  const [apps, setApps] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [anchorE1, setAnchorE1] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = event => {
    setOpen(true);
    setAnchorE1(event.currentTarget);
  };

  const handleRequestCloseMenu = () => {
    setOpen(false);
  };

  const onAppNotificationSelect = () => {
    setAppNotification(!appNotification)
  };

  const onMailNotificationSelect = () => {
    setMailNotification(!mailNotification)
  };
  const onLangSwitcherSelect = () => {
    setLangSwitcher(!langSwitcher);
  };

  const onSearchBoxSelect = () => {
    setSearchBox(!searchBox)
  };
  const onAppsSelect = () => {
    setApps(!apps)
  };

  const handleRequestClose = () => {
    setSearchBox(false);
    setLangSwitcher(false);
    setMailNotification(false);
    setSearchBox(false);
    setApps(false);
  };

  const onToggleCollapsedNav = (e) => {
    const val = !props.navCollapsed;
    dispatch(toggleCollapsedNav(val));
  };


  const Apps = () => {

    return (
      <ul className="jr-list jr-list-half">
        <li className="jr-list-item">
          <Link className="jr-list-link" to="/app/calendar/basic">
            <i className="zmdi zmdi-calendar zmdi-hc-fw"/>
            <span className="jr-list-text"><IntlMessages id="sidebar.calendar.basic"/></span>
          </Link>
        </li>

        <li className="jr-list-item">
          <Link className="jr-list-link" to="/app/to-do">
            <i className="zmdi zmdi-check-square zmdi-hc-fw"/>
            <span className="jr-list-text"><IntlMessages id="sidebar.appModule.toDo"/></span>
          </Link>
        </li>

        <li className="jr-list-item">
          <Link className="jr-list-link" to="/app/mail">
            <i className="zmdi zmdi-email zmdi-hc-fw"/>
            <span className="jr-list-text"><IntlMessages id="sidebar.appModule.mail"/></span>
          </Link>
        </li>

        <li className="jr-list-item">
          <Link className="jr-list-link" to="/app/chat">
            <i className="zmdi zmdi-comment zmdi-hc-fw"/>
            <span className="jr-list-text"><IntlMessages id="sidebar.appModule.chat"/></span>
          </Link>
        </li>

        <li className="jr-list-item">
          <Link className="jr-list-link" to="/app/contact">
            <i className="zmdi zmdi-account-box zmdi-hc-fw"/>
            <span className="jr-list-text"><IntlMessages id="sidebar.appModule.contact"/></span>
          </Link>
        </li>

        <li className="jr-list-item">
          <Link className="jr-list-link" to="/">
            <i className="zmdi zmdi-plus-circle-o zmdi-hc-fw"/>
            <span className="jr-list-text">Add New</span>
          </Link>
        </li>
      </ul>);
  };


  const updateSearchText = (evt) => {
    setSearchText(evt.target.value);
  };

  const onSwitchLanguage = (lang) => {
    dispatch(switchLanguage(lang))
  };

  const drawerStyle = drawerType.includes(FIXED_DRAWER) ? "d-block d-xl-none" : drawerType.includes(COLLAPSED_DRAWER) ? "d-block" : "d-none";

  return (
    <AppBar className="app-main-header">
      <Toolbar className="app-toolbar" disableGutters={false}>

        <IconButton className={`jr-menu-icon mr-3 ${drawerStyle}`} aria-label="Menu"
                    onClick={onToggleCollapsedNav}>
          <span className="menu-icon"/>
        </IconButton>

        <Link className="app-logo mr-2 d-none d-sm-block" to="/">
          <Typography variant="h3" style={{color: "white"}}>Clinicus</Typography>
        </Link>


        <SearchBox styleName="d-none d-lg-block" placeholder=""
                   onChange={updateSearchText}
                   value={searchText}/> 

      <div className="user-detail">
        <div style={{minWidth: 20, minHeight: 20}}>
          <i className="zmdi zmdi-settings zmdi-hc-2x" onClick={handleClick}/>
        </div>
      </div>
        <Menu className="user-info"
                    id="simple-menu"
                    anchorEl={anchorE1}
                    open={open}
                    onClose={handleRequestCloseMenu}
                    PaperProps={{
                      style: {
                        minWidth: 120,
                        paddingTop: 0,
                        paddingBottom: 0
                      }
                    }}
              >
          <MenuItem>
            <i className="zmdi zmdi-settings zmdi-hc-fw mr-2"/>
            <IntlMessages id="popup.setting"/>
          </MenuItem>
          <MenuItem onClick={() => {
            handleRequestClose();
            localStorage.removeItem(server.TOKEN_KEY);
          }}>
            <i className="zmdi zmdi-sign-in zmdi-hc-fw mr-2"/>

            <IntlMessages id="popup.logout"/>
          </MenuItem>

        </Menu>

        <div className="ellipse-shape"/>
      </Toolbar>
    </AppBar>
  );
};


export default withRouter(Index);
