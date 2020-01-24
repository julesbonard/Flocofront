import React from "react";
import styles from "./PotPage.module.css";
import { Image, Grid } from "semantic-ui-react";
import pot from "../../../assets/jardiniere.png";
import basImage from "../../../assets/footer.png";
import submit from "../../../assets/submit-feuille.png";

const {
  longueur,
  largeur,
  profondeur,
  potFleur,
  image,
  long,
  larg,
  prof,
  centragePage,
  button,
  imageBas
} = styles;

function PotPage() {
  return (
    <>
      <Grid className={centragePage}>
        <Grid.Row>
          <Image size="medium" className={potFleur} src={pot} />
        </Grid.Row>
        <Grid.Row>
          <p className={longueur}>LONGUEUR </p>
          <input className={long} type="text" placeholder="Longueur" />
        </Grid.Row>
        <Grid.Row>
          <p className={largeur}>LARGEUR</p>
          <input className={larg} type="text" placeholder="Largeur" />
        </Grid.Row>
        <Grid.Row>
          <p className={profondeur}>PROFONDEUR</p>
          <input className={prof} type="text" placeholder="Profondeur" />
        </Grid.Row>
        <Grid.Row>
          <Image size="tiny" className={button} src={submit} />
        </Grid.Row>
        <Grid.Row className={imageBas}>
          <Image size="large" className={image} src={basImage} />
        </Grid.Row>
      </Grid>
    </>
  );
}

export default PotPage;
