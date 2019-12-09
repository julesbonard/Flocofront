import React from 'react';
import { Segment, Sidebar } from 'semantic-ui-react'

import Burger from './Burger';

function MainLayout({children}) {
  return (
    <>
    <Sidebar.Pushable as={Segment}>
      <Burger />
      <div>{children}</div>
    </Sidebar.Pushable>
    </>
  );
}

export default MainLayout;