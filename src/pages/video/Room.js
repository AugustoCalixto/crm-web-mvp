import React, { useState, useEffect } from "react";
import Video from "twilio-video";
import { Container, Grid, Button, Typography, Box } from "@material-ui/core";
import Participant from "./Participant";
import Logo from './logo.png'; 

const Room = ({ roomName, token, handleLogout }) => {
  const [room, setRoom] = useState(null);
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    const participantConnected = (participant) => {
      setParticipants((prevParticipants) => [...prevParticipants, participant]);
    };

    const participantDisconnected = (participant) => {
      setParticipants((prevParticipants) =>
        prevParticipants.filter((p) => p !== participant)
      );
    };

    Video.connect(token, {
      name: roomName,
    }).then((room) => {
      setRoom(room);
      room.on("participantConnected", participantConnected);
      room.on("participantDisconnected", participantDisconnected);
      room.participants.forEach(participantConnected);
    });

    return () => {
      setRoom((currentRoom) => {
        if (currentRoom && currentRoom.localParticipant.state === "connected") {
          currentRoom.localParticipant.tracks.forEach(function (
            trackPublication
          ) {
            trackPublication.track.stop();
          });
          currentRoom.disconnect();
          return null;
        } else {
          return currentRoom;
        }
      });
    };
  }, [roomName, token]);

  const remoteParticipants = participants.map((participant) => (
    <Participant key={participant.sid} participant={participant} />
  ));

  return (
    <Container>
      <Grid>
        <Box py={2} px={1}>
          <Grid
            container
            direction="row"
            justify="center"
            alignContent="center"
            alignItems="center"
          >
            <Grid xs={1} item>
            <div className="logo">
                <img src={Logo} alt="" style={{borderRadius: ' ', width: "4rem"}}/>
            </div>
            </Grid>
            <Grid xs={10} container justify="center" item>
              <Grid><Typography variant="h5">Sala de Consulta {roomName}</Typography></Grid>
              {/* <Typography variant="h5">Room: {roomName}</Typography> */}
            </Grid>
            <Grid xs={1} item>
              <Button variant="contained" onClick={handleLogout}>
                Sair
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Grid container>
          <Grid xs={12} md={6} className="local-participant">
            {room ? (
              <Participant
                key={room.localParticipant.sid}
                participant={room.localParticipant}
              />
            ) : (
              ""
            )}
          </Grid>
          <Grid xs={12} md={6}>
            <div className="remote-participants">{remoteParticipants}</div>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Room;
