import React from 'react';

export default function About() {
  return (
    <div className="flex-column">
      <p className="font-size-14 max-width-600">
      ANY SUGGESTIONS/FEEDBACK IT WOULD BE AWESOME IF YOU GAVE ME 
      A SHOUT AT HAIKEL.FAZZANI@GMAIL.COM OR...
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
