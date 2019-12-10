import React from 'react';
import { Sidebar } from 'semantic-ui-react'

import Burger from './Burger';

function MainLayout({children}) {
  return (
    <>
    <Burger />
    <Sidebar.Pushable>
      <div>{children}</div>
    </Sidebar.Pushable>
    </>
  );
}

export default MainLayout;