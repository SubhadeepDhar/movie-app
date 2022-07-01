import React from "react";
import "./component.css";

const Component = ({ link, name}) => {
  return (
    <div className="component">
      <img src={link} alt="" />
      <p>{name}</p>
    </div>
  );
};

export default Component;