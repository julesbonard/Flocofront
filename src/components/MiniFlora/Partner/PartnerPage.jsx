import React from "react";
import { Image, Grid } from "semantic-ui-react";
import styles from "./PartnerPage.module.css";

import laSerre from "../../../assets/LaSerre.png";
import jardinissler from "../../../assets/JardinIssler.png";
import borderbottom from "../../../assets/border-bas.png";

const {
  fullpage,
  card,
  title,
  partnerimage,
  partnername,
  partnercoordonate,
  endpage
} = styles;

function PartnerPage() {
  return (
    <>
      <p className={title}>Mini-Flore</p>
      <Grid className={fullpage}>
        <Grid className={card}>
          <Grid.Row textAlign="center">
            <Image className={partnerimage} src={jardinissler} centered />
            <article>
              <h1 className={partnername}>Jardins Issler</h1>
              <p className={partnercoordonate}>
                Rue du commerce - 67550 Vendenheim
              </p>
              <p>Tel : 03 88 33 97 33 - Fax : 03 88 33 97 94</p>
              <p>www.jardins-issler.fr</p>
            </article>
          </Grid.Row>
        </Grid>
        <Grid className={card}>
          <Grid.Row textAlign="center">
            <Image className={partnerimage} src={laSerre} centered />
            <article>
              <h1 className={partnername}>La Serre</h1>
              <p className={partnercoordonate}>
                11 rue de Sélestat - 67300 Schiltigheim
              </p>
              <p>Tel : 03 88 33 06 85 - Fax : 03 88 19 15 59</p>
              <p>info@la-serre.net - www.la-serre.net</p>
            </article>
          </Grid.Row>
        </Grid>
      </Grid>
      <Grid className={endpage}>
        <Image size="large" src={borderbottom} />
      </Grid>
    </>
  );
}

export default PartnerPage;
