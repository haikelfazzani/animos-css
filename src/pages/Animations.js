import React, { useState, useEffect } from 'react';
import { animOptions } from '../data/options';

import '../App.css';
import '../css/Animos.css';

import codeAnimation from '../data/animation';

import Option from '../components/Option';

import copyToClipboard from "../service/copy";

function Animations() {

  let [optionVal, setOptionVal] = useState("bounce");
  let [titleClass, settitleClass] = useState("jumbotron-heading");
  let [isClicked, setisClicked] = useState(false);

  const [showCode, setShowCode] = useState(false);
  const [code, setCode] = useState(codeAnimation[0].clx);
  const [keyFrame, setKeyFrame] = useState(codeAnimation[0].keyframe);


  const [isClassCopied, setIsClassCopied] = useState('copy');
  const [isKeyFrameCopied, setIsKeyFrameCopied] = useState('copy');
  const textAreaClass = React.useRef(null);
  const textAreaKeyFrame = React.useRef(null);

  useEffect(() => {

    setisClicked(false);
    setShowCode(false);
    setCode(codeAnimation.find(c => c.name === optionVal.trim()).clx);
    setKeyFrame(codeAnimation.find(c => c.name === optionVal.trim()).keyframe);

    if (showCode) {
      setIsClassCopied("copy");
      setIsKeyFrameCopied("copy");
    }

  }, [optionVal]);

  function handleChange(e) {
  }

  return (
    <>
      <h1 class="jumbotron-heading" className={isClicked ? titleClass : "jumbotron-heading"}>
        Animos<span className="color-rose">.css</span>
      </h1>

      <p class="lead text-muted">
        it's free css animations, you can use it whenever you need
          </p>


      <div className="form-group w-25 mx-auto">
        <select className="form-control" onChange={(e) => setOptionVal(e.target.value)}>
          {animOptions.map((o, indx) => <Option key={indx} val={o.val} txt={o.txt} />)}
        </select>
      </div>


      <p>
        <button className="btn btn-secondary mb-3"
          onClick={() => setShowCode(!showCode)}><i className="fas fa-code"></i>
        </button>

        <button className="btn btn-rose mb-3 ml-3"
          onClick={() => {
            setisClicked(!isClicked);
            settitleClass("cover-heading " + optionVal)
          }} ><i className="fas fa-paw"></i>
        </button>
      </p>

      <div className="flex-column w-100 mt-20 mb-120">

        <div className="code-container w-75 mx-auto">
          <button className="btn btn-dark btn-black"
            onClick={(e) => copyToClipboard(e, textAreaClass, setIsClassCopied)}
            hidden={!showCode}>
            {isClassCopied}
          </button>

          <textarea
            className="code-box flipInX font-size-16"
            value={showCode ? code : "-"}
            onChange={handleChange}
            hidden={!showCode}
            ref={textAreaClass}
          />
        </div>

        <div className="code-container w-75 mx-auto">
          <button className="btn btn-dark btn-black"
            onClick={(e) => copyToClipboard(e, textAreaKeyFrame, setIsKeyFrameCopied)}
            hidden={!showCode}>
            {isKeyFrameCopied}
          </button>

          <textarea
            className="code-box flipInX font-size-16"
            value={showCode ? keyFrame : "-"}
            onChange={handleChange}
            hidden={!showCode}
            ref={textAreaKeyFrame}
          />
        </div>

      </div>

    </>);
}

export default Animations;

