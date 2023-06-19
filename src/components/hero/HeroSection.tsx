import { ReactNode, useMemo } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsPlayFill } from "react-icons/bs";
import { Movie } from "@/types/Movie";
import { TruncateText } from "@/utils/TextUtils";
import "./hero.css";
interface HeroSectionProps {
  movie: Movie;
  children: ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({ movie, children }) => {
  const { rating, image, name: title, officialSite, premiered, summary, genres } = movie;
  console.log("image", image);

  // @todo: split into custom util
  const fixedScore = useMemo(() => {
    return rating.toFixed(1);
  }, [rating]);

  const movieYear = useMemo(() => {
    return premiered.slice(0, 4);
  }, [premiered]);

  const shortSummary = useMemo(() => {
    return TruncateText({
      text: summary,
      limit: 250,
    });
  }, [summary]);

  const commaSeparatedGenres = useMemo(() => {
    return genres.map((item) => item).join(", ");
  }, [genres]);

  return (
    <div className="ctrHero">
      {children}
      <div className="overlayGradient">
        <img className="imgFull" src={image.original} />
        <div className="heroContent">
          <h2 className="txtMovieTitle">{title}</h2>
          <div className="txtMovieDetails">
            <AiFillStar color="#C92C6D" size={15} style={{ margin: "0px 5px" }} />
            <p style={{ fontWeight: 700 }}>{fixedScore}/10 </p>
            <span style={{ padding: "0 10px" }}>|</span>
            <p>{movieYear}&nbsp; &#183; &nbsp;</p>
            <p> {commaSeparatedGenres}</p>
          </div>
          <div style={{ width: "65vw" }}>
            <div className="txtSummary" dangerouslySetInnerHTML={{ __html: shortSummary }} />
          </div>
          <div className="ctrActionButton">
            <div className="btnPlay">
              <a className="txtLink" href={officialSite} target="_blank" rel="noopener noreferrer">
                <BsPlayFill color="#dddddd" size={20} style={{ margin: "0px 5px" }} /> PLAY NOW
              </a>
            </div>
            <button className="btnTrailler">TRAILLER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
