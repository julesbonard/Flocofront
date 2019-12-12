import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'

export default function Burger() {
    const stats = [
        {value: 12345, label: 'votre ville'},
        {value: 12345, label: 'votre quartier'},
        {value: 12345, label: 'votre rue'}
    ]

    const square = { width: 250, height: 175 }

    return (
        <Segment circular compact size='mini' className='stats' >
            <Grid centered>
                <Grid.Row className='stats_title' >
                    <h3>mini-flores établies</h3>
                </Grid.Row>
                <Grid.Row columns={3}>
                    {stats
                    .map(stat => {
                        return (
                        <Grid.Column  textAlign='center'>
                            <p>{stat.value}</p>
                            <p>{stat.label}</p>
                        </Grid.Column>
                        )})}
                </Grid.Row>
            </Grid>
        </Segment>
    )}