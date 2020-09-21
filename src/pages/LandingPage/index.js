import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import store from '../../rematch';
import styled from 'styled-components';
// import { CircularProgress } from '@material-ui/core';

import NavbarScroll from '../../components/Navbars/NavbarScroll';
import Section1 from './components/Section1';
import SectionX from './components/SectionX';
import Section2 from './components/Section2';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Footer from '../../components/FooterLP';

const HomePageDiv = styled.div`
  margin: auto;
`

// const StyledCircularProgress = styled(CircularProgress)`
//   display: block;
//   margin: auto;
// `

export default function HomePage() {
  const [classNavbar, setClassNavbar] = useState('nav');
  // const [isLoading, setIsLoading] = useState(true);

  // async function Loading() { await setTimeout(() => setIsLoading(false), 1500);}

    useEffect(() => {
        window.onscroll = () => handleScroll()
        // Loading();
    })

    const handleScroll = () => { 
        if (document.documentElement.scrollTop > 0) {
          setClassNavbar('navBarBlack')
         } else {
          setClassNavbar('nav')      
         }
       }

    return (
      <HomePageDiv>
        {/* { isLoading ? 
          <StyledCircularProgress />
          : 
        <> */}
          <NavbarScroll classNavbar={classNavbar}/>
          <Section1 />
          <SectionX />
          <Section2 />
          {/*<Section3 />*/}
          <Section4 />
          <Section5 />
          <Footer/>
        {/* </>} */}
        
      </HomePageDiv>

    )
}
