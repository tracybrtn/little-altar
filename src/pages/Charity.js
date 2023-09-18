import React from "react";
import { Link } from "react-router-dom";

const Charity = () => {
  return (
    <main className="profile-page">
      <section>
        <h1>Charity Jones:</h1>
        <h2>The Matriarch</h2>
        <h3>mtDNA L3d2</h3>
        <p>
          They say all roads lead back to Rome. In the Black branch of the Little Family, 
          <span>
            &nbsp;all stories lead back to Charity
          </span>
          . Born in 1852, she was the daughter of emancipated slaves Tony Jones and Patsy.</p>
        <p>
          It is unclear how she ended up in Alabama. What we do know is that while she was there in the early 1870s, she mothered three children by white plantation overseer John Little: 
          <span>
            &nbsp;Lula, Laura, and John
          </span>
          . In 1875, while pregnant with John, she left Alabama with her daughters and reunited with her parents in 
          <span>
            &nbsp;Bowman, SC
          </span>
          .</p>
        <p>
          Charity was an 
          <span>
            &nbsp;incredibly resilient&nbsp;
          </span>
          and hard-working woman. She worked all her life as a farm laborer. She was a mother to at least 5 children. She died in 1902, at 50 years of age.
        </p>
      </section>
      <div className="storytelling">
        <Link to='/'>
          <button className="btn-previous">Previous</button>
        </Link>
        <Link to='/Laura'>
          <button className="btn-next">
            Next
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Charity;