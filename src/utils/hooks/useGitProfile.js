import { useEffect, useState } from "react";

const useGitProfile = (id) => {
  const [resInfo, setResInfo] = useState();
  useEffect(() => {
    const getUser = async () => {
      const data = await fetch(`https://api.github.com/users/${id}`);
      const json = await data.json();
      setResInfo(json);
    };
    getUser();
  }, []);

  return resInfo;
};

export default useGitProfile;
