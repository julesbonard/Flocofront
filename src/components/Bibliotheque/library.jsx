
import React from "react";
import { Image, Grid } from "semantic-ui-react";
import styles from "./library.module.css";
import lis from "../../assets/lis.png";
import orchidee from "../../assets/orchidee.png"
import jasmin from "../../assets/jasmin.png"
import basImage from "../../assets/footer.png"


const {
    card,
    title,
    images,
    lisImage,
    orchideeImage,
    jasminImage,
    imageBas,
    image,
  } = styles;



function Bibliotheque() {
    return (
      <>
        <p className={title}>Mini-Flore</p>
        <Grid className={images} >
          <Grid className={card}>
            <Grid.Column textAlign="center">
              <Image className={lisImage} src={lis} centered />
                <h1 > Lys </h1>
            </Grid.Column>
          </Grid>
          <Grid className={card}>
            <Grid.Column textAlign="center">
              <Image className={orchideeImage} src={orchidee} centered />
                <h1> Orchidée </h1>
            </Grid.Column>
          </Grid>
          <Grid className={card}>
            <Grid.Column textAlign="center">
              <Image className={jasminImage} src={jasmin} centered />
                <h1> Jasmin </h1>
            </Grid.Column>
          </Grid>
          <Grid.Row className={imageBas}>
            <Image className={image} src={basImage}/>
              </Grid.Row>
        </Grid>
      </>
    );
  }
  export default Bibliotheque;