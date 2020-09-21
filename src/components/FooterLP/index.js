import React from 'react';
import styled from 'styled-components';
import swal from '@sweetalert/with-react';

// reactstrap components
import { Container, Row, Button, Input } from "reactstrap";

// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

import { useSelector } from "react-redux";
import { I18nProvider} from '../../locales';
// import translate from '../../locales/translate';

import Logo from './logo.png';

const StyledFooter = styled.footer`
  .topSection {
    width: 100%;
    border-bottom: 1px gray;

    h2{
        font-family: Comfortaa, cursive, sans-serif;
        font-weight: 600;
      }

      h5, span, p{
        font-family: Roboto, sans-serif;
      }

    button {
      display: block;
      background-color: #11C5D9;
      border-color: #11C5D9;
      width: 40%;
      height: 20%;
      font-size: 1.2rem;
    }

    button:hover {
      background-color: #5CF2F2;
      border-color: #5CF2F2;
    }
  }


  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;

    li {
      float: left;

      a {
        display: block;
        color: black;
        text-align: center;
        padding: 16px;
        text-decoration: none;
      }

      a:hover {
        background-color: #EEEEEE;
      }
    }
  }
`
const StyledEmailSwal = styled.div`
    h1 {
        font-size: 3rem;
        font-family: Comfortaa, cursive, sans-serif;
    }
`

const Footer = () => {
  const language = useSelector(state => state.language);

  const handleClick = () => {
    swal({
        buttons: {cancel: 'Close', catch: 'Send'},
        content:
        (<StyledEmailSwal className="p-1">
          <h2 className="m-2 p-2">Get early access</h2>
          <p className="mx-5 my-2">
            We will email you the link for early download.
          </p>
          <Input className="mt-3 mx-auto px-3" type="email"></Input>
        </StyledEmailSwal>)
      })
  }

  return (
    <I18nProvider locale={language}>
      <StyledFooter className="footer footer-white">
        <Container>
          <Row className="mt-5">
            <div className="mr-auto mt-5">
              <img alt='' src={Logo} style={{height: '50px'}}/>
              <span className="copyright ml-4">
                © {new Date().getFullYear()}
                , made with <FontAwesomeIcon icon={faHeart} className="heart" /> by Clinicus
              </span>
            </div>
            <div className="ml-auto mb-2 mt-5 mr-3">
              <a href="https://www.linkedin.com/company/clinicus-app/"><Button className="btn-just-icon mr-1" color="linkedin">
                <FontAwesomeIcon icon={faLinkedinIn} style={{width: '80% !important', height: '100% !important'}}/>
              </Button></a>
              <a href="https://www.facebook.com/Clinicus-App-629897684303626"><Button className="btn-just-icon mr-1" color="facebook">
                <FontAwesomeIcon icon={faFacebookF} style={{width: '80% !important', height: '100% !important'}}/>
              </Button></a>
              <a href="https://www.instagram.com/clinicusapp/"><Button className="btn-just-icon mr-1" color="instagram">
                <FontAwesomeIcon icon={faInstagram} style={{width: '80% !important', height: '100% !important'}}/>
              </Button></a>
            </div>
          </Row>
          <Row>
            <div className="credits my-3 mr-auto">

            </div>
            <div className="ml-auto">
              {/*<ul>
                <li>
                  <a
                    href="#about"
                    className="mr-1"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#team"
                    className="mr-1"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href="#partners"
                  >
                    Partners
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                  >
                    Contact
                  </a>
                </li>                
              </ul>*/}
            </div>
          </Row>
        </Container>
      </StyledFooter>
    </I18nProvider>
  );
}

export default Footer;