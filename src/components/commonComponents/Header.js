import React, {Proptypes} from 'react';
import {Link, IndexLink} from 'react-router';

const HeaderStyle = {
  color: "gray",
  fontSize: "24px",
  paddingTop: "30px"
};

const Header = () => {
  return (
    <nav style={HeaderStyle} >
      <IndexLink to="/" activeClassName="active">Calculator</IndexLink>
      {" / "}
      <Link to="/frankulator" activeClassName="active">Frankulator</Link>
    </nav>
  );
};

export default Header;
