import React from "react";
import BackBtns from "../components/Back-Btns";

const End = () => {
  return(
    <main className="pages-error-end d-flex flex-column align-items-center">
      <section>
        <h1>Thank you!</h1>
        <p>
          That is all I have for now. 
        </p>
        <p>
          Updates coming soon!
        </p>
      </section>
      <BackBtns/>
    </main>
  )
}

export default End;