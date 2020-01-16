import React from 'react';
import { Grid, Card, Statistic } from 'semantic-ui-react';
import styles from './Treasury.module.css'
import { connect } from "react-redux";

const { treasury_card, cercle, text, points_display } = styles

function Treasury({ level, points, badge }) {
    const value = { points: points, niveau: level, badges: badge }
    return (
        <>
            <Card centered className={treasury_card}>
                <Card.Content  >
                    <h2 className={text} >trésorie</h2>
                </Card.Content>
                <Card.Content>
                    <Grid >
                        <Grid.Row columns={2}>
                            <Grid.Column>
                                <ul className={text}>
                                    <li>points: {value.points}</li>
                                    <li>niveau: {value.niveau}</li>
                                    <li>badge: {value.badges}</li>
                                </ul>
                            </Grid.Column>
                            <Grid.Column>
                                <Statistic className={points_display} size='mini'>
                                    <Statistic.Value className={text}>{value.points}</Statistic.Value>
                                    <Statistic.Label>points</Statistic.Label>
                                </Statistic>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Card.Content>
                <Card.Content >
                    <h4 className={cercle}>
                        graines (plantées) à échangés
                    </h4>
                </Card.Content>
            </Card>
        </>
    )
}

const mapStateToProps = state => {
    return {
        level: state.levelReducer.level.level,
        points: state.levelReducer.level.points,
        badge: state.levelReducer.level.badge
    };
};

export default connect(mapStateToProps)(Treasury);