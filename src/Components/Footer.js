import React, { useEffect } from "react";
import "./footer.css";

import { useState } from "react";

export default function Footer() {
  return (
    <>
      <div className=" container-fluid">
        <div className="bottomfooter bnner-img">
          <div className="row m-2 md-6">
            <div className="col-4">
              <h3>Quik Links</h3>
              <li>
                <i className="fa fa-angle-right"></i>
                <a href="index.html">Home</a>
              </li>
              <li>
                <i className="fa fa-angle-right"></i>
                <a href="#">Photo Gallery</a>
              </li>
              <li>
                <i className="fa fa-angle-right"></i>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <i className="fa fa-angle-right"></i>
                <a href="#">Career with Us</a>
              </li>
            </div>
            <div className="col-4">
              <h3>CONTACT US</h3>
              <b>Address :</b> NIELIT Delhi Centre, 2nd Floor, Parsvnath Metro
              Mall Near Inderlok Metro Station Inderlok, Delhi Pin Code: 110052{" "}
              <br />
              <b>Email :</b>sumitkumar8101@gmail.com
              <p>
                <b>Phone :</b> 8896420933
              </p>
            </div>
            <div className="col-4">
              <h3>Our Location</h3>
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.5494819365827!2d77.16818031501!3d28.673205282401753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d025d74eaab0f%3A0x7ab8b57ddb4613aa!2sNIELIT%20Delhi%20Centre!5e0!3m2!1sen!2sin!4v1677831080685!5m2!1sen!2sin"
                  width="100%"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row footer">
          <div className="col">
            <span>Copyright © All Rights Reserved 2023</span>
          </div>
        </div>
      </div>
    </>
  );
}
