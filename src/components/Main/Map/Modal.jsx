import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Image, Modal, Form } from "semantic-ui-react";
import Axios from "axios";

function ModalMarker({
  open,
  setPlantUuid,
  addMarker,
  closeModal,
  token,
  id,
  avatar
}) {
  const [longueur, setLongueur] = useState(null);
  const [largeur, setLargeur] = useState(null);
  const [profondeur, setProfondeur] = useState(null);
  const [seedId, setSeedId] = useState(null);
  let seedOptions = [];
  let PotUuid = null;
  const UserUuid = id;

  const createPotPlant = () => {
    Axios.post(
      `${process.env.REACT_APP_API_URL}/pots`,
      {
        width: largeur,
        length: longueur,
        depth: profondeur,
        UserUuid
      },
      {
        headers: {
          "access-token": token
        }
      }
    )
      .then(res => {
        console.log(res.data);
        PotUuid = res.data.uuid;
        Axios.post(
          `${process.env.REACT_APP_API_URL}/plants`,
          {
            SeedUuid: seedId,
            PotUuid
          },
          {
            headers: {
              "access-token": token
            }
          }
        ).then(res => {
          console.log(res.data);
          addMarker(res.data.uuid);
        });
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => closeModal());
  };

  const getSeeds = async () => {
    const res = await Axios.get(`${process.env.REACT_APP_API_URL}/seeds`);
    for (let index = 0; index < res.data.length; index++) {
      const sedd = {
        key: res.data[index].uuid,
        text: res.data[index].name,
        value: res.data[index].uuid
      };
      seedOptions.push(sedd);
    }
  };
  getSeeds();
  console.log(seedId);

  return (
    <Modal open={open}>
      <Modal.Header>Tu veux planter une plante? </Modal.Header>
      <Modal.Content image>
        <Image
          wrapped
          size="medium"
          src={
            avatar
              ? avatar
              : "https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_960_720.png"
          }
        />
        <Modal.Description>
          <h3>Taille du pot (en cm):</h3>
          <Form>
            <Form.Input
              placeholder="Longueur"
              name="longueur"
              value={longueur}
              onChange={e => setLongueur(e.target.value)}
            />
            <Form.Input
              placeholder="Largeur"
              name="largeur"
              value={largeur}
              onChange={e => setLargeur(e.target.value)}
            />
            <Form.Input
              placeholder="Profondeur"
              name="profondeur"
              value={profondeur}
              onChange={e => setProfondeur(e.target.value)}
            />
          </Form>
        </Modal.Description>
        <Modal.Description>
          <h3>Graines</h3>
          <Form.Select
            onChange={(e, { value }) => setSeedId(value)}
            placeholder="Choisie une graine"
            fluid
            search
            options={seedOptions}
          />
        </Modal.Description>
        <Modal.Description>
          <Button primary onClick={() => createPotPlant()}>
            Planter la plante
          </Button>
          <Button secondary onClick={() => closeModal()}>
            Fermer
          </Button>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}

const mapStateToProps = state => {
  return {
    token: state.authReducer.token,
    id: state.authReducer.id,
    avatar: state.userReducer.user.avatar
  };
};

export default connect(mapStateToProps)(ModalMarker);
