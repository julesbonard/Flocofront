import React from 'react';
import { Image, Grid } from 'semantic-ui-react';
import styles from './PartnerPage.module.css';

const { card, title, partnerimage, laSerre, partnername, partnercoordonate, navbar } = styles;

function PartnerPage() {
  return (
    <>
      <div className={card}>
        <Grid>
          <Grid.Column textAlign='center'>
            <p className={title}>Mini-Flore</p>
            <Image className={partnerimage} src={laSerre} centered />
            <h1 className={partnername}>La Serre</h1>
            <p className={partnercoordonate}>Coordonnées</p>
          </Grid.Column>
        </Grid>
      </div>
      <p className={navbar}>ITINERAIRE</p>

    </>
  )
};

export default PartnerPage;