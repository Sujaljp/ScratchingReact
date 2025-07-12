import React, { useEffect, useState } from "react";
import useGitProfile from "../utils/hooks/useGitProfile";

const User = ({name, job}) => {

  const user = useGitProfile("sujaljp")  

  console.log(user)


  return (
    <div className="user-class">
      <hr />
      <h2>Name: {name}</h2>
      <h2>Work: {job}</h2>
      <h2>Githubname: {user?.login}</h2>
      <hr />
    </div>
  );
};

export default User;
