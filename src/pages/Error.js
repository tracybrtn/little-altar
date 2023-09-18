import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <main className='page-error d-flex flex-column'>
      <section>
        <div>
          <h1>
            Error 404
          </h1>
          <p>
            Page can't be found.
          </p>
        </div>
        <Link to='/'>
          <button>Home</button>
        </Link>
      </section>
    </main>
  );
};

export default Error;