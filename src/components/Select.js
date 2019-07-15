import React from 'react'
import Option from './Option';

export default function Select({clx, name, options, handleChange, val}) {
  return (
    <select className={clx} name={name}
      value={val}
      onChange={handleChange}>
      {options.map((o, indx) => <Option key={indx} val={o.val} txt={o.txt} />)}
    </select>
  )
}
