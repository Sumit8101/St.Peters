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
                Log In
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
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </a>
                <ul class="dropdown-menu drop">
                  <li>
                    <Link class="dropdown-item" to="./About">
                      About School
                    </Link>
                  </li>
                  <li>
                    <a class="dropdown-item" href="./Staff">
                      Staff
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="https://www.cbse.gov.in/cbsenew/cbse.html" target="_blank">
                      CBSE Information
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="./Mission_vision">
                      Mission & Vision
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Admission
                </a>
                <ul class="dropdown-menu drop">
                  <li>
                    <a class="dropdown-item" href="./Mission_vision">
                      Admission Information
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="./Mission_vision">
                      Fees Structur
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Gallary
                </a>
                <ul class="dropdown-menu drop">
                  <li>
                    <a class="dropdown-item" href="./Mission_vision">
                      Photo Gallary
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="./Mission_vision">
                      Video Gallary
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Contact
                </a>
                <ul class="dropdown-menu drop">
                  <li>
                    <a class="dropdown-item" href="#">
                      Phone Directory
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="./Career">
                      Career
                    </a>
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
