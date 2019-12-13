import React from 'react';
import { Grid } from 'semantic-ui-react'
import Burger from '../../Layouts/Burger.jsx'

function CardLayout({children}) {
  return (
    <>
    <Burger/>
    <Grid>
        <div>{children}</div>
    </Grid>
    </>
  );
}

export default CardLayout;