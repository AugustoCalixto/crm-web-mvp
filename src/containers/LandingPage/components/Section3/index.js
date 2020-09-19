import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedinIn, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons'


// reactstrap components
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardImg,
    CardTitle,
    Row,
    Col
  } from "reactstrap";

// images
import Braian from './images/braian.png';
import Bruna from './images/bruna.png';
import Marcela from './images/marcela.png';
import Shivali from './images/shivali.png';
import Luis from './images/luis.png';

// core components

const StyledSection = styled.div`
    width: 100%;
    min-height: 100vh;
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
        grid-area: info;
        display: grid;
        grid-template-areas:
        "card1  card2"
        "card3  card4"
        "card5  ."
        ;
        grid-template-rows: 2fr 2fr 2fr;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1fr;

        .card1{
            grid-area: card1;
        }
        .card2{
            grid-area: card2;
        }
        .card3{
            grid-area: card3;
        }
        .card4{
            grid-area: card4;
        }
        .card5{
            grid-area: card5;
        }
    }
  
  .avatarImg {
    width: 100%
  }

  .btnIcon {
    margin: 0;
    padding: 0;

    svg {
      height: 100%;
      width: 100%;
    }
  }

  @media (max-width: 759px){
    grid-template-rows: .5fr .5fr .2fr 20fr .5fr;
    grid-template-columns: 1fr 8fr 1fr;

    .infoDiv{
      grid-template-areas:
        "card1"  
        "card2"
        "card3"  
        "card4"
        "card5";
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
      grid-template-columns: 1fr;

      .card-profile {
        margin: 1rem 0 !important;
      }

      img{
        width: 30%;
      }

      h4, h6, p, .card-footer {
        text-align: center !important;
      }
    }
  }
`

