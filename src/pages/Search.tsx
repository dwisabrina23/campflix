import { useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { useSearchMovie } from "@/hooks/useSearchMovie";
import SliderItem from "@/components/slider/SliderItem";
import Navbar from "@/components/navbar/Navbar";
import "./search.css";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const { keyword } = location.state;
  const queryParams = searchParams.get("q");
  const { isLoading, movieData, fetchMovieData } = useSearchMovie();

  useEffect(() => {
    if (queryParams) {
      fetchMovieData(queryParams);
    }
  }, [fetchMovieData, queryParams]);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Navbar />
          <h4 style={{ color: "white", margin: "4.5rem 0.7rem 0.7rem" }}>Search result for {keyword}</h4>
          <div className="ctrSearch">
            {movieData.map((movie, index) => (
              <SliderItem
                key={index}
                genre={movie.genres}
                imageUrl={movie.image.original}
                title={movie.name}
                url={movie.url}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SearchPage;
