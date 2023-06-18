import "./slider.css";

const SliderItem = ({ imageUrl, title, genre }) => {
  return (
    <div className="cardItem">
      <img className="imgItem" src={imageUrl} alt="" />
      <h3 className="txtTitle">{title}</h3>
      <div className="wrpGenre">
        {genre.map((item, index) => {
          return (
            <div key={index} className="chipGenre">
              <p className="txtGenre">{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SliderItem;
