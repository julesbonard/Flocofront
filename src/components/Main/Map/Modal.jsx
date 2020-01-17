import React, { useState } from 'react'
import { Button, Header, Image, Modal, Dropdown, Form } from 'semantic-ui-react'
import { axios } from 'axios';

function ModalMarker({ open, setPlantUuid, addMarker, closeModal }) {
  const [longueur, setLongueur] = useState(null);
  const [largeur, setLargeur] = useState(null);
  const [profondeur, setProfondeur] = useState(null);

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
  const seedOptions = [
    { key: 'af', value: 'af', text: 'Achillée' },
    { key: 'bf', value: 'bf', text: 'Avalanche ' },
    { key: 'cf', value: 'cf', text: 'Eucalyptus' },
    { key: 'df', value: 'df', text: 'Renoncule' },
    { key: 'ef', value: 'ef', text: 'Pavot' },
  ]

  return (
    <Modal open={open}>
      <Modal.Header>Récapitulatif : </Modal.Header>
      <Modal.Content image>
        <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
        <Modal.Description>
          <Header>Nom de la plante</Header>
          <p>Taille du pot:</p>
          <Form>
            <Form.Input
              placeholder='Longueur'
              name='longueur'
              value={longueur}
              onChange={e => setLongueur(e.target.value)}
            />
            <Form.Input
              placeholder='Largeur'
              name='largeur'
              value={largeur}
              onChange={e => setLargeur(e.target.value)}
            />
            <Form.Input
              placeholder='Profondeur'
              name='profondeur'
              value={profondeur}
              onChange={e => setProfondeur(e.target.value)}
            />
          </Form>
          <p>interieur ou exterieur</p>
          <p> graines (menu deroualnt )</p>
          <Dropdown
            placeholder='Choisie une graine'
            fluid
            search
            selection
            options={seedOptions}
          />
          <Button onClick={() => { createPlant() }}>Planter la plante</Button>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
};

export default ModalMarker;
