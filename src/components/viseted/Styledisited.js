import styled from "styled-components";

const StyledVisited = styled.div`
  position: absolute;
  top: 70px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 2rem;
`;

const StyledHotel = styled.div`
  width: 350px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  padding: 0.5rem;
  padding-bottom: 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  cursor: pointer;
`;

const StyledImage = styled.div`
  width: 100%;
  height: 100px;
  background: url(${(props) => props.bg}) no-repeat center;
  background-size: cover;
`;

export { StyledVisited, StyledHotel, StyledImage };
