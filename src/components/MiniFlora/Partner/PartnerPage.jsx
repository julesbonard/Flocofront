import React from 'react';
import {Image, Grid} from 'semantic-ui-react';
import styles from './PartnerPage.module.css';

import illustration from '../../../assets/bas_de_page_gche.png'
import illustration2 from '../../../assets/bas_de_page_drt.png'

const {card, title, partnerimage, laSerre, partnername, partnercoordonate, navbar, endpage, flore, flore2} = styles;

function PartnerPage () {
        return (
          <>
            <div className={card}>
              <Grid>
                  <Grid.Column textAlign='center'>
                      <p className={title}>Mini-Flore</p>
                      <Image className={partnerimage} src={laSerre} centered/>
                      <h1 className={partnername}>La Serre</h1>
                      <p className={partnercoordonate}>Coordonnées</p>
                  </Grid.Column>
              </Grid>
            </div>
              <p className={navbar}>ITINERAIRE</p>
              <div className={endpage}>
                <Image size="small" className={flore} src={illustration} />
                <Image size="small" className={flore2} src={illustration2} />
              </div>
          </>
        )};

export default PartnerPage;