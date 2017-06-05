import React from 'react';
import { Link } from 'react-router';

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="addition">Addition</Link>
        </li>
        <li>
          <Link to="substraction">Subtraction</Link>
        </li>
        <li>
          <Link to="multiplication">Multiplication</Link>
        </li>
        <li>
          <Link to="division">Division</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
