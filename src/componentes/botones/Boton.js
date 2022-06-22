import React from "react";

import "./myBoton.css";

export default function Boton(props) {

  let className = '';
  if (props.className) {
    className += props.className
  }
  (props.btnNormal) ? className += ' btnNormal' : className = ' btnDerecha ' + props.name.toLowerCase();

  return (

    <button className={className} value={props.name} onClick={props.myOnclick}>
      {props.name}
    </button>
  );



}
