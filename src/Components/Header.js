import React, { useState, useEffect } from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
export default function Header() {
  
  return (
    <>
      <div className="container-fluid ">
        <div className="row d-flex  align-items-center mb-1 banner-img">
          <div className="col-4 ">
          <img src="img/logo_2.png" alt="..." height="110px"  />
          </div>
          <div className="col-6 ">
            <img src="img/stpeter.png" alt="..." className="img-fluid"/>
          </div>
          <div className="col-2 ">
            <Link to="/Login">
              <button type="button" class="btn btn-light">
                LogIn
              </button>
            </Link>
          </div>
        </div>
      </div>
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </Link>
                <ul class="dropdown-menu drop">
                  <li>
                    <Link class="dropdown-item" to="/About">
                      About School
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/Staff">
                      Staff
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="https://www.cbse.gov.in/cbsenew/cbse.html" target="_blank">
                      CBSE Information
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/Mission_vision">
                      Mission & Vision
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Admission
                </Link>
                <ul class="dropdown-menu drop">
                  <li>
                    <Link class="dropdown-item" to="/Mission_vision">
                      Admission Information
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/Mission_vision">
                      Fees Structur
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Gallary
                </Link>
                <ul class="dropdown-menu drop">
                  <li>
                    <Link class="dropdown-item" to="/Mission_vision">
                      Photo Gallary
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/Mission_vision">
                      Video Gallary
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Contact
                </Link>
                <ul class="dropdown-menu drop">
                  <li>
                    <Link class="dropdown-item" to="#">
                      Phone Directory
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/Career">
                      Career
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

     
    </>
  );
}
