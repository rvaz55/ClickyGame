import React from "react";
import "./Card.css";

const Card = props => (

      <div
        role = "img"
        aria-label = "card"
        onClick={() => props.handleClick(props.id)}
        style = {{backgroundImage : `url("${props.image}")`}}
        className = {`card-item`}
        data-clicked = {props.clicked}
      />

);

export default Card