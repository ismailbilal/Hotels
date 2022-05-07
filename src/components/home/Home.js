import React, { useEffect, useState } from "react";
import {
  StyledBackgroung,
  StyledContiner,
  StyledHome,
  StyledItem,
} from "./StyledHome";
import { useNavigate } from "react-router-dom";
import backgroundImage1 from "../../images/homeBg.jpg";
import backgroundImage2 from "../../images/homeBg2.jpg";
const transparant = "rgba(0, 0, 0, .5)";

const Home = () => {
  const naigate = useNavigate();
  const [background, setBackground] = useState(backgroundImage1);

  const goToBowsing = () => naigate("/browse");

  const changeBackground = () => {
    if (window.pageYOffset >= window.innerHeight) {
      setBackground(backgroundImage2);
    } else {
      setBackground(backgroundImage1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <StyledHome>
      <StyledBackgroung bg={background} />
      <StyledContiner>
        <StyledItem bg={transparant}></StyledItem>
        <StyledItem className="changeable" primary>
          <div className="content">
            <h1>Browse Hotels</h1>
            <p>Here you can browse, search all existing hotels in fez</p>
            <button onClick={goToBowsing}>Go!</button>
          </div>
          <div className="image image1"></div>
        </StyledItem>
        <StyledItem bg={transparant}></StyledItem>
        <StyledItem className="changeable" primary>
          <div className="image image2"></div>
          <div className="content">
            <h1>Closest hotel</h1>
            <p>Here you can find the closest hotels to your current location</p>
            <button>Go!</button>
          </div>
        </StyledItem>
      </StyledContiner>
    </StyledHome>
  );
};

export default Home;
