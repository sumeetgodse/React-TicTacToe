import React from "react";
import './../App.css';

function SquareComponent(props) {
    const classes=props.className ? `${props.className} square` : `square`;
  return (
    <span className={classes +  (props.state === "X" ? ` x` : ` o`)} onClick={props.onClick}>
        {props.state}
    </span>
  );
}

export default SquareComponent;
