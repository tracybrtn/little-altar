import React from "react";
import { Link } from 'react-router-dom';

const BackBtns = () => {
  return(
    <section className="back-btns d-flex">
      <Link to='/'>
        <button className="home-btn">Home</button>
      </Link>
      <Link to='/About'>
        <button className="about-btn">About</button>
      </Link>
    </section>
  )
}

export default BackBtns;