import React from "react";
import { Grid, Button } from "semantic-ui-react";
import styles from './Search.module.scss'

const { slider, button } = styles;

function Search() {
    return (
        <Grid divided >
            <Grid.Row centered>
                <p>glisser pour choisir</p>
            </Grid.Row>
            <Grid.Row centered>
                <input type="range" min="1" max="2" className={slider} id="myRange" />
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={4}>
                    <p>plante intérieur</p>
                </Grid.Column>
                <Grid.Column width={8} />
                <Grid.Column width={4}>
                    <p>plante extérieur</p>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
                <input type="range" min="1" max="3" className={slider} id="myRange" />
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={5}>
                    <p>arrosage journalier</p>
                </Grid.Column>
                <Grid.Column width={6}>
                    <p>arrosage hébdomadaire</p>
                </Grid.Column>
                <Grid.Column width={5}>
                    <p>arrosage occasionnel</p>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
                <input type="range" min="1" max="2" className={slider} id="myRange" />
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={4}>
                    <p>plante verte</p>
                </Grid.Column>
                <Grid.Column width={8} />
                <Grid.Column width={4}>
                    <p>plante florie</p>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
                <input type="range" min="1" max="4" className={slider} id="myRange" />
            </Grid.Row>
            <Grid.Row >
                <Grid.Column width={4}>
                    <p>plante de printemps</p>
                </Grid.Column>
                <Grid.Column width={4}>
                    <p>plante d'été</p>
                </Grid.Column>
                <Grid.Column width={4}>
                    <p>plante d'automne</p>
                </Grid.Column>
                <Grid.Column width={4}>
                    <p>plante d'hiver</p>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
                <input type="range" min="1" max="3" className={slider} id="myRange" />
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={5}>
                    <p>plante annuelle</p>
                </Grid.Column>
                <Grid.Column width={6}>
                    <p>plante biannuelle</p>
                </Grid.Column>
                <Grid.Column width={5}>
                    <p>plante vivace</p>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
                <Button className={button}>valider</Button>
            </Grid.Row>
        </Grid>
    );
}
export default Search;