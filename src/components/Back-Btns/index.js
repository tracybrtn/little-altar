import React from "react";
import { Link } from 'react-router-dom';

const BackBtns = () => {
  return(
    <section className="back-btns">
      <div className="back-btns-container d-flex">
        <Link to='/little-altar'>
          <button className="home-btn">Home</button>
        </Link>
        <Link to='/little-altar/about'>
          <button className="about-btn">About</button>
        </Link>
      </div>
    </section>
  )
}

export default BackBtns;