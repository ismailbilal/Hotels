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
  .checkbox:checked + .label .ball {
    transform: translateX(24px);
  }
  .rigthSection {
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
    .sessionButton {
      position: relative;
      button {
        color: var(--primary);
        background-color: transparent;
        border: none;
        padding: 0.3rem 0.7rem;
        cursor: pointer;
        .fa-user {
          color: var(--background);
          background-color: var(--primary);
          border-radius: 50%;
          padding: 5px;
        }
        span {
          margin: 0 0.5rem;
        }
      }
      .userOptions {
        position: absolute;
        width: 150px;
        right: 0;
        top: 50px;
        background-color: var(--background);
        padding: 0.5rem;
        border-radius: 5px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        display: none;
        ul {
          list-style: none;
          & li {
            width: 100%;
            cursor: pointer;
            :hover {
              background-color: rgba(0, 0, 0, 0.1);
            }
            & button {
              width: 100%;
              text-align: left;
              color: var(--secondary-variant);
              padding: 0.6rem 0.4rem;
            }
          }
        }
      }
      :focus-within,
      :hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
      :focus-within {
        .userOptions {
          display: block;
        }
      }
    }
  }
  @media (max-width: 768px) {
    .rigthSection {
      gap: 0.5rem;
      .logButtns,
      .sessionButton {
        gap: 0.5rem !important;
        button {
          span {
            font-size: 0;
            margin: 0 0.2rem;
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
  cursor: pointer;
`;

export { StyledHeader, StyledLogo };
