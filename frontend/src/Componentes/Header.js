import React, { Component } from "react";
import { Link } from "react-router-dom";
/*import MessengerCustomerChat from 'react-messenger-customer-chat';*/

const Header = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <div className="container">
    <Link to="/">
          <img src="" />
        </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
        <Link
              className="nav-link"
              to="/"
              aria-current="page"
              href="#"
            >
              Usuarios
            </Link>

            <Link className="nav-link" to="/empresas" aria-current="page" href="#">
              Empresa
            </Link>

         </ul>
      </div>
    </div>
  </nav>
  );
};

export default Header;
