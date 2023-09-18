import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="homepage d-flex flex-column">
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-column" id="landing-div">
          <h2>The Little Altar</h2>
          <div className="quote">
            <p>
              "To go north, you must journey south. To reach the west, you must go east. To go forward you must go back, and to touch the light you must pass beneath the shadow."
            </p>
            <p className="citation">- ACOK 40: DAENERYS III. GRRM</p>
          </div>
          <button className="home-btn">
            <Link to='/Charity'>Meet the ancestors</Link>
          </button>
        </div>
      </div>
    </main>
  );
}

export default Home;