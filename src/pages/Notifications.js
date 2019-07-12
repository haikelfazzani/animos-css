import React, { useState } from 'react';
import '../css/snackbar.css';
import TextArea from '../components/TextArea';
import codeNotifications from '../data/notifications';

export default function Notifications() {

  const [toastClass, setToastClass] = useState("toast")
  const [snackClass, setSnackClass] = useState("snackbar")
  const [optionVal, setOptionVal] = useState("snackbar");

  const [isClicked, setIsClicked] = useState(false);
  const [showCode, setShowCode] = useState(false)

  const myFunction = () => {

    setIsClicked(!isClicked);

    switch (optionVal) {
      case "snackbar":
        setSnackClass("snackbar show")
        setTimeout(() => { setSnackClass("snackbar") }, 3000);
        break;

      case "toast":
        setToastClass("toast show")
        setTimeout(() => { setToastClass("toast") }, 3000);
        break;
    }

  }

  let handleChange = () => { };

  return (
    <>
      <p className="lead text-muted mx-auto">
        Push notifications to your visitors with a Toast or an Snackbar.
      </p>


      <div className="form-group w-25 mx-auto">
        <select className="form-control"  onChange={(e) => setOptionVal(e.target.value)}>
          <option value="snackbar">snackbar</option>
          <option value="toast">toast</option>
        </select>
      </div>
      

      <button className="btn btn-secondary mb-3" onClick={() => setShowCode(!showCode)}>
        <i className="fas fa-laptop-code"></i>
      </button> 

      <button className="btn btn-rose mb-3 ml-3" onClick={myFunction}>
        <i className="fas fa-bell"></i>
      </button>


      <div className="w-75 mx-auto">
          
        <TextArea
          code={codeNotifications.find((c, idx) => c.name === optionVal).clx}
          handleChange={handleChange}
          isHide={!showCode}
        />
      </div>


      <div className={snackClass}>Lorem ipsum dolor sit amet....</div>
      <div className={toastClass}>
        <h5 className="m-0 p-0">Toast title</h5>
        <p className="m-0 p-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </>
  )
}
