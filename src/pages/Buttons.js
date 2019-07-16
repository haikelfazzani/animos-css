import React, { useState } from 'react';
import '../css/button.css';
import '../css/button-box.css';

import Select from '../components/Select';

import { btnData, btnOptions, standCode } from '../data/buttons';
import CodeBox from '../components/CodeBox';
import ButtonIcon from '../components/ButtonIcon';

export default function Buttons() {

  const [btnVal, setbtnVal] = useState("button1");
  const [hideCode, setHideCode] = useState(true)

  return (
    <>

      <p>Buttons with animations</p>

      <div className="row mx-auto">
        <div className="col-md-2 p-0 mb-3"><button className="but button1">button1</button></div>
        <div className="col-md-2 p-0 mb-3"><button className="but button2">button2</button></div>
        <div className="col-md-2 p-0 mb-3"><button className="but button3">button3</button></div>
        <div className="col-md-2 p-0 mb-3"><button className="but button4">button4</button></div>
        <div className="col-md-2 p-0 mb-3"><button className="but button5">button5</button></div>
        <div className="col-md-2 p-0 mb-3"><button className="but button6">button6</button></div>
      </div>

      <div className="row mx-auto mb-3">
        <div className="col-md-2 p-0 mb-3"><button className="but button7">button7</button></div>
        <div className="col-md-2 p-0 mb-3"><button className="but button8">button8</button></div>
        <div className="col-md-2 p-0"><button className="but button9">button9</button></div>
      </div>


      <p>Butt box</p>

      <div className="row mx-auto mb-3">
        <div className="col-md-2 p-0 mb-3"><button className="button but-box1">but-box1</button></div>
        <div className="col-md-2 p-0"><button className="button but-box2">but-box2</button></div>
      </div>



      <p>Butt shad</p>

      <div className="row mx-auto mb-3">
        <div className="col-md-2 p-0 mb-3"><button className="button but-shad1">but-shad1</button></div>
        <div className="col-md-2 p-0"><button className="button but-shad2">but-shad2</button></div>
      </div>


      <Select clx="form-control w-30 mx-auto mt-5 mb-3" name="buttons"
        val={btnVal}
        handleChange={(e) => setbtnVal(e.target.value)}
        options={btnOptions}
      />

      <ButtonIcon clx="btn btn-secondary"
        handleClick={() => setHideCode(!hideCode)}
        iconClass="fas fa-laptop-code"
      />

      <div className="min-h200 w-75 mx-auto">

        <CodeBox
          code={standCode}
          handleChange={() => { }}
          isHide={hideCode} />

        <CodeBox
          code={btnData.find(b => b.name === btnVal).clx}
          handleChange={() => { }}
          isHide={hideCode} />
      </div>

    </>
  )
}
