import React from 'react';
import { Grid, Container, Hidden, Icon, IconButton, Drawer, List, ListItem } from '@material-ui/core';
import styled from 'styled-components'
import { useSelector } from "react-redux";

import Flags from '../../Flags';
import { I18nProvider} from '../../../locales';
import translate from '../../../locales/translate';

// Images
// import Logo from '../images/logos/logo_beebuzz_branco.png'
// import LogoColored from '../images/logos/logo_beebuzz_preto.png'


const BarContainer = styled(Grid)`
  background-color: ${props => props.colored ? 'white' : 'transparent'};
  height: 70px;
  position: fixed;
  transform: all 1s !important;
  z-index: 10;
`

const Bar = styled(Grid)`
  position: fixed;
  max-width: 1280px;
  padding: 12px 0;
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

const BarButtons = [
  { text: translate('navbar.firstBtn'), icon: 'person' }
]

const NavBar = () => {
  const [colored, setColored] = React.useState(false)
  const [mobileDrawer, setMobileDrawer] = React.useState(false)
  const language = useSelector(state => state.language);

  const updatePageOffset = () => {
    setColored(window.pageYOffset > 30)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', updatePageOffset)

    return function cleanUp() {
      window.removeEventListener('scroll', updatePageOffset)
    }
  })

  return (
    <I18nProvider locale={language}>
      <BarContainer container colored={colored}>
        <Container maxWidth="lg">
          <Bar container justify="space-between">
            <Grid item>
              {/* <BarLogo src={colored ? LogoColored : Logo} alt="BeeBuzz" /> */}
            </Grid>
            <Grid item>
              <Flags />
              <Hidden mdUp>
                <MenuButton colored={colored} style={{ marginRight: 32 }} onClick={() => { setMobileDrawer(true) }}>
                  <Icon>menu</Icon>
                </MenuButton>
              </Hidden>
            </Grid>
          </Bar>
        </Container>
        <Drawer anchor="right" open={mobileDrawer} onClose={() => { setMobileDrawer(false) }}>
          <List>
            {BarButtons.map((btn, index) => (
              <DrawerButton button key={`drawer-btn-${index}`}>
                <Icon style={{ marginRight: 12 }}>{btn.icon}</Icon>
                {btn.text}
              </DrawerButton>
            ))}
            <DrawerButton button>
              <Icon style={{ marginRight: 12 }}>person</Icon>
              {translate('navbar.enterBtn')}
            </DrawerButton>
            <DrawerButton button>
              <Icon style={{ marginRight: 12 }}>how_to_reg</Icon>
              {translate('navbar.logBtn')}
            </DrawerButton>
          </List>
        </Drawer>
      </BarContainer>
    </I18nProvider>
  );
}

export default NavBar;