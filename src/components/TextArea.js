import React from 'react'

export default function TextArea({ code, handleChange, isHide }) {
  return (
    <textarea
      className="code-box flipInX font-size-16"
      value={code}
      onChange={handleChange}
      hidden={isHide}
    />
  )
}
