import React from "react";

const ChevronDown = props => (
  <svg
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={8}
    height={4}
    {...props}
  >
    <defs>
      <path id="a" d="M3.99 4.697L7.321 2 8 2.753 3.99 6 0 2.77l.679-.753z" />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(0 -2)">
      <mask id="b" fill="#fff">
        <use xlinkHref="#a" />
      </mask>
      <use fill="#FFF" fillRule="nonzero" xlinkHref="#a" />
      <g fill="#FF066E" fillRule="nonzero" mask="url(#b)">
        <path d="M0 0h8v8H0z" />
      </g>
    </g>
  </svg>
);

export default ChevronDown;
