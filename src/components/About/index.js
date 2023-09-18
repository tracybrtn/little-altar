import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main>
      <div className="about-page">
        <section className="about-project">
          <h1>About this Project</h1>
          <p>
            <span>Little Altar</span> combines spirituality, programming, journalism, and art. Most of the information came from the genealogy research that my cousin John Douglas Spells put together years before I was born. The rest comes from the research I have done with my dad.
          </p>
          <p>All digital art was created on 
            <a 
              href="https://www.gimp.org/" 
              target="_blank" 
              rel="noreferrer">&nbsp;GIMP&nbsp;
            </a>
            by me.
          </p>
          <p>
            It is called <span>Little Altar</span> because of John Little being the patriarch of the family. But it is dedicated to the matriarchs. So thanks for the last name, John!
          </p>
        </section>
        <section className="about-me">
          <h1>About Me</h1>
          <p>
            Hi! I am 
            <span> 
              &nbsp;Tracy Burton Bravo&nbsp;
            </span>
            and I am a 
            <span>
              &nbsp;MERN stack developer&nbsp;
            </span>
            . I completed a full-stack coding certification at Washington University of St. Louis, MO, in December 2022. Before that, I 
            <span> 
              &nbsp;majored in journalism&nbsp;
            </span>
            at the Universidad Complutense de Madrid, 
            <span>
              &nbsp;minored in international relations&nbsp;
            </span>
            at Collegium Civitas in Warsaw, Poland, with an Erasmus scholarship, and 
            <span>
              &nbsp;completed a MA in Global Affairs&nbsp;
            </span>
            at the University of Prince Edward Island in Canada.
          </p>
          <p>
            I completed my coding certification after three years of civilian community service with 
            <span>
              &nbsp;AmeriCorps
            </span>
            . For my last project with AmeriCorps I had the honor of leading the ecological restoration of 
            <a
              href="https://www.greenwoodstl.org/"
              target="_blank"
              rel="noreferrer">
              &nbsp;Historic Greenwood Cemetery&nbsp;
            </a>
            in St. Louis, MO. That sparked something within me, so as soon as I had the opportunity I joined my dad on his genealogy research.
          </p>
          <p>
            If you would like to check out my other projects you can take a look at my 
              <a 
                href="https://tracybrtn.github.io/react-portfolio/" 
                target="_blank" 
                rel="noreferrer">&nbsp;portfolio
              </a>
            .
          </p>
          <p>You can also reach out to me on
            <a 
              href="https://www.linkedin.com/in/tracybrtn/" 
              target="_blank" 
              rel="noreferrer">
              &nbsp;LinkedIn
            </a>,
            <a 
              href="https://github.com/tracybrtn" 
              target="_blank" 
              rel="noreferrer">
              &nbsp;Github
            </a>
            , or by 
            <a 
              href="mailto:tracynburton@gmail.com"> 
              &nbsp;sending me an email
            </a>
          .</p>
        </section>
        <section className="about-closing">
          <p>With Love,</p>
          <p>Tracy</p>
        </section>
        <section className="about-section-btn d-flex justify-content-center back-btns">
          <Link to='/'>
            <button>Home</button>
          </Link>
        </section>
      </div>
    </main>
  )
}

export default About;