import HeroSection from "@/components/hero/HeroSection";
import SliderList from "@/components/slider/SliderList";
import useGetMovieList from "@/hooks/useGetMovieList";

const Home = () => {
  const { isLoading, movieData } = useGetMovieList();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      {/* <Navbar /> */}
      {movieData.length > 0 && (
        <>
          <HeroSection movie={movieData[6]} />
          <SliderList movie={movieData} />
        </>
      )}
    </>
  );
};

export default Home;
