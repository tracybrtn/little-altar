import React from "react";
import { Link } from "react-router-dom";

const Pearl = () => {
  return (
    <main>
      <div>
        <h1>Pearl Baxter:</h1>
        <h2>The Courageous</h2>
        <h3>mtDNA L3d2</h3>
        <p>Pearl’s parents died when she was around 6-years-old so she was raised by her grandaunt Maggie, sister of Charity, and granduncle Peter Smith. In 1915 Pearl married George Keitt of Bowman, SC and they moved to Savannah, GA where they had 5 children: Japhleen, Samella, Isaiah, Hosiah, and Ada Beatrice. Only Samella and Ada would survive their infancy.</p>
        <p>In 1925 Pearl’s family moved up north and settled in Downingtown, Chester County, PA, where their children Herman, James Nathaniel, Charlesann, Raymon, and Elease were born. Both Pearl and George died in their new found community.</p>
        <p>Pearl’s family alongside other 6 million Black Americans was part of the Great Migration. Her family moving would mean their children would have more opportunities than working the land. Even though she is a lot closer in timeline than her predecessors Pearl took with her a mystery that I am now trying to unravel.</p>
      </div>
      <div className="storytelling">
        <button className="btn-previous">
          <Link to='/Laura'>Previous</Link>
        </button>
        <button className="btn-next">
          <Link to='/'>Next</Link>
        </button>
      </div>
    </main>
  );
};

export default Pearl;