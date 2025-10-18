import React from "react";
import logo from "../assets/logo-main.png";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              className="img-fluid ms-5 "
              alt="logo"
              style={{ height: "60px" }}
            />
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
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav me-auto mb-2  mb-lg-0 "
              style={{ marginLeft: "13vw" }}
            >
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "nav-link ps-lg-3 ps-md-3 ps-sm-1 pe-lg-3 pe-md-2 pe-sm-1 ms-1 me-1" +
                    (isActive ? " active" : "")
                  }
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/shop"
                  className={({ isActive }) =>
                    "nav-link ps-lg-3 ps-md-3 ps-sm-1 pe-lg-3 pe-md-2 pe-sm-1 ms-1 me-1" +
                    (isActive ? " active" : "")
                  }
                >
                  Shop
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    "nav-link ps-lg-3 ps-md-3 ps-sm-1 pe-lg-3 pe-md-2 pe-sm-1 ms-1 me-1" +
                    (isActive ? " active" : "")
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/our-story"
                  className={({ isActive }) =>
                    "nav-link ps-lg-3 ps-md-3 ps-sm-1 pe-lg-3 pe-md-2 pe-sm-1 ms-1 me-1" +
                    (isActive ? " active" : "")
                  }
                >
                  Our story
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    "nav-link ps-lg-3 ps-md-3 ps-sm-1 pe-lg-3 pe-md-2 pe-sm-1 ms-1 me-1" +
                    (isActive ? " active" : "")
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    "nav-link ps-lg-3 ps-md-3 ps-sm-1 pe-lg-3 pe-md-2 pe-sm-1 ms-1 me-1" +
                    (isActive ? " active" : "")
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
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
