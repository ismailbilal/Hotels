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
  gap: 1rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  padding: 0.8rem;
  background-color: var(--background);
  color: var(--on-background);
  & select {
    appearance: none;
    background-color: transparent;
    border: none;
    padding: 0 1em 0 0;
    margin: 0;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;
    z-index: 1;
    &::-ms-expand {
      display: none;
    }
    outline: none;
  }
  & .select {
    max-width: 150px;
    display: grid;
    grid-template-areas: "select";
    align-items: center;
    position: relative;
    select,
    &::after {
      grid-area: select;
    }
    min-width: 15ch;
    max-width: 30ch;
    border: 1px solid #777;
    border-radius: 0.25em;
    padding: 0.25em 0.5em;
    font-size: 1.25rem;
    cursor: pointer;
    line-height: 1.1;
    background-color: #fff;
    background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
    &:not(.select--multiple)::after {
      content: "";
      justify-self: end;
      width: 0.8em;
      height: 0.5em;
      background-color: var(--select-arrow);
      clip-path: polygon(100% 0%, 0 0%, 50% 100%);
    }
  }
  & select:focus + .focus {
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border: 2px solid blue;
    border-radius: inherit;
  }
  & .orderInput {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    & .input {
      display: flex;
      flex-direction: row;
      gap: 0.2rem;
      align-items: center;
    }
  }
  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    min-width: 100%;
    height: auto;
    & .select {
      max-width: 50px;
      min-width: 0;
    }
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

const StyledSearch = styled.input`
  border: 2px solid rgba(0, 0, 0, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  outline: none;
  :focus {
    border: 2px solid var(--primary);
  }
`;

export {
  StyledBrowse,
  StyledFiltring,
  StyledList,
  StyledItem,
  StyledImage,
  StyledSearch,
};
