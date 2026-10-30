import React from "react";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  const isDarkMode = props.mode !== "light";
  const isGreyMode = props.mode === "grey";

  return (
    <nav className={`navbar navbar-expand-lg ${isGreyMode ? "navbar-dark bg-secondary" : isDarkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>
      <div className="container-fluid">
       <Link className="navbar-brand" to="/">TextUtils</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            
          </form>
          <div className="form-field">
            <div className="switch">
              <input
                type="checkbox"
                id="switchMdLabel"
                role="switch"
                checked={isGreyMode}
                onChange={props.toggleMode1}
              />
            </div>
            <label htmlFor="switchMdLabel">Mode1</label>
          </div>
          <div className="form-field">
            <div className="switch switch-sm">
              <input
                type="checkbox"
                value="light"
                id="switchSizeSm"
                role="switch"
                checked={isDarkMode}
                onChange={props.toggleMode}
              />
            </div>
            <label htmlFor="switchSizeSm">Mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}