import { useState } from "react";
import { BASE_URL } from "@/constants/index";
import { Movie } from "@/types/Movie";
import { sanitizeResponse } from "./useGetMovieList";

export const useSearchMovie = (): {
  isLoading: boolean;
  movieData: Movie[];
  fetchMovieData: (keyword: string) => Promise<void>;
} => {
  const [isLoading, setIsLoading] = useState(true);
  const [movieData, setMovieData] = useState<Movie[]>([]);

  const fetchMovieData = async (keyword: string): Promise<void> => {
    try {
      const res = await fetch(`${BASE_URL}/search/shows?q=${encodeURIComponent(keyword)}`);
      const data = await res.json();
      const sanitizedData = sanitizeResponse(data);
      setMovieData(sanitizedData);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  };

  return { isLoading, movieData, fetchMovieData };
};

