import React from "react";

const Card = (props) => {
  return (
    <div className={`card card-vertical ` + props.type}>
      <img className="card-image" src={props.image} alt="img" />
      <div className="card-heading">{props.title}</div>
      <div className="card-description">{props.description}</div>
      
    </div>
  );
};

export default Card;
