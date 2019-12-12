import React from "react";
import { Form } from "semantic-ui-react";

function RegisterLayout({ children }) {
  return (
    <>
      <Form>
        <div>{children}</div>
      </Form>
    </>
  );
}

export default RegisterLayout;
