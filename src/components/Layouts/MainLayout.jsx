import React from 'react';
import {Sidebar} from 'semantic-ui-react'

import Burger from './Burger';
import Footer from './Footer';

function MainLayout({children}) {
  return (
    <>
    <Burger />
    <Sidebar.Pushable>
      <div>{children}</div>
    </Sidebar.Pushable>
    <Footer />
    </>
  );
}

export default MainLayout;