import React from 'react';

export default function OuterLink({clx, href, iconClass}) {
  return (
    <a className={clx} href={href}>
      <i className={iconClass}></i>
    </a>
  )
}
