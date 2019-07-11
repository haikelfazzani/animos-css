import React from 'react';

export default function About() {
  return (
    <div className="flex-column">
      <p className="max-width-600">
        Hi, my name is Haikel Fazzani, i'm web developer specialized in nodejs and reactjs.
      </p>

      <div className="flex-row font-size-50">
        <a className="social-link" href="https://github.com/haikelfazzani">
          <i className="fab fa-facebook-square"></i>
        </a>

        <a className="social-link" href="https://github.com/haikelfazzani">
          <i className="fab fa-twitter-square ml-20"></i>
        </a>

        <a className="social-link" href="https://github.com/haikelfazzani">
          <i className="fab fa-github-square ml-20"></i>
        </a>

      </div>
    </div>
  )
}
