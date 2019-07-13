import React from 'react'

export default function Select({options, handleChange, val}) {
  return (
    <select className="form-control" name="animations"
      value={val}
      onChange={handleChange}>
      {options.map((o, indx) => <Option key={indx} val={o.val} txt={o.txt} />)}
    </select>
  )
}
