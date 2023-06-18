import SliderItem from "./SliderItem";
import "./slider.css";

const SliderList = ({ movie }) => {
  return (
    <div className="ctrSlider">
      {movie.map((item, index) => {
        return (
          <SliderItem key={index} imageUrl={item.show.image.original} title={item.show.name} genre={item.show.genres} />
        );
      })}
    </div>
  );
};

export default SliderList;
