import React from 'react'

export default function ButtonIcon({ clx, handleClick, iconClass }) {
  return (
    <button className={clx} onClick={handleClick}>
      <i className={iconClass}></i>
    </button>
  )
}
