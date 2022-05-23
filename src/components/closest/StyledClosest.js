import styled from "styled-components";

const StyledClosest = styled.div`
  position: absolute;
  top: 70px;
  width: 100vw;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 3rem;
  @media (max-width: 786px) {
    flex-direction: column;
  }
`;

const StyledMap = styled.div`
  height: 70vh;
  width: 60%;
  position: relative;
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
    width: 100%;
    height: 50vh;
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

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40%;
  min-height: 100%;
  @media (max-width: 786px) {
    width: 100%;
    height: 70vh;
    order: 2;
  }
`;

const StyledHotel = styled.div`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  padding: 0.5rem;
  & img {
    min-width: 100px;
    max-width: 100px;
    height: 66px;
  }
  & .info {
    display: flex;
    flex-direction: column;
    & .ratingDist {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      & em {
        display: flex;
        flex-direction: row;
        gap: 0.4rem;
        & .fa-star {
          color: #ffc107;
        }
        & .fa-road {
          color: var(--secondary-variant);
        }
      }
    }
  }
`;

export { StyledClosest, StyledMap, StyledList, StyledHotel };
