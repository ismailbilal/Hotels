import styled from "styled-components";

const StyledHotel = styled.div`
  position: absolute;
  top: 70px;
  width: 100vw;
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledMap = styled.div`
  height: 70vh;
  width: 50%;
  position: relative;
  /* margin-top: 1rem; */
  & .map-container {
    height: 100%;
    overflow: hidden;
  }
  & .sidebar {
    background-color: rgba(35, 55, 75, 0.9);
    color: #fff;
    padding: 6px 12px;
    font-family: monospace;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    margin: 12px;
    border-radius: 4px;
  }
  @media (max-width: 768px) {
    width: 100vw;
  }
  & .mapboxgl-ctrl-bottom-left,
  & .mapboxgl-ctrl-bottom-right {
    opacity: 0;
  }
  & .mapboxgl-ctrl-top-right {
    top: auto;
    bottom: 1rem;
  }
`;

const StyledDetail = styled.div`
  border: 1px solid;
  width: 50%;
  @media (max-width: 768px) {
    width: 100vw;
  }
`;

export { StyledHotel, StyledMap, StyledDetail };
