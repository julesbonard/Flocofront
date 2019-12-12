import React from 'react';
import {Image, Grid, Container, Form, TextArea, Icon} from 'semantic-ui-react';
import '../../Compte/UserHeader.scss';
import styles from './Card.module.css';

const {leveltwo, more, levelone} = styles;

function UserCard () {
        return (
          <>
            <Container>
              <Grid>
                  <Grid.Column textAlign='center'>
                      <Image className='userimage' src='https://drive.google.com/file/d/0B1R-ml69ed1icHpsX0ZoZHZOUklNNTZzNDd5aElPdG0xcEo0/view?usp=sharing' centered/>
                      <h1 className='username'>Superdref</h1>
                      <p className='userlevel'>Nouvel Espoir</p>
                  </Grid.Column>
              </Grid>
            </Container>
            <Form>
              <TextArea className={leveltwo} placeholder='Quelle maison habiterait ta plante?' />
              <Icon link size="large" name='pluscircle' className={more} />
              <TextArea className={levelone} placeholder='La restauration de la Flore locale compte sur toi... ' />
            </Form>
          </>
        )};

export default UserCard;