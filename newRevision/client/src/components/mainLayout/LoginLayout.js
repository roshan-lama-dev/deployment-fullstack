import React from "react";
import { Footer } from "./Footer";

export const LoginLayout = ({ children }) => {
  return (
    <div className="loginmain bg-danger">
      <div className="main bg-danger">{children}</div>

      <Footer />
    </div>
  );
};
