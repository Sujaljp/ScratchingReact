import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Card = ({ type, image, title, description }) => {
  return (
    <div
      className={
        `card card-vertical 
        box-border flex cursor-pointer
        border border-[rgba(255,255,255,0)] rounded-sm p-2.5
        hover:bg-[rgba(255,255,255,0.1)]
        hover:shadow-[0_4px_30px_rgba(0,0,0,0.1)]
        hover:backdrop-blur-[10px]
        hover:backdrop-saturate-[110%]
        hover:border-[rgba(255,255,255,0.3)] ` +
        type +
        " gap-1 "
      }
    >
      <Link to={"/album/" + title} state={{image, title, description}} className="block w-34">
        <img className="card-image mb-1" src={image} alt="img" />
        <div className="card-heading text-base  font-bold">{title}</div>
        <div className="card-description text-base font-medium text-[rgb(200,200,200)]">
          {description}
        </div>
      </Link>
    </div>
  );
};


export const actorCard = (Card) =>{

  return (props) =>{

    return (
    <div className="relative">
      <label className="absolute  z-20">🎥</label>
      <Card {...props}/>
    </div>
    )
  }
}

export default Card;
