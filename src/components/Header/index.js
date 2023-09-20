import React from "react";
import { Link } from 'react-router-dom';

function Header() {
  return(
    <header>
      <div>
        <nav>
          <ul className='d-flex'>
            <Link to='/little-altar/about'><li>About</li></Link>
            <Link to='/little-altar'><li>Main</li></Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;