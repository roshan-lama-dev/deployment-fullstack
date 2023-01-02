import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { MainLayout } from "../components/mainLayout/MainLayout";
import { Button, Col, Form, Row } from "react-bootstrap";
import { CustomField } from "../components/customField/CustomField";
import { Link } from "react-router-dom";
import { LoginLayout } from "../components/mainLayout/LoginLayout";
import { postUser } from "../helper/axiosHelper";
import { toast } from "react-toastify";
export const LoginPage = () => {
  const [userloginDetails, setLoginDetails] = useState({});
  const loginDetails = [
    {
      name: "name",
      placeholder: "Enter your UserName",
      label: "Username",
      type: "text",
      required: true,
    },
    {
      name: "email",
      placeholder: "Enter your email",
      label: "Email",
      type: "email",
      required: true,
    },
    {
      name: "password",
      placeholder: "Enter your UserName",
      label: "Password",
      type: "password",
      required: true,
    },
  ];

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    console.log(userloginDetails);

    const { status, message } = await postUser(userloginDetails);
    toast[status](message);
    console.log(status, message);
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setLoginDetails({
      ...userloginDetails,
      [name]: value,
    });
  };
  return (
    <div>
      <LoginLayout className="bg-success">
        <Container className="bg-danger d-flex mt-5 justify-content-center align-items-center">
          <Row className=" bg-dark rounded mt-5 shadow-lg ">
            <div className="welcome mt-2 text-center text-white">
              <h4>WELCOME</h4>
            </div>
            <Col className="text-white inputField m-1 p-3">
              <Form onSubmit={handleOnSubmit}>
                {loginDetails.map((item, index) => (
                  <CustomField
                    key={index}
                    {...item}
                    onChange={handleOnChange}
                  />
                ))}

                <div className="d-grid">
                  <Button type="submit" className="mt-3">
                    Login
                  </Button>
                </div>

                <Row className="mt-2">
                  <Col className="text-end">
                    {" "}
                    <Link to="/register" className="nav-link forgot">
                      {" "}
                      <p className="">Forgotten Password?</p>
                    </Link>
                  </Col>
                </Row>

                <div className="createNew">
                  <div className="d-grid">
                    <Button variant="success m-3">
                      <Link className="nav-link" to="/register">
                        {" "}
                        Create New Account
                      </Link>
                    </Button>
                  </div>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </LoginLayout>
    </div>
  );
};
