import React, { useState, useEffect } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import axios from "axios";
import styles from './Footer.module.scss';
import FooterButton from './FooterButtton';

const { stats_title, stats_segment, stats_paragraphe, footer, margin_grid } = styles;

export default function Footer() {
    const [stats, setStats] = useState([
        { value: null, label: 'votre ville' },
        { value: null, label: 'votre quartier' },
        { value: null, label: 'votre rue' }
    ]);

    useEffect(() => {
        const getStats = async () => {
            let resCity = await axios.get(`https://floco-app.herokuapp.com/statscity`);
            let resFlora = await axios.get(`https://floco-app.herokuapp.com/miniFlora`);
            const street = resCity.data[0].street
            const district = resCity.data[0].district
            const city = resFlora.data[0].number
            setStats([
                { value: city, label: 'votre ville' },
                { value: district, label: 'votre quartier' },
                { value: street, label: 'votre rue' }
            ])
        };
        getStats();
    }, []);

    return (
        <footer className={footer}>
            {/* <FooterButton /> */}
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
                                    )
                                })}
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Grid>
        </footer>
    )
}