import React from 'react';
import OuterLink from '../components/OuterLink';

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

        <OuterLink clx="social-link"
          href="https://github.com/haikelfazzani/animos-css"
          iconClass="fab fa-github-square"
        />

        <OuterLink clx="social-link ml-3"
          href="https://github.com/haikelfazzani/animos-css"
          iconClass="fab fa-facebook-square"
        />

        <OuterLink clx="social-link ml-3"
          href="https://github.com/haikelfazzani/animos-css"
          iconClass="fab fa-twitter-square"
        />

      </div>

    </>)
}
