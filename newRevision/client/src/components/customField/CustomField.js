import React from "react";
import { Form } from "react-bootstrap";

export const CustomField = ({ label, ...rest }) => {
  return (
    <div>
      <Form.Group>
        <Form.Label>{label}</Form.Label>
        <Form.Control {...rest} />
      </Form.Group>
    </div>
  );
};
