import styled from "styled-components";
import image1 from "../../images/image1.svg";
import image2 from "../../images/image2.svg";

const StyledHome = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
`;

const StyledBackgroung = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
`;

const StyledContiner = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledItem = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.bg || "var(--background)"};
  color: var(--on-background);
  display: flex;
  flex-direction: row;
  padding: 2rem;
  .image1 {
    background: url(${image1});
  }
  .image2 {
    background: url(${image2});
  }
  .image {
    width: 50%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  .content {
    width: 50%;
    /* border: 1px solid; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    font-size: 1.2em;
    gap: 1.5rem;
    h1 {
      /* margin-bottom: 2.5rem; */
    }
    button {
      align-self: flex-start;
      padding: 0.5rem 1.5rem;
      border: none;
      background-color: var(--primary);
      color: var(--on-primary);
      font-size: 1.5em;
      border-radius: 10px;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    .image,
    .content {
      width: 100%;
      height: 50%;
    }
    .image {
      order: 1;
    }
    .content {
      order: 2;
      justify-content: flex-start;
      padding-top: 0;
    }
  }
`;

export { StyledHome, StyledBackgroung, StyledContiner, StyledItem };
