import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

function BadgeForm() {
  return (
    <div>
      <Navbar />
      <Container>
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
      </Container>
    </div>
  );
}

export default BadgeForm;

const Container = styled.main`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 150px;
`;