const Section3 = () => {
    return (
        <StyledSection  id="team">
            <div className="titleDiv">

                <Col className="ml-auto mr-auto text-center" md="8">
                    <h2 className="title">The Executive Team</h2>
                    <h5 className="description">                    
                      United across the globe to help
                    </h5>
                </Col>

            </div>
            <div className="infoDiv">
                
            


                <Card className="card-profile card-plain card1">
                  <Row>
                    <Col md="5">
                      <CardImg top tag="div">
                        <a href=" " onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img avatarImg"
                            src={Braian}
                          />
                        </a>
                      </CardImg>
                    </Col>
                    <Col md="6" className="p-0">
                      <CardBody className="text-left">
                        <CardTitle tag="h4">Braian Mendes</CardTitle>
                        <h6 className="card-category">Cofounder</h6>
                        <p className="card-description">
                          Software Engineer with with a passion for innovation and inclusive technologies, 
changing the world one line of code at a time.
                        </p>
                        <CardFooter className="pull-left">
                          <a href="https://www.linkedin.com/in/braianmendes/"
                            target="_blank"
                            rel="noopener noreferrer"
                            ><Button
                            className="btn-just-icon btn-link btnIcon"
                            color="linkedin"  
                          >
                            <FontAwesomeIcon icon={faLinkedinIn} />
                          </Button></a>
                          <a href="https://twitter.com/braian_dev"
                            target="_blank"
                            rel="noopener noreferrer"                          
                          ><Button
                            className="btn-just-icon btn-link btnIcon"
                            color="twitter"
                          >
                            <FontAwesomeIcon icon={faTwitter} />
                          </Button></a>
                          {/* <Button
                            className="btn-just-icon btn-link"
                            color="google"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-google-plus" />
                          </Button> */}
                        </CardFooter>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>

                <Card className="card-profile card-plain card2">
                  <Row>
                    <Col md="5">
                      <CardImg top tag="div">
                        <a href=" " onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img avatarImg"
                            src={Bruna}
                          />
                        </a>
                      </CardImg>
                    </Col>
                    <Col md="6" className="p-0">
                      <CardBody className="text-left">
                        <CardTitle tag="h4">Bruna Donega</CardTitle>
                        <h6 className="card-category">Cofounder</h6>
                        <p className="card-description">
                          BPharm. Passionate by helping people out and seeing the best in every situation.
                        </p>
                        <CardFooter className="pull-left">
                          <a href="https://www.linkedin.com/in/brunamancini/"
                            target="_blank"
                            rel="noopener noreferrer"><Button
                            className="btn-just-icon btn-link btnIcon"
                            color="linkedin"
                          >
                            <FontAwesomeIcon icon={faLinkedinIn} />
                          </Button></a>
                          {/* <a href=" "
                            target="_blank"
                            rel="noopener noreferrer"><Button
                            className="btn-just-icon btn-link btnIcon"
                            color="twitter"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <FontAwesomeIcon icon={faTwitter} />
                          </Button></a> */}
                          {/* <Button
                            className="btn-just-icon btn-link"
                            color="google"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-google-plus" />
                          </Button> */}
                        </CardFooter>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>

                <Card className="card-profile card-plain card3">
                  <Row>
                    <Col md="5">
                      <CardImg top tag="div">
                        <a href=" " onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img avatarImg"
                            src={Luis}
                          />
                        </a>
                      </CardImg>
                    </Col>
                    <Col md="6" className="p-0">
                      <CardBody className="text-left">
                        <CardTitle tag="h4">Luis Guapa</CardTitle>
                        <h6 className="card-category">Cofounder</h6>
                        <p className="card-description">
                          I love you like Kanye loves Kanye. Don't be scared of
                          the truth. Kanye loves himself like Kanye loves Kanye.
                        </p>
                        <CardFooter className="pull-left">
                          {/* <Button
                            className="btn-just-icon btn-link btnIcon"
                            color="linkedin"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <FontAwesomeIcon icon={faLinkedinIn} />
                          </Button>
                          <Button
                            className="btn-just-icon btn-link btnIcon"
                            color="twitter"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <FontAwesomeIcon icon={faTwitter} />
                          </Button> */}
                          {/* <Button
                            className="btn-just-icon btn-link"
                            color="google"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-google-plus" />
                          </Button> */}
                        </CardFooter>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>

                <Card className="card-profile card-plain card4">
                  <Row>
                    <Col md="5">
                      <CardImg top tag="div">
                        <a href=" " onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img avatarImg"
                            src={Marcela}
                          />
                        </a>
                      </CardImg>
                    </Col>
                    <Col md="6" className="p-0">
                      <CardBody className="text-left">
                        <CardTitle tag="h4">Marcela Mendes</CardTitle>
                        <h6 className="card-category">Cofounder</h6>
                        <p className="card-description">
                        Curious and interested business student. 
                        I am determined to help people who need our help and suffer in silence. 
                        Let's change the world together.
                        </p>
                        <CardFooter className="pull-left">
                          <a href="https://www.linkedin.com/in/marcelamendes04/"
                            target="_blank"
                            rel="noopener noreferrer"><Button
                            className="btn-just-icon btn-link btnIcon"
                            color="linkedin"
                          >
                            <FontAwesomeIcon icon={faLinkedinIn} />
                          </Button></a>
                          <a href="https://www.instagram.com/maarcela.mendes/" 
                            target="_blank"
                            rel="noopener noreferrer"><Button
                            className="btn-just-icon btn-link btnIcon"
                            color="instagram"
                          >
                            <FontAwesomeIcon icon={faInstagram} />
                          </Button></a>
                          <Button
                            className="btn-just-icon btn-link btnIcon"
                            color="google"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <FontAwesomeIcon icon={faGoogle} />
                          </Button>                          
                          {/* <Button
                            className="btn-just-icon btn-link"
                            color="google"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-google-plus" />
                          </Button> */}
                        </CardFooter>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>

                <Card className="card-profile card-plain card5">
                  <Row>
                    <Col md="5">
                      <CardImg top tag="div">
                        <a href=" " onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img avatarImg"
                            src={Shivali}
                          />
                        </a>
                      </CardImg>
                    </Col>
                    <Col md="6" className="p-0">
                      <CardBody className="text-left">
                        <CardTitle tag="h4">Shivali</CardTitle>
                        <h6 className="card-category">Cofounder</h6>
                        <p className="card-description">
                          It is literally true that you can succeed best and
                          quickest by helping others to succeed because they
                          care about.
                        </p>
                        <CardFooter className="pull-left">
                          {/* <Button
                            className="btn-just-icon btn-link btnIcon"
                            color="linkedin"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <FontAwesomeIcon icon={faLinkedinIn} />
                          </Button>
                          <Button
                            className="btn-just-icon btn-link btnIcon"
                            color="twitter"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <FontAwesomeIcon icon={faTwitter} />
                          </Button> */}
                          {/* <Button
                            className="btn-just-icon btn-link"
                            color="google"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            <i className="fa fa-google-plus" />
                          </Button> */}
                        </CardFooter>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>



            </div>
        </StyledSection>
    )
}

export default Section3
