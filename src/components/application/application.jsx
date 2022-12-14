import React from "react";

function Application() {
  return (
    <>
      <h1>Apply for role</h1>
      <h3>Dev jobs</h3>

      <p>All fields are mandatory</p>
      <span title="close">X</span>

      <img src="" alt="a person" />
      <div data-testid="custom-element">Custom element</div>

      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Full name" value="harry" />
        </div>
        <div>
          <label htmlFor="job-location">Job Location</label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
            <option value="AU">Australia</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" />I agree to the terms and
            conditions
          </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}

export default Application;
