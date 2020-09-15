import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import IntlMessages from 'util/IntlMessages';

import Left from './images/left.jpg';
import Right from './images/right.jpg'

import ActivityBox from 'components/ActivityBox';
import AppModuleHeader from 'components/AppModuleHeader';
import AppNotification from 'components/AppNotification';
import AppRow from 'components/AppRow';
import Callouts from 'components/callouts/Callout';
import CardBox from 'components/CardBox';
import CardLayout from 'components/CardLayout';
import Cards from 'components/Cards';
import InfoCard from 'components/InfoCard';
import InFoWithBgImage from 'components/InFoWithBgImage';
import LanguageSwitcher from 'components/LanguageSwitcher';
import ProfileCard from 'components/ProfileCard';

const StyledSection = styled.div`
  a{
    text-decoration: none;
    transition: box-shadow .3s;
  }

  a:hover{
    box-shadow: 0 0 11px rgba(33,33,33,.2); 
  }

  .jr-card{
    min-height: 65vh;
    margin: 0 !important;
  }

  .imgDiv{
    max-height: 100%;
    min-width: 30vw;

    img{
      display: block;
      margin: 0 auto;
      border-radius: 50%;
      width: 15rem;
      height: 15rem;
      max-height: 100%;
    }
  }


`

class HomePage extends React.Component {

  render() {
    return (
      <StyledSection className="app-wrapper">

        <CardLayout>
          <div className="d-flex justify-content-center">
            <h1><IntlMessages id=" "/>Bem Vindo </h1>
          </div>
          <div className="d-flex justify-content-around mt-4">
            <Link to="app/pacientes">
              <div className="imgDiv m-3">
                <img alt=' ' src={Left} className=""/>
                <h2 className="text-center m-4">Pacientes</h2>
              </div>
            </Link>
            <Link to="app/consultas">
              <div className="imgDiv m-3">
                <img alt=' ' src={Right} className=""/>
                <h2 className="text-center m-4">Consultas</h2>
              </div>
            </Link>
          </div>
          
        </CardLayout>

      </StyledSection>
    );
  }
}

export default HomePage;