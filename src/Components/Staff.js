import React from "react";
import Header from "./Header";

export default function Staff() {
  return (
    <>
    <Header />
    <div className="container mt-4">
    <table class="table table-bordered border-primary">
  <thead>
    <tr>
      <th scope="col">Sr. No.</th>
      <th scope="col">Title</th>
      <th scope="col">Details</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Principal</td>
      <td>Mr. Sumit Kumar</td>
      
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Total No. of Teachers</td>
      <td>28</td>
      
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >PGT</td>
      <td>10</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td >TGT</td>
      <td>11</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td >	PRT</td>
      <td>06</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td >Teachers Section Ratio</td>
      <td>30:1</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td >Details of Special Educator</td>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td >Details of Counsellor and Wellness Teacher</td>
      <td>1</td>
    </tr>
  </tbody>
</table>   
    </div></>
  );
}
