import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home-page d-flex flex-column align-items-center justify-content-center">
      <section>
        <h1>The Little Altar</h1>
        <div className="quote">
          <p className="quote-text">
            "To go north, you must journey south. To reach the west, you must go east. To go forward you must go back, and to touch the light you must pass beneath the shadow."
          </p>
          <p className="quote-citation">
            - ACOK 40: DAENERYS III. GRRM
          </p>
        </div>
      </section>
      <div className="btn-container d-flex">
        <Link to='/little-altar/charity'>
          <button className="start-btn">
            Meet the ancestors
          </button>
        </Link>
      </div>
    </main>
  );
}

export default Home;