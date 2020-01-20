import React, { useState } from 'react'
import { Button, Image, Modal, Dropdown, Form } from 'semantic-ui-react'
import Axios from 'axios';

function ModalMarker({ open, setPlantUuid, addMarker, closeModal }) {
  const [longueur, setLongueur] = useState(null);
  const [largeur, setLargeur] = useState(null);
  const [profondeur, setProfondeur] = useState(null);
  let seedOptions = []

  const createPlant = () => {
    Axios.post("/plant")
      .then(res => {
        setPlantUuid(res.data.uuid)
        return addMarker()
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => closeModal())
  }

  const getSeeds = async () => {
    const res = await Axios.get("https://floco-app.herokuapp.com/seeds")
    for (let index = 0; index < res.data.length; index++) {
      const sedd = { key: res.data[index].uuid, text: res.data[index].name, value: res.data[index] }
      seedOptions.push(sedd)
    }
  }
  getSeeds()

  const onSubmit = () => {
    Axios.post()
  }

  return (
    <Modal open={open}>
      <Modal.Header>Tu veux planter une plante? </Modal.Header>
      <Modal.Content image>
        <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
        <Modal.Description>
          <h3>Taille du pot (en cm):</h3>
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
        </Modal.Description>
        <Modal.Description>
          <h3>Graines</h3>
          <Dropdown
            placeholder='Choisie une graine'
            fluid
            search
            selection
            options={seedOptions}
          />
        </Modal.Description>
        <Button primary onClick={() => { createPlant() }}>Planter la plante</Button>
      </Modal.Content>
    </Modal>
  )
};

export default ModalMarker;
