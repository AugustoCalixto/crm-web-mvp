import React from 'react';
import { Grid, List, ListItem, ListItemIcon, ListItemText, Card } from '@material-ui/core';
import VoiceChatIcon from '@material-ui/icons/VoiceChat';
import LockIcon from '@material-ui/icons/Lock';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import styled from 'styled-components';
import Background from './images/background.jpg';
import Feature from './images/feature.svg';

const StyledGrid = styled(Grid)`
    background-image: url(${Background});
    background-position: center;
    background-size: cover;
`

const SectionFeature = () => {
    return (
        <StyledGrid  container>
            <Grid item sm={6}>
                <img alt="" src={Feature} style={{width: "100%"}}/>
            </Grid>
            <Grid item sm={6}>
                <Card className="m-4">
                <List className="m-4">
                    <ListItem>
                        <ListItemIcon>
                            <VoiceChatIcon/>
                        </ListItemIcon>
                        <ListItemText>
                        Sessões por vídeo, voz ou chat sem sair de casa.
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon> 
                            <SupervisedUserCircleIcon/>
                        </ListItemIcon>
                        <ListItemText>
                        Nossos especialistas são selecionados para garantir a sua melhor experiência.
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <LockIcon/>
                        </ListItemIcon>
                        <ListItemText>
                        Vídeo-sessões criptografadas para sua segurança.
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <TagFacesIcon/>
                        </ListItemIcon>
                        <ListItemText>
                        Comece o seu autoconhecimento e evolução pessoal. 
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <EmojiPeopleIcon/>
                        </ListItemIcon>
                        <ListItemText>
                        Encontre você mesmo seu psicólogo online.
                        </ListItemText>
                    </ListItem>
                </List>
                </Card>
            </Grid>
        </StyledGrid>
    )
}

export default SectionFeature
