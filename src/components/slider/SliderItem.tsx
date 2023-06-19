import "./slider.css";
interface SliderItemProps {
  imageUrl: string;
  title: string;
  genre: string[];
  url: string;
}

const SliderItem: React.FC<SliderItemProps> = ({ imageUrl, title, genre, url }) => {
  return (
    <div className="cardItem" onClick={() => window.open(url, "_blank", "noopener noreferrer")}>
      <div style={{ height: "75%", padding: "0 0" }}>
        <img className="imgItem" src={imageUrl} alt="" />
      </div>
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
