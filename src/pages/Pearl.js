import React from "react";
import { Link } from "react-router-dom";

const Pearl = () => {
  return (
    <main className="profile-page">
      <section>
        <h1>Pearl Baxter:</h1>
        <h2>The Courageous</h2>
        <h3>mtDNA L3d2</h3>
        <p>Pearl’s parents died when she was around 6-years-old so she was 
          <span>
            &nbsp;raised by her grandaunt Maggie
          </span>
          , sister of Charity, and granduncle Peter Smith. In 1915 Pearl married George Keitt of Bowman, SC and they moved to 
          <span>
            &nbsp;Savannah, GA&nbsp;
          </span>
          where they had 5 children: Japhleen, Samella, Isaiah, Hosiah, and Ada Beatrice.
          <span>
            &nbsp;Only Samella and Ada would survive their infancy
          </span>
          .
        </p>
        <p>
          In 1925 Pearl and her family moved up north and settled in 
          <span>
            &nbsp;Chester County, PA
          </span>
        , where their children Herman, James Nathaniel, Charlesann, Raymon, and Elease were born. Both Pearl and George died in their
          <span>
            &nbsp;new found community
          </span>
        .</p>
        <p>
          Pearl’s family alongside other 6 million Black Americans was 
          <span>
            &nbsp;part of the Great Migration
          </span>
          . Her family moving would mean their children would have more opportunities than working the land. Even though she is a lot closer in timeline than her predecessors Pearl took with her a 
          <span>
            &nbsp;mystery that I am now trying to unravel
          </span>
        .</p>
      </section>
      <div className="storytelling btn-container">
        <Link to='/little-altar/laura'>
          <button className="btn-previous">
            Previous
          </button>
        </Link>
        <Link to='/little-altar/end'>
          <button className="btn-next">
            Next
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Pearl;