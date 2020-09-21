import React from 'react';

import { useHistory } from "react-router-dom";

import styled from 'styled-components';
import { Input } from 'reactstrap';
import { Button } from '@material-ui/core';

// Images
import startPhoto from './startPhoto.jpg';
// import Logo from './logo.png';
import phoneImg from './phone.png';

// FontAwesome Icons
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const StyledSection = styled.div`
    width: 100%;
    height: 90vh;
    z-index: 9;
    position: relative;
    display: grid;
    grid-template-areas:
    ". .        ."
    ". logoArea ."
    ". phoneImg ."
    ;
    grid-template-rows: 20% 55% 25%;
    grid-template-columns: 1fr 2fr 1fr;

    .logoArea {
        grid-area: logoArea;

        h1 {
            font-family: 'Bowlby One SC', cursive;
            font-size: 9rem;
            line-height: 8rem;
            color: #0A7ABF;
            border: 1px white;
        }

        h2 {
            font-family: Comfortaa, sans-serif;
            font-weight: 600;
            font-size: 1.8rem;
            line-height: 1.6rem;
            color: #023E73;
        }

        button {
            background-color: #11C5D9;
            border-color: #11C5D9;
            width: 60%;
            height: 20%;
            font-size: 1rem;
            font-weight: 900;
            color: white;

        }

        button:hover {
            background-color: #5CF2F2;
            border-color: #5CF2F2;
        }
    }

    .icon {
        color: white;
        width: 3rem;
        height: 3rem;
        position: absolute;
        left: 48%;
        top: 80vh;
    }

    .phoneImg {
        width: 30%;
    }

    @media (max-width: 759px){
        h1{
            font-size: 5rem !important;
            line-height: 4.5rem !important;
        }

        h2{
            font-size: 1.4rem !important;
            line-height: 1.4rem !important;
        }

        button{
            width: 100% !important;
            font-size: 1rem !important;
            line-height: 1rem !important;
        }

        .phoneImg{
            width: 80%;
        }
    }
`

const StyledPlayer = styled.div`
    position: absolute;
    overflow: hidden;
    z-index: 5;
    /* padding: 0 !important; */

    background-image: url(${startPhoto});
    width: 100vw;
    height: 90vh;
    background-position: center;
    background-size: cover;

    .afterDiv {
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, .3);
    }
`

const StyledEmailSwal = styled.div`
    h1 {
        font-size: 3rem;
    }
`

const Section1 = () => {
    let history = useHistory();

    const handleClick = () => {
        history.push("/login")
    }

    return (
        <>
            <StyledPlayer>
                {/* <ReactPlayer 
                    url="./startVideo.mp4"
                    preload={"auto"}
                    autoplay
                    loop
                    controls={false}
                    volume={0}
                    muted
                    width={"100vw"}
                    height={"90vh"}
                /> */}
                {/* <img src={startPhoto}/> */}
                <div className="afterDiv"/>
            </StyledPlayer>
            <StyledSection>
                <div className="logoArea">
                    <h1 className="text-center">Clinicus</h1>
                    <h2 className="text-center">Connect you to mental health care for free.</h2>
                    <Button className="d-block mx-auto mt-4" variant="contained" onClick={handleClick}>Acesso Beta à Plataforma CRM</Button>
                </div>
                <div style={{gridArea: 'phoneImg'}}>
                    <img className="phoneImg mx-auto d-block" alt='' src={phoneImg}/>
                </div>
                
            </StyledSection>
        </>
    )
}

export default Section1
