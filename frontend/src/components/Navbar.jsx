import React from "react";
import { Link } from "react-router-dom";
import { BiHomeAlt2 } from "react-icons/bi";

export default function Navbar() {
  return (
    <>
      <nav className="navbar bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <button type="button" className="btn btn-secondary">
              <span className="icon-gap">
                <BiHomeAlt2 />
              </span>
              Home
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
}
