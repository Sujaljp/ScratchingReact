import React from "react";

const Section = ({heading,list}) => {
    
  return (
    <div className="h-container">
      <div className="h-container-heading">
        <h2>{heading}</h2>
      </div>
      <div className="h-container-body">{list}</div>
    </div>
  );
};

export default Section;
