import styled from "styled-components";

const StyledUsers = styled.div`
  position: absolute;
  top: 70px;
  min-height: calc(100vh - 70px);
  width: 100%;
  padding: 3rem;
`;

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  margin-bottom: 2rem;
`;

const StyledUser = styled.div`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  & .userInfo {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    & .img {
      color: var(--secondary-variant);
      font-size: 2em;
    }
    & .info {
      display: flex;
      flex-direction: column;
      color: rgba(0, 0, 0, 0.9);
      & .username {
        color: #000;
        font-size: 1.2em;
        font-weight: bold;
      }
    }
  }
  & .btns {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    & button {
      padding: 0.4rem 0.8rem;
      color: #fff;
      background-color: var(--secondary);
      border: none;
      cursor: pointer;
      :hover {
        background-color: var(--secondary-variant);
      }
    }
    & .delete {
      background-color: red;
      :hover {
        background-color: rgb(177, 0, 0);
      }
    }
  }
`;

export { StyledUsers, StyledList, StyledUser };
