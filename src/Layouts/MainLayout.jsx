import React from 'react';

import Burger from './Burger';

function MainLayout({children}) {
  return (
    <>
      <Burger />
      <div>{children}</div>
    </>
  );
}

export default MainLayout;