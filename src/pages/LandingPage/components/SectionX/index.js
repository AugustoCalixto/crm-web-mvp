import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.div`
    width: 100%;
    height: 50vh;
    background-color: white;
    display: grid;
    grid-template-areas:
    ". . ."
    ". . ."
    ". . ."
    ;
    grid-template-rows: "1fr 1fr 1fr";
    grid-template-columns: "1fr 1fr 1fr";


`

const Section1 = () => {
    return (
        <StyledSection>
            
        </StyledSection>
    )
}

export default Section1
