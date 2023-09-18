import React from "react";
import { Link } from "react-router-dom";

const Laura = () => {
  return (
    <main>
      <div>
        <h1>Laura Little:</h1>
        <h2>The Blueprint</h2>
        <h3>mtDNA L3d2</h3>
        <p>Laura was the daughter of an emancipated Black woman and a plantation overseer. She spent the two first years of her life in Alabama before moving back to Orangeburg, SC with her pregnant mother and older sister Lula. </p>
        <p>From oral history compiled by my cousin John Spells, we know that Laura was a genteel church woman who deeply loved her husband Madison Baxter, who operated a small home farm in Cow Castle, SC. At 27 years old I am older than Laura ever was, because both her and Madison died of tuberculosis sometime around the turn of the century. They had three children: Shelton, Pearl, and Elease Baxter.</p>
        <p>Laura, and for what is worth Madison, was of mixed race. Although her birth circumstances and mine are completely different, as well as the way we both experience and move through the world, there is something really comforting knowing there were other mixed race people in my bloodline before I came. </p>
      </div>
      <div className="storytelling">
        <button className="btn-previous">
          <Link to='/Charity'>Previous</Link>
        </button>
        <button className="btn-next">
          <Link to='/Pearl'>Next</Link>
        </button>
      </div>
    </main>
  );
};

export default Laura;