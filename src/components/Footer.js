import React from 'react';
import '../css/footer.css';

export default function Footer() {
  return (
    <div className="mt-20 mb-20">
      <div className="nav-link">
        <a href="#">About</a>
        <a href="#" className="ml-20">Contact</a>
      </div>
      <p className="text-muted font-size-14">Made with ❤ Haikel Fazzani</p>
    </div>
  )
}
