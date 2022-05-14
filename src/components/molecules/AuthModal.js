import React, { useState } from "react";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";
import { BiX } from "react-icons/bi";

//authentication handlers

const modalWrapperStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  height: "100vh",
  width: "100vw",
  backgroundColor: "rgba(0,0,0,0.6)",
};

const modalStyles = {
  maxWidth: "90%",
  position: "relative",
};

export const AuthModal = (props) => {
  /*  const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
 */

  return (
    <>
      <div
        style={modalWrapperStyles}
        className="modal-wrapper flex items-center justify-center"
      >
        <div
          style={modalStyles}
          className="modal bg-white p-12 flex flex-col gap-3 text-center"
        >
          <BiX
            onClick={props.handleCloseModal}
            style={{
              position: "absolute",
              top: "10px",
              right: "20px",
              cursor: "pointer",
            }}
            className="text-2xl text-red-500"
          />
          <h2 className="text-2xl font-bold text-gray-900">Log In</h2>
          <p>Recover and report you vehicle for free</p>
          <div>
            <form className="flex gap-2 flex-col mb-3" onSubmit={props.login}>
              <Input
                type="email"
                placeholder="Email"
                classes="border-gray-900 bg-gray-100 w-full"
                // handleChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Password"
                classes="border-gray-900 bg-gray-100 w-full"
                // handleChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                text="Login"
                classes="bg-green-300 text-gray-900"
              />
            </form>
            <p className="text-gray-600 text-sm text-center">
              Don't have an account? <a href="/">Sign up instead!</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
