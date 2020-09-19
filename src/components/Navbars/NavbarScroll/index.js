import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import styled from 'styled-components'
import { Hidden, IconButton, Drawer, List, ListItem, Button, Row } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Logo from './logo.png';  

const StyledNav = styled.nav`
    padding: 3px 40px !important;

    @media (max-width: 959px){
        ul{
            display: none;
        }
    }

    h3 {
        font-family: Comfortaa, sans-serif;
        font-weight: 600;
        font-size: 1.8rem;
        line-height: 1.6rem;
        color: #023E73;
    }
`

const MenuButton = styled(IconButton)`
  color: ${props => props.colored ? 'var(--primary)' : 'white'} !important;
  font-weight: 700 !important;
  &:hover {
    background-color: var(--lightsecondary) !important;
  }
`
const DrawerButton = styled(ListItem)`
  height: 75px;
  min-width: 250px;
  & .material-icons.MuiIcon-root {
    color: var(--secondary);
    opacity: 0.8;
    font-size: 32px;
  }
`

const NavbarScroll = (props) => {
    const [mobileDrawer, setMobileDrawer] = React.useState(false)

    return (
        <StyledNav className={props.classNavbar+" d-flex justify-content-between"}>
            <div className="logo">
                <a href="/"><img src={Logo} alt="" style={{borderRadius: ' '}}/></a>
            </div>
            <Link to="/login" className="my-auto"><Button  variant="contained" style={{height: 40, width: 100, backgroundColor: '#11C5D9', color: 'white', fontWeight: '900'}}>Entrar</Button></Link>
            
            {/*<Hidden  mdUp>
                <MenuButton className="d-block ml-auto" style={{ width: '50px' }} onClick={() => { setMobileDrawer(true) }}>
                    <FontAwesomeIcon icon={faBars} style={{width: '100%', height: '100%'}}/>
                </MenuButton>
            </Hidden>
            <Drawer anchor="right" open={mobileDrawer} onClose={() => { setMobileDrawer(false) }}>
                <List>
                    <DrawerButton button >
                        <h3>About</h3>
                    </DrawerButton>
                    <DrawerButton button>
                        <h3>Team</h3>
                    </DrawerButton>
                    <DrawerButton button>
                        <h3>Partners</h3>
                    </DrawerButton>
                    <DrawerButton button>
                        <h3>Contact</h3>
                    </DrawerButton>
                </List>
            </Drawer>*/}
        </StyledNav>
    )
}

export default NavbarScroll;
