import styled from "styled-components";

const StyledHotel = styled.div`
  position: absolute;
  top: 70px;
  min-width: 100%;
  min-height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 2rem;
  .mapDetail {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
  @media (max-width: 786px) {
    & .mapDetail {
      flex-direction: column;
    }
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

const StyledDetail = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  & .info {
    height: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.5rem;
    & form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.3rem;
      & textarea {
        width: 60%;
        min-width: 250px;
        border: none;
        outline: none;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
        border-radius: 8px;
        padding: 0.5rem;
        font-size: 1.2em;
      }
      & button {
        padding: 0.5rem 0.8rem;
        background-color: var(--primary);
        color: var(--on-primary);
        border: none;
        margin-top: 1rem;
        cursor: pointer;
      }
      & .errMsg {
        color: red;
        font-size: 14px;
        display: none;
        & strong {
          cursor: pointer;
          &:hover {
            opacity: 0.8;
          }
        }
      }
      & .succMsg {
        color: green;
        font-size: 15px;
        display: none;
      }
      & .msgVisible {
        display: block;
      }
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    order: 2;
  }
`;

const StyledImage = styled.div`
  height: 40%;
  min-height: 180px;
  background: url(${(props) => props.bg}) no-repeat center;
  background-size: cover;
  position: relative;
  & button {
    position: absolute;
    right: 1rem;
    top: 1rem;
    transform: scale(1.3);
    border: none;
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
    & .fa-bookmark {
      color: rgba(255, 255, 255, 0.8);
    }
  }
`;

const StyledRating = styled.div`
  & .wrapper {
    position: relative;
    display: inline-block;
    font-size: 14px;
  }

  & .wrapper input {
    border: 0;
    width: 1px;
    height: 1px;
    overflow: hidden;
    position: absolute !important;
    clip: rect(1px 1px 1px 1px);
    clip: rect(1px, 1px, 1px, 1px);
    opacity: 0;
  }

  & .wrapper label {
    position: relative;
    float: right;
    color: #c8c8c8;
  }

  & .wrapper label:before {
    margin: 2px;
    content: "\f005";
    font-family: FontAwesome;
    display: inline-block;
    font-size: 1.5em;
    color: #ccc;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  & .wrapper input:checked ~ label:before {
    color: #ffc107;
  }

  & .wrapper label:hover ~ label:before {
    color: #ffdb70;
  }

  & .wrapper label:hover:before {
    color: #ffc107;
  }
`;

const StyledReviewList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledReview = styled.div`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  & .review {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    & h4 {
      color: var(--secondary-variant);
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
      align-items: center;
      & .fas {
        font-size: 1.5em;
      }
    }
    & .dateRating {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.7rem;
      & em {
        display: flex;
        align-items: center;
        gap: 5px;
        font-family: sans-serif;
        & .fa-star {
          color: #ffc107;
          font-size: 0.8em;
        }
      }
    }
    & p {
      padding: 1rem;
      opacity: 0.9;
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  & button {
    background-color: transparent;
    border: none;
    color: red;
    font-size: 1.2em;
    cursor: pointer;
    padding: 1rem;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
    border-radius: 5px;
  }
`;

export {
  StyledHotel,
  StyledMap,
  StyledDetail,
  StyledImage,
  StyledRating,
  StyledReviewList,
  StyledReview,
};
