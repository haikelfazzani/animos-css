import React, { useState, useEffect } from 'react';
import { animOptions } from '../data/options';

import '../App.css';
import '../css/Animos.css';

import Logo from '../images/logo.png';

import codeAnimation from '../data/animation';

import Option from '../components/Option';
import Footer from '../components/Footer';


function Home() {

  let [optionVal, setOptionVal] = useState("bounce");
  let [titleClass, settitleClass] = useState("display-1 text-uppercase m-0");
  let [isClicked, setisClicked] = useState(false);

  const [code, setCode] = useState(codeAnimation[0].clx);
  const [showCode, setShowCode] = useState(false);
  const [keyFrame, setKeyFrame] = useState(codeAnimation[0].keyframe);


  useEffect(() => {

    setisClicked(false);
    setShowCode(false);
    setCode(codeAnimation.find(c => c.name === optionVal.trim()).clx);
    setKeyFrame(codeAnimation.find(c => c.name === optionVal.trim()).keyframe);

  }, [optionVal])

  function handleChange(e) {
  }

  return (
    <>
      <p className="mb-0 font-size-14 text-uppercase text-muted max-width-300">
        it's free css animations, you can use it whenever you need
      </p>

      <h1 className={isClicked ? titleClass : "display-1 text-uppercase m-0"}>
        Anim<img src={Logo} alt="" />s<span className="color-rose">.css</span>
      </h1>      

      <div className="link-rose mb-20" onClick={() => setShowCode(!showCode)}>
        <i class="fas fa-hand-point-right"></i> GET CODE
      </div>

      <div className="flex-row">

        <select className="text-uppercase" onChange={(e) => setOptionVal(e.target.value)}>
          {animOptions.map((o, indx) => <Option key={indx} val={o.val} txt={o.txt} />)}
        </select>


        <button className="text-uppercase ml-20"
          onClick={() => {
            setisClicked(!isClicked);
            settitleClass("display-1 text-uppercase m-0 " + optionVal)
          }} ><i class="fas fa-paw"></i>
          </button>

      </div>


      <div className="flex-column">
        <textarea
          className="flipInX font-size-16 mt-20"
          value={showCode ? code : "-"}
          onChange={handleChange}
          hidden={!showCode}
        />

        <textarea
          className="flipInX font-size-16 mt-20"
          value={showCode ? keyFrame : "-"}
          onChange={handleChange}
          hidden={!showCode}
        />
      </div>

      <Footer />

    </>
  );
}

export default Home;

