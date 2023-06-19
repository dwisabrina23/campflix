import HeroSection from "@/components/hero/HeroSection";
import Navbar from "@/components/navbar/Navbar";
import SliderList from "@/components/slider/SliderList";
import useGetMovieList from "@/hooks/useGetMovieList";

const Home = () => {
  const { isLoading, movieData } = useGetMovieList();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      {movieData.length > 0 && (
        <>
          <HeroSection movie={movieData[6]}>
            <Navbar />
          </HeroSection>
          <SliderList movie={movieData} />
        </>
      )}
    </>
  );
};

export default Home;
