import React, { useState, useEffect } from 'react';

import './App.css';
import './Animos.css';

import codeAnimation from './data/animation';

import Option from './components/Option';
import Footer from './components/Footer';

const options = [
  { val: "bounce", txt: "bounce" },
  { val: "flipInX", txt: "flipInX" },
  { val: "fadeIn", txt: "fadeIn" },
  { val: "pulse", txt: "pulse" },
  { val: "shake", txt: "shake" }
];


function App() {

  let [optionVal, setOptionVal] = useState("bounce");
  let [titleClass, settitleClass] = useState("display-1 text-uppercase m-0");
  let [isClicked, setisClicked] = useState(false);


  const [code, setCode] = useState(codeAnimation[0].clx);
  const [showCode, setShowCode] = useState(false);
  const [keyFrame, setKeyFrame] = useState(codeAnimation[0].keyframe);


  useEffect(() => {

    setShowCode(false);
    setCode(codeAnimation.find(c => c.name === optionVal.trim()).clx);
    setKeyFrame(codeAnimation.find(c => c.name === optionVal.trim()).keyframe);

  }, [optionVal])

  function handleChangeTxtArea() {

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className={isClicked ? titleClass : "display-1 text-uppercase m-0"}>Animos.css</h1>
        <p className="m-0 mb-20 font-size-14 text-uppercase text-muted">
          An easy css animation library <button className="btn-link" onClick={() => {
            setShowCode(!showCode)
          }}>GET CODE</button>
        </p>

        <div className="flex-row">
          <select className="text-uppercase" onChange={(e) => setOptionVal(e.target.value)}>
            {options.map((o, idx) => <Option key={idx} val={o.val} txt={o.txt} />)}
          </select>


          <button className="text-uppercase ml-20"
            onClick={() => {
              setisClicked(!isClicked);
              settitleClass("display-1 text-uppercase m-0 " + optionVal)
            }} >animate
          </button>

        </div>

        <div className="flex-column">
          <textarea
            className="flipInX font-size-16 mt-20"
            value={showCode ? code : "-"}
            onChange={handleChangeTxtArea}
            hidden={!showCode}
          />

          <textarea
            className="flipInX font-size-16 mt-20"
            value={showCode ? keyFrame : "-"}
            onChange={handleChangeTxtArea}
            hidden={!showCode}
          />
        </div>

        <Footer />

      </header>

    </div>
  );
}

export default App;
