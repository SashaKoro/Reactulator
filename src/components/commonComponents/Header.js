import React from 'react';
import {Link, IndexLink} from 'react-router';
import styled from 'styled-components';

const Nav = styled.nav`
  color: gray;
  font-size: 20px;
  padding-top: 30px;
  text-align: center;
  font-family: Arial;
`;

const Header = () => {
  return (
    <Nav>
      <IndexLink to="/">Calculator</IndexLink>
      {" / "}
      <Link to="/frankulator">Frankulator</Link>
    </Nav>
  );
};

export default Header;

