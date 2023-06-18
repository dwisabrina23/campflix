import { useEffect, useState } from "react";
import { BASE_URL } from "../constants";

const useGetMovieList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const res = await fetch(`${BASE_URL}/search/shows?q=girls`);
        const data = await res.json();
        setMovieData(data);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    };

    fetchMovieData();
  }, []);

  return { isLoading, movieData };
};

export default useGetMovieList;
