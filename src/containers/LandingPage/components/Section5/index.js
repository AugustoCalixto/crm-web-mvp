import React from 'react';
import styled from 'styled-components';
import { Button, Form, Input, Container, Row, Col } from "reactstrap";
import { Typography } from '@material-ui/core';

// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

const StyledSection = styled.div`
    width: 100%;
    height: 100%;

    h2{
        font-family: Comfortaa, cursive, sans-serif;
        font-weight: 600;
    }

    h5, p{
        font-family: Roboto, sans-serif;
    }
`

const Section1 = () => {
    return (
        <StyledSection  id="contact">
                <div className="section section-gray">
                    <Container>
                        <Row>
                            <Col className="ml-auto mr-auto text-center mt-5" md="8">
                                <Typography variant="h3" className="title">Entre em Contato</Typography>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="ml-auto mr-auto text-center mt-4" md="6">
                                <Typography variant="h5" className="title">
                                    <small>Nos acompanhe nas redes sociais</small>
                                </Typography>
                                <a href="https://www.linkedin.com/company/clinicus-app/"><Button className="btn-just-icon mr-1" color="linkedin">
                                    <FontAwesomeIcon icon={faLinkedinIn} style={{width: '80% !important', height: '100% !important'}}/>
                                </Button></a>
                                <a href="https://www.facebook.com/Clinicus-App-629897684303626"><Button className="btn-just-icon mr-1" color="facebook">
                                    <FontAwesomeIcon icon={faFacebookF} style={{width: '80% !important', height: '100% !important'}}/>
                                </Button></a>
                                {/* <Button className="btn-just-icon mr-1" color="google">
                                <i className="fa fa-google" />
                                </Button> */}
                                {/* <Button className="btn-just-icon mr-1" color="dribbble">
                                <i className="fa fa-dribbble" />
                                </Button> */}
                                <a href="https://www.instagram.com/clinicusapp/"><Button className="btn-just-icon mr-1" color="instagram">
                                    <FontAwesomeIcon icon={faInstagram} style={{width: '80% !important', height: '100% !important'}}/>
                                </Button></a>
                                {/* <Button className="btn-just-icon" color="youtube">
                                <i className="fa fa-youtube" />
                                </Button> */}
                            </Col>
                        </Row>
                        <Row>
                            <Col className="ml-auto mr-auto text-center" md="6">
                                <h3 className="title">
                                    <small>Ou nos deixe uma mensagem</small>
                                </h3>
                                <Form className="contact">
                                <Row>
                                    <Col md="6">
                                        <Input className="my-2" placeholder="Nome" type="text" />
                                    </Col>
                                    <Col md="6">
                                        <Input className="my-2" placeholder="Sobrenome" type="text" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="6">
                                    <Input className="my-2" placeholder="Email" type="text" />
                                    </Col>
                                    <Col md="6">
                                    <Input className="my-2" placeholder="Assunto" type="text" />
                                    </Col>
                                </Row>
                                <Input className="my-2" placeholder="Mensagem" rows="7" type="textarea" />
                                <Row>
                                    <Col className="ml-auto mr-auto" md="6">
                                        <Button block className="btn-round my-2" color="primary">
                                            Enviar
                                        </Button>
                                    </Col>
                                </Row>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>
        </StyledSection>
    )
}

export default Section1
