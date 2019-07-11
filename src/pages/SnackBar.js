import React, { useState } from 'react';
import '../css/snackbar.css';

export default function SnackBar() {

  const [isHidden, setisHidden] = useState("snackbar");

  function myFunction() {

    setisHidden("snackbar show")
    setTimeout(() => { setisHidden("snackbar") }, 3000);
  }

  return (
    <>
      <button onClick={myFunction}>SHOW SnackBar</button>
      <div className={isHidden}>hello world...</div>
    </>
  )
}
