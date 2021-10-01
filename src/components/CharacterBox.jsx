import React from "react";
import "./../App.css";

const CharacterBox = (props) => {
  return (
    <div className={props.className}>
      <div className="sp-details-box">
        <img src={props.img} alt="" />
        <h1 className="cursive">{props.name}</h1>
        <h2>{props.description}</h2>
      </div>
    </div>
  );
};

export default CharacterBox;
