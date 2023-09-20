import React from "react";
import { Link } from "react-router-dom";

const Laura = () => {
  return (
    <main className="profile-page">
      <section>
        <h1>Laura Little:</h1>
        <h2>The Blueprint</h2>
        <h3>mtDNA L3d2</h3>
        <p>
          Laura was the daughter of an emancipated Black woman and a plantation overseer. She spent the two first years of her life in Alabama before moving back to 
          <span>
            &nbsp;Orangeburg, SC&nbsp;
          </span> 
          with her pregnant mother and older sister Lula.
        </p>
        <p>
          From oral history compiled by my cousin John Spells, we know that Laura was a 
          <span>
            &nbsp;genteel church woman who deeply loved her husband&nbsp;
          </span>
          Madison Baxter, who operated a small home farm in Cow Castle, SC. 
          <span>
            &nbsp;At 27 years old I am older than Laura ever was
          </span>
          , because both her and Madison died of tuberculosis sometime around the turn of the century. They had three children: 
          <span>
            &nbsp;Shelton, Pearl, and Elease Baxter
          </span>
          .
        </p>
        <p>
          Laura, and for what is worth Madison, was of 
          <span>
            &nbsp;mixed race
          </span>
          . Although her birth circumstances and mine are completely different, as well as the way we both experience and move through the world, there is 
          <span>
            &nbsp;something really comforting&nbsp;
          </span>
           knowing there were other mixed race people in my bloodline before I came.
        </p>
      </section>
      <div className="storytelling btn-container">
        <Link to='/little-altar/charity'>
          <button className="btn-previous">
            Previous
          </button>
        </Link>
        <Link to='/little-altar/pearl'>
          <button className="btn-next">
            Next
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Laura;