import React from "react";
import { useDispatch} from "react-redux";
import { IconButton } from '@material-ui/core';
import ReactCountryFlag from "react-country-flag"

const Flags = props => {
  const dispatch = useDispatch();

  const changeLanguage = (language) => {
    dispatch({type: 'language/setLanguage', payload: language})
  }

  return(
    <>
    <IconButton
    onClick={ () => changeLanguage("en-US")}
    >
        <ReactCountryFlag countryCode="US" svg style={{width: '1.5em', height: '1.5em',}} title="US" />
    </IconButton>
    <IconButton
    onClick={() => changeLanguage("pt-BR")}
    >
        <ReactCountryFlag countryCode="BR" svg style={{width: '1.5em', height: '1.5em',}} title="BR" />
    </IconButton>  
  </>
)};

export default Flags;
