import React from 'react';

export default function About() {
  return (
    <>
      <h3 className="jumbotron-heading">
        Animos<span className="color-rose">.css</span>
      </h3>

      <p>All your issues, pull requests and stars are welcome.</p>

      <p>
        ANY SUGGESTIONS/FEEDBACK IT WOULD BE AWESOME IF YOU GAVE ME A SHOUT
          AT HAIKEL.FAZZANI@GMAIL.COM OR...
      </p>

      <div className="d-flex justify-content-center align-items-center">

        <a className="social-link" href="https://github.com/haikelfazzani/animos-css">
          <i className="fab fa-github-square"></i>
        </a>

        <a className="social-link ml-3" href="https://github.com/haikelfazzani">
          <i className="fab fa-facebook-square"></i>
        </a>

        <a className="social-link ml-3" href="https://github.com/haikelfazzani">
          <i className="fab fa-twitter-square"></i>
        </a>

      </div>

    </>)
}
