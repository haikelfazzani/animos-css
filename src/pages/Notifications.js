import React, { useState } from 'react';
import '../css/snackbar.css';

export default function Notifications() {

  const [toastClass, setToastClass] = useState("toast")
  const [snackClass, setSnackClass] = useState("snackbar")
  const [optionVal, setOptionVal] = useState("snackbar");

  function myFunction() {
    if(optionVal === "snackbar") {
      setSnackClass("snackbar show")
      setTimeout(() => { setSnackClass("snackbar") }, 3000);
    }
    else {
      setToastClass("toast show")
      setTimeout(() => { setToastClass("toast") }, 3000);
    }
    
  }

  return (
    <>
      <p className="font-size-14 text-uppercase text-muted max-width-300">
        Push notifications to your visitors with a Toast or an Snackbar.
      </p>

      <div className="flex-row">
        <div className="link-rose mb-20">
          <i className="fas fa-hand-point-right shake-right"></i> GET CODE
        </div>
      </div>

      <div className="flex-row">

        <select onChange={(e) => setOptionVal(e.target.value)}>
          <option value="snackbar">snackbar</option>
          <option value="toast">toast</option>
        </select>

        <button className="ml-20" onClick={myFunction}><i className="fas fa-bell"></i></button>

      </div>

      <div className={snackClass}>Lorem ipsum dolor sit amet....</div>
      <div className={toastClass}>
        <h5 className="m-0 p-0">Toast title</h5>
        <p className="m-0 p-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </>
  )
}
