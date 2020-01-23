import React from "react";
import { Image, Grid } from "semantic-ui-react";
import styles from "./LibraryPage.module.css";
import lis from "../../assets/lis.png";
import orchidee from "../../assets/orchidee.png"
import jasmin from "../../assets/jasmin.png"
import basImage from "../../assets/footer.png"
import Search from "./Search";
import { Link } from "react-router-dom";

const {
  images,
  imageBas,
  image,
} = styles;

function LibraryPage() {
  return (
    <Grid className={images} >
      <Search />
      <Grid>
        <Grid.Column textAlign="center">
          <Link to="./Plants">
            <Image src={lis} centered />
          </Link>
          <h1 > Lys </h1>
        </Grid.Column>
      </Grid>
      <Grid>
        <Grid.Column textAlign="center">
          <Image src={orchidee} centered />
          <h1> Orchidée </h1>
        </Grid.Column>
      </Grid>
      <Grid>
        <Grid.Column textAlign="center">
          <Image src={jasmin} centered />
          <h1> Jasmin </h1>
        </Grid.Column>
      </Grid>
      <Grid.Row className={imageBas}>
        <Image className={image} src={basImage} />
      </Grid.Row>
    </Grid>
  );
}
export default LibraryPage;