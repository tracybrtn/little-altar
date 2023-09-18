import React from "react";
import { Link } from 'react-router-dom';

function Header() {
  return(
    <header>
      <div>
        <nav>
          <ul className='d-flex'>
            <Link to='/About'><li>About</li></Link>
            <Link to='/'><li>Main</li></Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;