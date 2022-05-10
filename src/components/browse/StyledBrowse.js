import styled from "styled-components";

const StyledBrowse = styled.div`
  width: 100%;
  position: absolute;
  top: 70px;
  display: flex;
  flex-direction: row;
  background-color: var(--background);
  color: var(--on-background);
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledFiltring = styled.form`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  /* height: 100vh; */
  background-color: var(--background);
  color: var(--on-background);
  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    min-width: 100%;
    height: auto;
  }
  width: auto;
`;

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  @media (max-width: 768px) {
    width: auto;
  }
`;

const StyledItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 1rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  cursor: pointer;
  & .info {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem 0;
    & h4 {
      /* margin-bottom: 1rem; */
    }
  }
  & .image {
    width: 200px;
    height: 200px;
    overflow: hidden;
  }
  &:hover {
    .image div {
      transform: scale(1.1);
    }
  }
`;

const StyledImage = styled.div`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.imageUrl}) no-repeat center;
  background-size: cover;
  transition: all 0.5s;
`;

export { StyledBrowse, StyledFiltring, StyledList, StyledItem, StyledImage };
