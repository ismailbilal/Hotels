import styled from "styled-components";

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
  justify-content: center;
  align-items: center;
`;

export { StyledHome, StyledBackgroung, StyledContiner, StyledItem };
