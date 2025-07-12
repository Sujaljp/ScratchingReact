import React from "react";
import { Link } from 'react-router-dom'


const Card = ({ type, image, title, description }) => {
  return (
    <div className={`card card-vertical ` + type}>
      <Link to={"/album/" + title}>
        <img className="card-image" src={image} alt="img" />
      </Link>
      <Link to={"/album/" + title}>
        <div className="card-heading">{title}</div>
      </Link>
        
        <div className="card-description">{description}</div>
    </div>
  );
};

export default Card;
