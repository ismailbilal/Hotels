import styled from "styled-components";
import bcg from "../../images/homeBg2.jpg";

const StyledFormAddHotel = styled.div`
  background: url(${bcg}) no-repeat center;
  background-size: cover;
  width: 100vw;
  min-height: calc(100vh - 70px);
  position: absolute;
  top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const StyledForm = styled.form`
  width: clamp(500px, 70%, 700px);
  max-width: 100%;
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  & div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    & div {
      flex-direction: row;
      justify-content: space-between;
      gap: 2rem;
      align-items: center;
      & input,
      & select {
        width: 350px;
        padding: 0.3rem 0.6rem;
        border-radius: 5px;
        border: 2px solid #c4c4c4;
        outline: none;
        &:focus {
          border-color: var(--primary);
        }
        max-width: 100%;
      }
    }
    & .inlineDiv {
      max-width: calc(50% - 1rem);
      & input,
      & select {
        max-width: 50%;
        margin-top: 0.5rem;
      }
    }
  }
  & button {
    padding: 0.4rem 3rem;
    background-color: var(--primary);
    color: var(--on-primary);
    border: none;
    border-radius: 5px;
    align-self: center;
    &:hover {
      background-color: var(--primary-variant);
    }
    margin-top: 1.5rem;
  }
  @media (max-width: 786px) {
    & .divInput {
      flex-direction: column;
      gap: 0;
      align-items: flex-start;
      & div {
        /* border: 1px solid; */
        min-width: 100%;
      }
    }
  }
`;

export { StyledFormAddHotel, StyledForm };
