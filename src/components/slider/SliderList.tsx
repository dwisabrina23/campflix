import SliderItem from "./SliderItem";
import { Movie } from "@/types/Movie";
import "./slider.css";

interface SliderListProps {
  movie: Movie[];
}

const SliderList: React.FC<SliderListProps> = ({ movie }) => {
  return (
    <div className="ctrSlider">
      {movie.map((item, index) => {
        return (
          <SliderItem key={index} imageUrl={item.image.original} title={item.name} genre={item.genres} url={item.url} />
        );
      })}
    </div>
  );
};

export default SliderList;
