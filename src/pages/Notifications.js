import React, { useState } from 'react';
import '../css/snackbar.css';
import CodeBox from '../components/CodeBox';
import codeNotifications from '../data/notifications';
import ButtonIcon from '../components/ButtonIcon';

export default function Notifications() {

  const [toastClass, setToastClass] = useState("toast")
  const [snackClass, setSnackClass] = useState("snackbar")
  const [optionVal, setOptionVal] = useState("snackbar");

  const [isClicked, setIsClicked] = useState(false);
  const [showCode, setShowCode] = useState(false)

  const myFunction = () => {

    setIsClicked(!isClicked);

    switch (optionVal) {

      case "toast":
        setToastClass("toast show")
        setTimeout(() => { setToastClass("toast") }, 3000);
        break;

      default:
        setSnackClass("snackbar show")
        setTimeout(() => { setSnackClass("snackbar") }, 3000);
        break;
    }

  }

  let handleChange = () => { };

  return (
    <>
      <p className="lead text-muted mx-auto">
        Push notifications to your visitors with a Toast or an Snackbar.
      </p>

      <div className="form-group w-30 mx-auto">
        <select className="form-control" onChange={(e) => setOptionVal(e.target.value)}>
          <option value="snackbar">snackbar</option>
          <option value="toast">toast</option>
        </select>
      </div>

      <div className="btn-group btn-block w-30 mx-auto" role="group" aria-label="Basic example">

        <ButtonIcon clx="btn btn-secondary"
          handleClick={() => setShowCode(!showCode)}
          iconClass="fas fa-laptop-code"
        />

        <ButtonIcon clx="btn btn-danger btn-rose"
          handleClick={myFunction}
          iconClass="fas fa-bell"
        />
      </div>

      <div className="w-75 mx-auto">

        <CodeBox
          code={codeNotifications.find((c, idx) => c.name === optionVal).clx}
          handleChange={handleChange}
          isHide={!showCode}
        />
      </div>


      <div className="position-relative w-100">
        <div className={snackClass}>Lorem ipsum dolor sit amet....</div>
      </div>

      <div className={toastClass}>
        <h5 className="m-0 p-0">Toast title</h5>
        <p className="m-0 p-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

    </>)
}
