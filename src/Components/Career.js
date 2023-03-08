import React from "react";
import Header from "./Header";

export default function Career() {
  return (
    <>
      <Header />
      <div className="container m-3">
        <form class="row g-3">
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              First Name
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="First name"
              aria-label="First name"
            />
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Last Name
            </label>
            <input
              type="text"
              class="form-control"
              placeholder="Last name"
              aria-label="Last name"
            />
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Gender:
            </label>
            <div class="form-check form-check-inline ms-2">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label class="form-check-label" for="inlineRadio1">
                Male
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label class="form-check-label" for="inlineRadio2">
                Female
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio3"
                value="option3"
              />
              <label class="form-check-label" for="inlineRadio3">
                Other
              </label>
            </div>
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">
              Email
            </label>
            <input type="email" class="form-control" id="inputEmail4" />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label">
              Address 2
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">
              City
            </label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">
              State
            </label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">
              Zip
            </label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
          <div class="col-md-6">
            <label for="formFile" class="form-label">
              Resume
            </label>
            <input class="form-control" type="file" id="formFile" />
          </div>

          <div class="col-12">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
      {/* <div className="container">
        
          <div className="row m-2">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                aria-label="First name"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                aria-label="Last name"
              />
            </div>
          </div>
          <div className="row m-2">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Father name"
                aria-label="Father name"
              />
            </div>
            <div className="col">
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="container-fluid mb-1">
            <label for="formFile" className="form-label">
              Resume
            </label>
            <input className="form-control" type="file" id="formFile" />
          </div>
          <button type="button" class="btn btn-primary">
            Primary
          </button>
        
      </div> */}
    </>
  );
}
