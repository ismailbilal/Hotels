import styled from "styled-components";

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 4;
  min-height: 70px;
  background-color: var(--background);
  color: var(--on-background);
  box-shadow: 0 0 5px #000;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  .fa-user {
    font-size: 2em;
    cursor: pointer;
    &:hover {
      color: var(--primary);
    }
  }
  .checkbox:checked + .label .ball {
    transform: translateX(24px);
  }
  .rigthSection {
    /* border: 1px solid; */
    display: flex;
    align-items: center;
    gap: 1rem;
    .checkbox {
      opacity: 0;
      position: absolute;
    }
    .label {
      width: 50px;
      height: 26px;
      background-color: var(--primary);
      color: var(--on-primary);
      display: flex;
      border-radius: 50px;
      align-items: center;
      justify-content: space-between;
      padding: 5px;
      position: relative;
      transform: scale(0.8);
      cursor: pointer;
      .ball {
        width: 20px;
        height: 20px;
        background-color: var(--secondary);
        position: absolute;
        top: 3px;
        left: 3px;
        border-radius: 50%;
        transition: transform 0.2s linear;
      }
      :hover {
        background-color: var(--primary-variant);
      }
    }
    .logButtns {
      display: flex;
      gap: 1rem;
      button {
        padding: 0.5rem 1rem;
        border: none;
        background-color: var(--primary);
        color: var(--on-primary);
        cursor: pointer;
        :hover {
          background-color: var(--primary-variant);
        }
      }
    }
  }
  @media (max-width: 768px) {
    .rigthSection {
      gap: 0.5rem;
      .logButtns {
        gap: 0.5rem !important;
        button {
          span {
            font-size: 0;
          }
        }
      }
    }
    padding: 0 1rem;
  }
`;

const StyledLogo = styled.div`
  border: 2px solid;
  outline: 2px solid var(--primary);
  background-color: var(--primary);
  color: var(--on-primary);
  transform: scale(1.5);
  padding: 0.2rem;
  margin-left: 16.5px;
`;

export { StyledHeader, StyledLogo };
