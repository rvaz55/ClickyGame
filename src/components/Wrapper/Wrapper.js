//Importing 'React' and wrapper styles
import React from "react";
import "./Wrapper.css";

//Creating the 'wrapper' component
//Reminder: components are basically functions which take 'props' (basically parameters)
//and do with the 'props' what the code dictates
//Reminder: place curly braces around the 'props' that are being passed into the component
//Reminder: all elements need to be in a <div> tag - 
//either a group <div> or a <div> just for that tag, if not you get an error
//Reminder: ' {props.children} '
const Wrapper = props => (

    <div className="wrapper"> 
        {props.children}
    </div>  
   
);

//Exporting the 'Wrapper' component

export default Wrapper;