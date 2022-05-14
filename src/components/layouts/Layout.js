import React, { useState } from "react";
import Nav from "../Nav";
import { AuthModal } from "../molecules/AuthModal";

function Layout(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  // Handled by login button in
  const login = (e) => {
    e.preventDefault();
    setLoggedIn(true);
    setModalOpen(false);
  };

  const logout = (e) => {
    e.preventDefault();
    setLoggedIn(false);
  };

  return (
    <>
      <Nav
        isLoggedIn={isLoggedIn}
        openModal={() => setModalOpen(true)}
        handleLogout={logout}
      />
      <main>{props.children}</main>
      {isModalOpen ? (
        <AuthModal login={login} handleCloseModal={() => setModalOpen(false)} />
      ) : null}
    </>
  );
}

export default Layout;
