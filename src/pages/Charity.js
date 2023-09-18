import React from "react";
import { Link } from "react-router-dom";

const Charity = () => {
  return (
    <main>
      <div>
        <h1>Charity Jones:</h1>
        <h2>The Matriarch</h2>
        <h3>mtDNA L3d2</h3>
        <p>They say all roads lead back to Rome. In the Black branch of the Little Family, all stories lead back to Charity. Born in 1852, she was the daughter of emancipated slaves Tony Jones and Patsy.</p>
        <p>It is unclear how she ended up in Alabama. What we do know is that while she was there in the early 1870s, she mothered three children by white plantation overseer John Little: Lula, Laura, and John. In 1875, while pregnant with John, she left Alabama with her daughters and reunited with her parents in Bowman, SC.</p>
        <p>Charity was an incredibly resilient and hard-working woman. She worked all her life as a farm laborer. She was a mother to at least 5 children. She died in 1902, at 50 years of age. </p>
      </div>
      <div className="storytelling">
        <button className="btn-previous">
          <Link to='/'>Previous</Link>
        </button>
        <button className="btn-next">
        <Link to='/Laura'>Next</Link>
        </button>
      </div>
    </main>
  );
};

export default Charity;