import React from "react";
import { Image, Grid } from "semantic-ui-react";
import styles from "./Lys.module.css";
import lis from "../../../assets/lis.png";
import progressSun from "../../../assets/fond-vert-sun.png";
import progressWater from "../../../assets/fond-vert-water.png";
import progressFlower from "../../../assets/fond-vert-flower.png";
import progressButterfly from "../../../assets/fond-vert-butterfly.png";
import basImage from "../../../assets/footer.png";

const {
    card,
    title,
    images,
    lisImage,
    orchideeImage,
    imageBas,
    image
} = styles;

function Bibliotheque() {
    return (
        <>
            <p className={title}>Mini-Flore</p>
            <Grid className={images}>
                <Grid className={card}>
                    <Grid.Column textAlign="center">
                        <Image className={lisImage} src={lis} centered />
                        <h1> Lys </h1>
                    </Grid.Column>
                </Grid>
                <Grid className={card}>
                    <Grid.Column textAlign="center">
                        <Image className={orchideeImage} src={progressSun} centered />
                        <h3> Exposition </h3>
                    </Grid.Column>
                </Grid>
                <Grid className={card}>
                    <Grid.Column textAlign="center">
                        <Image className={orchideeImage} src={progressWater} centered />
                        <h3> Arrosage </h3>
                    </Grid.Column>
                </Grid>
                <Grid className={card}>
                    <Grid.Column textAlign="center">
                        <Image className={orchideeImage} src={progressFlower} centered />
                        <h3> Floraison </h3>
                    </Grid.Column>
                </Grid>
                <Grid className={card}>
                    <Grid.Column textAlign="center">
                        <Image className={orchideeImage} src={progressButterfly} centered />
                        <h3> Saison </h3>
                    </Grid.Column>
                </Grid>
                <Grid.Row className={imageBas}>
                    <Image className={image} src={basImage} />
                </Grid.Row>
            </Grid>
        </>
    );
}
export default Bibliotheque;