import React from "react";
import { Link } from 'react-router-dom';

function StoryTelling() {
  return (
    <div className="storytelling">
      <button className="btn-previous">
        <Link to=''>Previous</Link>
      </button>
      <button className="btn-next">
      <Link to=''>Next</Link>
      </button>
    </div>
  )
};

export default StoryTelling
