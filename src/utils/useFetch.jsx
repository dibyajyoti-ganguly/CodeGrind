import { useEffect, useState } from "react";

const useFetch = () => {
  const [list, setlist] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const data = await fetch(import.meta.env.VITE_LEADERBOARD_API);
      const response = await data.json();
      setlist(response.leaderboard);
    }

    fetchData();
  }, []);
  return list;
};

export default useFetch;
