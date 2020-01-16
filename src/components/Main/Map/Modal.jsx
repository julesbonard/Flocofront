import React, { useState } from 'react'
import { Button, Header, Image, Modal,  } from 'semantic-ui-react'
import { axios } from 'axios';



function ModalMarker ({open, setPlantUuid, addMarker, closeModal}) {

    const createPlant = () => {
        axios.post("/plant")
        .then(res => {
            setPlantUuid(res.data.uuid)
            return addMarker()
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => closeModal())
    }

    return (
  <Modal open={open}>
    <Modal.Header>Récapitulatif : </Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
      <Modal.Description>
        <Header>Nom de la plante</Header>
        <p>
          Type de pot:</p>
          <p>interieur ou exterieur</p> 
         <p> graines (menu deroualnt )
        </p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
    )};



export default ModalMarker;









