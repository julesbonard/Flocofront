import React from 'react';
import { Link } from 'react-router-dom'
import { Segment, Icon, Grid } from 'semantic-ui-react';
import styles from './Nav.module.css'

const { main, container, item, cercle, text } = styles

function Account() {
    const onglets = [
        { link: "/progress", title: "mini-flore", icons: [{ name: "plus" }, { name: "eye" }] },
        { link: "#", title: "contribution", icons: [{ name: "eye" }] },
        { link: "#", title: "dashboard", icons: [{ name: "plus" }, { name: "eye" }] },
        { link: "#", title: "classement", icons: [{ name: "building" }, { name: "home" }] },
    ]
    return (
        <>
            <Segment class={main}>
                <div class={container}>
                    {onglets.map(onglet =>
                        <Link to={onglet.link} >
                            <div class={item}>
                                <h3 className={text}>
                                    {onglet.title}
                                </h3>
                                <Grid.Row columns={1}>
                                    {onglet.icons.map(icon => {
                                        return (
                                            <Segment className={cercle}>
                                                <Icon name={icon.name} />
                                            </Segment>
                                        )
                                    })
                                    }
                                </Grid.Row>
                            </div>
                        </Link>
                    )}
                </div>
            </Segment>
        </>
    )
}

export default Account;