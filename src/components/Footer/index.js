//import React
import React from "react"

//import logo
import GithubLogo from "../../assets/images/github-logo.png";

function Footer() {
  return(
    <footer>
      <div class="d-flex justify-content-center">
        <a
          href="https://github.com/tracybrtn"
          target="_blank"
          rel="noreferrer">
          <img
            src={GithubLogo}
            alt="Github"
            className="logo">
          </img>
        </a>
      </div>
      <p>&copy; 2023</p>
    </footer>
  )
}

//export footer
export default Footer;