import React from "react";
import { Form } from "semantic-ui-react";

function LoginLayout({ children }) {
  return (
    <>
      <Form>
        <div>{children}</div>
      </Form>
    </>
  );
}

export default LoginLayout;
