import { useEffect, useState } from "react";
import { BASE_URL } from "@/constants/index";
import { Movie } from "@/types/Movie";

export const sanitizeResponse = (data: any[]): Movie[] => {
  console.log(data);
  return data.map((item) => {
    {
      /* <Navbar /> */
    }
    const { name, rating, image, officialSite, genres, premiered, summary, url } = item.show;
    return {
      name,
      rating: rating?.average || null,
      image: {
        original: image.original,
        medium: image.medium,
      },
      officialSite,
      genres,
      premiered,
      summary,
      url,
    };
  });
};

const useGetMovieList = (): { isLoading: boolean; movieData: Movie[] } => {
  const [isLoading, setIsLoading] = useState(true);
  const [movieData, setMovieData] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovieData = async (): Promise<void> => {
      try {
        const res = await fetch(`${BASE_URL}/search/shows?q=girls`);
        const data = await res.json();
        const sanitizedData = sanitizeResponse(data);
        setMovieData(sanitizedData);
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
