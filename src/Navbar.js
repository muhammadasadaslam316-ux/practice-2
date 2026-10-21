import React from "react";

export default function Navbar(props) {
  const isDarkMode = props.isDarkMode === "dark";

  return (
    <nav className={`navbar navbar-expand-lg ${isDarkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">TextUtils</a>
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
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-light" type="submit">Search</button>
          </form>
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