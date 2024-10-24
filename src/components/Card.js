import React, {useState} from "react";

const Card = (props) => {
  const [likes,setLikes] = useState(0)
  return (
    <div className={`card card-vertical `+ props.type}>
      <img
        className="card-image"
        src={props.image}
        alt="img"
      />
      <div className="card-heading">{props.title}</div>
      <div className="card-description">{props.description}</div>
      <div>{likes}</div>
      <button onClick={()=>{
        setLikes(likes+1)
      }}>Like</button>
    </div>
  );
};

export default Card;