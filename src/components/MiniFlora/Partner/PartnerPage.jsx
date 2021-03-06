import React from "react";
import { Image, Grid, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

import styles from "./PartnerPage.module.css";

import laSerre from "../../../assets/LaSerre.png";
import jardinissler from "../../../assets/JardinIssler.png";
import borderbottom from "../../../assets/border-bas.png";

const {
  fullpage,
  card,
  endpage
} = styles;

function PartnerPage() {
  return (
    <>
      <div style={{ textAlign: "center" }} >
        <Link to="/progress">
          <Button primary>
            Mini-flore
            </Button>
        </Link>
      </div>
      <Grid className={fullpage}>
        <Grid className={card}>
          <Grid.Row textAlign="center">
            <Image src={jardinissler} centered />
            <article>
              <h1>Jardins Issler</h1>
              <p >
                Rue du commerce - 67550 Vendenheim
              </p>
              <p>Tel : 03 88 33 97 33 - Fax : 03 88 33 97 94</p>
              <p>www.jardins-issler.fr</p>
            </article>
          </Grid.Row>
        </Grid>
        <Grid className={card}>
          <Grid.Row textAlign="center">
            <Image src={laSerre} centered />
            <article>
              <h1>La Serre</h1>
              <p >
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
