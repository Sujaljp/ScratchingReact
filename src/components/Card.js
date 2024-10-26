import React from "react";

const Card = ({type,image,title,description}) => {
  
  return (
    <div className={`card card-vertical ` + type}>
      <img className="card-image" src={image} alt="img" />
      <div className="card-heading">{title}</div>
      <div className="card-description">{description}</div>
      
    </div>
  );
};

export default Card;
