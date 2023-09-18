import React from "react";
import { Link } from 'react-router-dom';

function StoryTelling() {
  return (
    <div className="storytelling">
      <Link to=''>
        <button className="btn-previous">
          Previous
        </button>
      </Link>
      <Link to=''>
        <button className="btn-next">
          Next
        </button>
      </Link>
    </div>
  )
};

export default StoryTelling
