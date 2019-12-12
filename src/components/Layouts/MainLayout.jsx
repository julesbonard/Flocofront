import React from 'react';
import { Sidebar, Segment } from 'semantic-ui-react'

import Burger from './Burger';

function MainLayout({children}) {
  return (
    <>
    <Burger />
    <Sidebar.Pushable as={Segment}>
      <div>{children}</div>
    </Sidebar.Pushable>
    </>
  );
}

export default MainLayout;