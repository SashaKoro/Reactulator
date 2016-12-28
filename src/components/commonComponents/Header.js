import React, {Proptypes} from 'react';
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
      <IndexLink to="/" activeClassName="active">Calculator</IndexLink>
      {" / "}
      <Link to="/frankulator" activeClassName="active">Frankulator</Link>
    </Nav>
  );
};

export default Header;



// activeClassName not necessary? Not breaking anything...
