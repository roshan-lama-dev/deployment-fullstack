import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { CustomField } from "../components/customField/CustomField";
import { MainLayout } from "../components/mainLayout/MainLayout";
import { postUser } from "../helper/axiosHelper";

export const RegisterPage = () => {
  const [registerField, setRegisterField] = useState({});
  const inputField = [
    {
      name: "email",
      type: "email",
      placeholder: "Enter your email",
      label: "Email",
      required: true,
    },
    {
      name: "password",
      type: "password",
      placeholder: "Enter your password",
      label: "Password",
      required: true,
    },
    {
      name: "Username",
      type: "text",
      placeholder: "Enter your Username",
      label: "Username",
      required: true,
    },
  ];

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // console.log(registerField);

    const { status, message } = await postUser(registerField);
    toast[status](message);
  };
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    //

    setRegisterField({
      ...registerField,
      [name]: value,
    });

    // console.log(registerField);
  };
  return (
    <MainLayout>
      <Form onSubmit={handleOnSubmit}>
        {inputField.map((item, index) => (
          <CustomField key={index} {...item} onChange={handleOnChange} />
        ))}

        <div className="d-grid">
          {" "}
          <Button variant="dark" type="submit">
            Register
          </Button>
        </div>
      </Form>
    </MainLayout>
  );
};
