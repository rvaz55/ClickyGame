import React from "react";
import "./Counter.css";

const Counter = props => (
    <div>

             <p className="card-text">Click Count: {props.count}</p>

    </div>
);

export default Counter