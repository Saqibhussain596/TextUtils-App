import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <div>
      <nav className={"navbar navbar-expand-lg p-4 bg-dark navbar-dark"}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.aboutText}
                </Link>
              </li>
            </ul>
            <div className="themes">
              <span
                className="white"
                id="white-theme-btn"
                onClick={props.changeTheme}
              ></span>
              <span
                className="dark"
                id="dark-theme-btn"
                onClick={props.changeTheme}
              ></span>
              <span
                className="blue"
                id="blue-theme-btn"
                onClick={props.changeTheme}
              ></span>
              <span
                className="yellow"
                id="yellow-theme-btn"
                onClick={props.changeTheme}
              ></span>
              <span
                className="aqua"
                id="aqua-theme-btn"
                onClick={props.changeTheme}
              ></span>
            </div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: propTypes.string.isRequired,
  aboutText: propTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Title Here",
  aboutText: "About Here",
};
