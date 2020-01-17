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
    { text: 'Achillée' },
    { text: 'Avalanche ' },
    { text: 'Eucalyptus' },
    { text: 'Renoncule' },
    { text: 'Pavot' },
    { text: 'Muflier' },
    { text: 'Arum' },
    { text: 'Jasmin' },
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
          <Button onClick={() => { createPlant() }}>Planter une plante</Button>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
};

export default ModalMarker;
