import React, { useState } from 'react';
import '../css/button.css';
import Select from '../components/Select';

import { btnData, btnOptions } from '../data/buttons';
import CodeBox from '../components/CodeBox';
import ButtonIcon from '../components/ButtonIcon';

export default function Buttons() {

  const [btnVal, setbtnVal] = useState("button1");
  const [hideCode, setHideCode] = useState(true)

  return (
    <>
      <div className="row mx-auto mb-3">
        <div className="col-md-3 mb-3"><button className="but button1">button1</button></div>
        <div className="col-md-3 mb-3"><button className="but button2">button2</button></div>        
        <div className="col-md-3 mb-3"><button className="but button3">button3</button></div>
        <div className="col-md-3"><button className="but button4">button4</button></div>
      </div>

      <div className="row mx-auto mb-3">        
        <div className="col-md-3 mb-3"><button className="but button5">button5</button></div>
        <div className="col-md-3"><button className="but button6">button6</button></div>
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

      <div className="w-75 mx-auto">
        <CodeBox
          code={btnData.find(b => b.name === btnVal).clx}
          handleChange={() => { }}
          isHide={hideCode} />
      </div>

    </>
  )
}
