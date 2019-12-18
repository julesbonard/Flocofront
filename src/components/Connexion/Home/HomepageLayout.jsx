import React from "react";
import { Image } from "semantic-ui-react";
import {Link} from 'react-router-dom';

function HomepageLayout({ children }) {
  return (
    <>
      <Image />
      <Link>
        <div>{children}</div>
      </Link>
    </>
  );
}

export default HomepageLayout;
