import React, { useState, useEffect } from 'react';
import '../css/snackbar.css';
import TextArea from '../components/TextArea';
import codeNotifications from '../data/notifications';
import copyToClipboard from "../service/copy";

export default function Notifications() {

  const [txtCopy, setTxtCopy] = useState("copy")

  const [snackLongStyle, setSnackLongStyle] = useState("snackbar-w100")
  const [toastClass, setToastClass] = useState("toast")
  const [snackClass, setSnackClass] = useState("snackbar")
  const [optionVal, setOptionVal] = useState("snackbar");

  const [isClicked, setIsClicked] = useState(false);
  const [showCode, setShowCode] = useState(false)

  function myFunction() {

      setIsClicked(!isClicked);

      if (optionVal === "snackbar") {
        setSnackClass("snackbar show")
        setTimeout(() => { setSnackClass("snackbar") }, 3000);
      }
      else if (optionVal === "toast") {
        setToastClass("toast show")
        setTimeout(() => { setToastClass("toast") }, 3000);
      }
      else {
        setSnackLongStyle("snackbar-w100 show")
        setTimeout(() => { setSnackLongStyle("snackbar-w100") }, 3000);
      }    
  }

  let handleChange = () => console.log("handleChange");

  return (
    <>
      <p className="font-size-14 text-uppercase text-muted max-width-300">
        Push notifications to your visitors with a Toast or an Snackbar.
      </p>

      <div className="flex-row">
        <div className="link-rose mb-20" onClick={() => setShowCode(!showCode)}>
          <i className="fas fa-hand-point-right shake-right"></i> GET CODE
        </div>
      </div>

      <div className="flex-row">

        <select onChange={(e) => setOptionVal(e.target.value)}>
          <option value="snackbar">snackbar</option>
          <option value="snackbar-w100">snackbar-w100</option>
          <option value="toast">toast</option>
        </select>

        <button className="ml-20" onClick={myFunction}><i className="fas fa-bell"></i></button>

      </div>


      <div className="code-container w-60">

        <TextArea
          code={codeNotifications.find((c, idx) => c.name === optionVal).clx}
          handleChange={handleChange}
          isHide={!showCode}
        />
      </div>


      <div className={snackLongStyle}>Lorem ipsum dolor sit amet....</div>
      <div className={snackClass}>Lorem ipsum dolor sit amet....</div>
      <div className={toastClass}>
        <h5 className="m-0 p-0">Toast title</h5>
        <p className="m-0 p-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </>
  )
}
