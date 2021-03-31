import React from 'react';
import Navbar from '../components/Navbar';

function BadgeForm() {
  return (
    <div>
      <Navbar />
      <form>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Jhon Doe"
            id="fullName"
          />
        </div>
        <div className="form-group">
          <label htmlFor="twitter">Twitter</label>
          <input
            type="email"
            className="form-control"
            placeholder="@doejoe"
            id="twitter"
          />
        </div>
        <div className="form-group">
          <label htmlFor="profesionIn">Profesion</label>
          <input
            type="text"
            className="form-control"
            placeholder="Chif Officer Manager"
            id="profesionIn"
          />
        </div>
        <button type="submit" className="btn btn-success btn-block">
          Send
        </button>
      </form>
    </div>
  );
}

export default BadgeForm;
