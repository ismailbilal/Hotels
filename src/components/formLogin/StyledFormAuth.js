import styled from "styled-components";
import image from "../../images/travel.svg";

const StyledContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  .exit {
    position: absolute;
    border: none;
    outline: none;
    background-color: transparent;
    height: 30px;
    width: 30px;
    right: 1rem;
    top: 1rem;
    border-radius: 50%;
    .fa-times {
      font-size: 1.5em;
    }
    :hover {
      background-color: var(--secondary);
    }
  }
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: var(--primary);
  width: 100%;
  min-height: 100vh;
  padding: 10px 20px;
  .image {
    background-image: url(${image});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    height: 65%;
  }
  .text {
    text-align: center;
    color: white;
    font-size: 18px;
  }
  @media (max-width: 768px) {
    .image {
      height: 70vh;
    }
  }
`;

const StyledForm = styled.form`
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 50px;
  min-width: 500px;
  max-width: none;
  .title {
    font-family: 25px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  label {
    display: block;
    margin-bottom: 5px;
  }
  div {
    position: relative;
    margin-bottom: 15px;
    input {
      width: 100%;
      height: 40px;
      border-radius: 8px;
      outline: none;
      border: 2px solid #c4c4c4;
      padding: 0 30px;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
      :focus {
        border: 2px solid var(--primary);
      }
    }
    i {
      position: absolute;
      padding: 10px;
    }
  }
  .failure-icon,
  .error {
    color: red;
  }
  .success-icon {
    color: green;
  }
  .error {
    font-size: 14.5px;
    margin-top: 5px;
  }
  .success-icon,
  .failure-icon {
    right: 0;
    opacity: 0;
  }
  button {
    margin-top: 15px;
    width: 100%;
    height: 45px;
    background-color: var(--primary);
    border: 2px solid var(--primary);
    border-radius: 8px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.1s ease;
    :hover {
      opacity: 0.8;
    }
  }
  .btn {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 15px;
    .btn-1,
    .btn-2 {
      padding: 10px 5px;
      width: 100%;
      display: flex;
      gap: 15px;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }
    .btn-2 {
      background-color: var(--primary);
      color: white;
    }
  }
  .or {
    text-align: center;
  }
  .question,
  .admin {
    font-size: 15px;
    span {
      color: var(--primary);
      cursor: pointer;
    }
  }
  .admin {
    text-align: center;
    margin: 1rem 0;
  }
  @media (max-width: 768px) {
    height: 100vh;
    min-width: 0;
  }
`;

export { StyledContainer, StyledForm, StyledContent };
