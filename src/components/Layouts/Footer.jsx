import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';

import styles from './Footer.module.scss';
import FooterButton from './FooterButtton';

const {stats_title, stats_segment, stats_paragraphe, footer, margin_grid} = styles;

export default function Footer() {
    const stats = [
        {value: 12345, label: 'votre ville'},
        {value: 12345, label: 'votre quartier'},
        {value: 12345, label: 'votre rue'}
    ]

    return (
        <footer className={footer}>
        <FooterButton />

        <Grid centered className={margin_grid}>
            <Segment centered circular size='mini' className={stats_segment} >
                <Grid centered className={stats_title}>
                    <Grid.Row className={stats_title} >
                        <h3 className={stats_title}>mini-flores établies</h3>
                    </Grid.Row>
                    <Grid.Row columns={3} className={stats_paragraphe}>
                        {stats
                        .map(stat => {
                            return (
                                <Grid.Column className={stats_paragraphe} textAlign='center'>
                                <p className={stats_paragraphe}>{stat.value}</p>
                                <p className={stats_paragraphe}>{stat.label}</p>
                            </Grid.Column>
                            )})}
                    </Grid.Row>
                </Grid>
            </Segment>
        </Grid>
        
        </footer>
    )}