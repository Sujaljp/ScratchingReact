import React from "react";

const Section = ({heading,list}) => {
    
  return (
    <div className="h-container p-1.5">
      <div className="h-container-heading mb-2 text-xl">
        <h2>{heading}</h2>
      </div>
      <div className="h-container-body flex gap-[2%] overflow-x-scroll pb-1.5">{list}</div>
    </div>
  );
};

export default Section;
