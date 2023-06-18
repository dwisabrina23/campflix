// eslint-disable-next-line @typescript-eslint/no-explicit-any
import { useMemo } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsPlayFill } from "react-icons/bs";
import Navbar from "../navbar/Navbar";

import "./hero.css";
const HeroSection = ({ movie }) => {
  console.log(movie);
  const {
    score,
    show: { image, name: title, officialSite },
  } = movie;

  // @todo: split into custom util
  const fixedScore = useMemo(() => {
    return (score * 10).toFixed(1);
  }, [score]);

  return (
    <div className="ctrHero">
      <Navbar />
      <div className="overlayGradient">
        <img className="imgFull" src={image.original} />
        <div className="heroContent">
          <h2 className="txtMovieTitle">{title}</h2>
          <p className="txtScore">
            <AiFillStar className="icon" color="#C92C6D" size={15} style={{ margin: "0px 5px" }} />
            {fixedScore}/10
          </p>
          <div className="btnPlay">
            <a href={officialSite} target="_blank" rel="noopener noreferrer">
              <BsPlayFill color="#609EA2" /> Play Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
