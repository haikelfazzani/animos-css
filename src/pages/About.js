import React from 'react';

export default function About() {
  return (
    <div>

      <h1 className="cover-heading">
        Animos<span className="color-rose">.css</span>
      </h1>

      <p className="mx-auto mb-3 max-w40">
        ANY SUGGESTIONS/FEEDBACK IT WOULD BE AWESOME IF YOU GAVE ME
        A SHOUT AT HAIKEL.FAZZANI@GMAIL.COM OR...
      </p>

      <div className="d-flex justify-content-center align-items-center">
        <a className="social-link" href="https://github.com/haikelfazzani">
          <i className="fab fa-facebook-square"></i>
        </a>

        <a className="social-link ml-3" href="https://github.com/haikelfazzani">
          <i className="fab fa-twitter-square"></i>
        </a>

        <a className="social-link ml-3" href="https://github.com/haikelfazzani">
          <i className="fab fa-github-square"></i>
        </a>

      </div>
    </div>
  )
}
