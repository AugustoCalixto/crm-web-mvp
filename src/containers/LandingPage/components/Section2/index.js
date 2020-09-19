import React from 'react';
import styled from 'styled-components';

import { Typography } from '@material-ui/core';
import { Col, } from 'reactstrap';

const StyledSection = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    display: grid;
    grid-template-areas:
    ". . ."
    ". title ."
    ". . ."
    ;
    grid-template-rows: 1fr 8fr 1fr;
    grid-template-columns: 1fr 20fr 1fr;

    .titleDiv{
        grid-area: title;
    }

    h2{
        font-family: 'Comfortaa', cursive, sans-serif;
        font-weight: 600;
    }

    h5{
        font-family: 'Roboto', sans-serif;
    }

    p{
        font-family: 'Roboto', sans-serif;
        font-size: 1.3rem;
        line-height: 1.6rem;
        color: black;
    }
`

const Section2 = () => {
    return (
        <StyledSection  id="about">
            <div className="titleDiv">

                <Col className="ml-auto mr-auto text-center" md="8">
                    <Typography variant="h3" className="title">Sobre a Clinicus</Typography>

                    <p className="mt-3">
                        CLINICUS conecta pessoas a soluções para saúde emocional e psicológica. 
                        <br/>Esta solução vem da combinação de Inteligência Artificial e profissionais da saúde.

                        <br/><br/>Você pode falar com Ollie, nossa IA, que irá acompanhá-lo como um novo amigo,
                         que te escut e entende, e busca dar sempre os melhores conselhos e soluções para o que você está passando.

                        <br/><br/>Ollie pode entender suas dificuldades, em cada detalhe,
                         e então conecta você com os profissionais de saúde mais adequados para você se sentir melhor.

                        <br/><br/>Durante o dia-a-dia, o Ollie irá acompanhá-lo e dar-lhe as melhores dicas e conselhos para ultrapassar os seus obstáculos,
                         e ter uma rotina ainda mais confortável e saudável.
                    </p>
                </Col>

            </div>
        </StyledSection>
    )
}

export default Section2
