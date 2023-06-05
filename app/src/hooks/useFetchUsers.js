import { useEffect, useState } from "react";

function UseFetchUser() {
  const [User, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/Users")
      .then((resp) => resp.json())
      .then((data) => setUser(data));
  }, []);

  return { User };
}

export default UseFetchUser;
