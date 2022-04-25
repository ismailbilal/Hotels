import React, { useEffect, useState } from "react";
import {
  StyledBackgroung,
  StyledContiner,
  StyledHome,
  StyledItem,
} from "./StyledHome";
import backgroundImage1 from "../../images/homeBg.jpg";
import backgroundImage2 from "../../images/homeBg2.jpg";
const transparant = "rgba(0, 0, 0, .5)";

const Home = () => {
  const [background, setBackground] = useState(backgroundImage1);

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
          hello
        </StyledItem>
        <StyledItem bg={transparant}></StyledItem>
        <StyledItem className="changeable" primary>
          hello
        </StyledItem>
      </StyledContiner>
    </StyledHome>
  );
};

export default Home;
