import React from "react";
import Header from "./Header";
import  "./About.css";

export default function About() {
  return (
    <>
      <Header />
      <div className="container text-dark" id="about">
        <h1>About St Peter Academy</h1> <br />
        <span>
          St Peters Academy is an educational institution run by Manav Hitkari
          Sansthan under CBSE norms. <br />
          <br />
          The need of a competent school in the vicinity of Govindpur was being
          felt for a long time. Keeping this need in mind our manager, Mr. Abdul
          Rafiq thought of giving birth to a non- profitable educational
          institute to serve the society and to avoid the inconvenience of going
          to far flung institutes of repute. <br />
          <br />
          Ultimately, foundation stone of St Peters Academy was laid on 8th
          March 1997. Since then continuous efforts are being made for the
          betterment of the school and upliftment of the society.
        </span>
        <br />
        <br />
        <br />
        <h1>Future at St. Peters Academy</h1> <br />
        <br />
        <span>Team St. Peters Academy has been constantly in process of funding and applying new and dynamic ideas towards
            moulding of students ‘capabilities to face the challenges of life. <br/> <br/>

            Sports and music are another high agenda activity of this institution. <br/><br/>

            Indoor games like Chess, Carom, Table Tennis, Badminton and outdoor games like Volleyball, Basketball,
            Kabaddi & Kho-Kho are being undertaken and students are being trained under dynamic and qualified
            instructors to shine at the highest level. <br/> <br/>

            Besides this, students are getting nurtured to become law-abiding citizens of their motherland.</span>
        <br/><br/><br/>
        <h1>Outstanding Features of St. Peters Academy</h1> <br/>
        <ul >
            <li>Clean, hygienic and lush green environment.</li>
            <li>Well stocked library.</li>
            <li>Well equipped science labs.</li>
            <li>Proper ground for sports and extra curricular activities Yoga classes by expert and competent teachers.
            </li>
            <li>Safe and clean drinking water with R.O. facility.</li>
            <li>Uninterrupted power supply with generator back-up.</li>
            <li>Staff of trained and qualified teachers.</li>

        </ul>
      </div>
    </>
  );
}
