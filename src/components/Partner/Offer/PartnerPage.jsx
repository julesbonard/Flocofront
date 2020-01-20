import React from "react";
import { Image, Grid } from "semantic-ui-react";
import styles from "./PartnerPage.module.css";

import laSerre from "../../../assets/LaSerre.png";
import borderbottom from "../../../assets/border-bas.png";

const {
  card,
  title,
  partnerimage,
  partnername,
  partnercoordonate,
  navbar,
  endpage
} = styles;

function PartnerPage() {
  return (
    <>
      <div className={card}>
        <Grid>
          <Grid.Column textAlign="center">
            <p className={title}>Mini-Flore</p>
            <Image className={partnerimage} src={laSerre} centered />
            <article>
              <h1 className={partnername}>La Serre</h1>
              <p className={partnercoordonate}>
                11 rue de Sélestat - 67300 Schiltigheim
              </p>
              <p>Tel : 03 88 33 06 85 - Fax : 03 88 19 15 59</p>
              <p>info@la-serre.net - www.la-serre.net</p>
            </article>
          </Grid.Column>
        </Grid>
      </div>
      <p className={navbar}>ITINERAIRE</p>
      <div className={endpage}>
        <Image size="large" src={borderbottom} />
      </div>
    </>
  );
}

export default PartnerPage;
