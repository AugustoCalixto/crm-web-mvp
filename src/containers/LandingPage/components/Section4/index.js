import React from 'react';
import styled from 'styled-components';

// FontAwesome Icons
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import { Typography } from '@material-ui/core';
// reactstrap components
import {
    Card,
    Row,
    Col
  } from "reactstrap";

// images
import MIT from './images/partners/mit.png';
import DNC from './images/partners/dnc.png';
import CEU from './images/partners/ceu.png';


// core components

const StyledSection = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    display: grid;
    grid-template-areas:
    ".  .       ."
    ".  title   ."
    ".  .       ."
    ".  info    ."
    ".  .       ."
    ;
    grid-template-rows: 1fr 2fr .5fr 15fr 1fr;
    grid-template-columns: 1fr 8fr 1fr;

    .titleDiv{
      grid-area: title;

      h2{
          font-family: Comfortaa, cursive, sans-serif;
          font-weight: 600;
      }

      h5{
        font-family: Roboto, sans-serif;
      }
    }

    .infoDiv{
      grid-area: info 
    }

    @media (max-width: 759px){
      grid-template-rows: .1fr .5fr .2fr 2fr .1fr;
      grid-template-columns: 1fr 20fr 1fr;

      img {
        width: 40% !important;
        height: 70%;
      }
    }
`

const Section3 = () => {
    return (
        <StyledSection  id="partners">
            <div className="titleDiv">

                <Col className="ml-auto mr-auto text-center" md="8">
                    <Typography variant="h3" className="title">Nossos Parceiros Globais</Typography>
                    <h5 className="description">                    
                      
                    </h5>
                </Col>

            </div>
            <div className="infoDiv">
              <Row className="mt-5">
              <Col md="3" className="mx-auto" style={{minWidth: '20px', minHeight: '20px'}}>
                <Card style={{height: '200px'}}>
                  <img className="m-auto" alt='' src={MIT} style={{height: '', width: '90%'}}/>
                </Card>
              </Col>
              <Col md="3" className="mx-auto" style={{minWidth: '20px', minHeight: '20px'}}>
                <Card style={{height: '200px'}}>
                  <img className="m-auto" alt='' src={DNC} style={{height: '', borderRadius: '5%'}}/>
                </Card>
              </Col>
              <Col md="3" className="mx-auto" style={{minWidth: '20px', minHeight: '20px'}}>
                <Card style={{height: '200px'}}>
                  <img className="m-auto" alt='' src={CEU} style={{height: '', width: '90%'}}/>
                </Card>
              </Col>
              </Row>
            </div>
        </StyledSection>
    )
}

export default Section3
