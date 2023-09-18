import React from 'react';
import BackBtns from "../components/Back-Btns";

const Error = () => {
  return (
    <main className='pages-error-end d-flex flex-column'>
      <section>
        <div>
          <h1>
            Error 404
          </h1>
          <p>
            Page can't be found.
          </p>
        </div>
      </section>
      <BackBtns/>
    </main>
  );
};

export default Error;