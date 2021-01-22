import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(#ffc15e, #f5ff90, #d6ffb7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Body = styled.div`
  width: 50%;
  height: 80%;
  background-color: white;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 3%;
  margin: 5% 0;

  img {
    border-radius: 50px;
    /* max-width: auto;
    max-height: 100%; */
    max-width: 60%;
    height: 100%;
  }

  h1 {
    color: #ff9f1c;
    margin: 1%;
  }

  section {
    width: 50%;
    height: 4%;
    border-radius: 50px;
    background-color: gray;
    opacity: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: fit-content;
    margin: 2%;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 5vh;
  background-color: #ff9f1c;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  div {
    margin: 0 1%;
  }
`;

export const StyledDescription = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

    p {
      width: 90%;
      height: fit-content;
      margin: 3%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    div {
      background-color: white;
    }
  }
`;

export const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 50px;
  margin-bottom: 3%;

  button {
    width: 20vh;
    height: 7vh;
    border: none;
    text-align: center;
    background-color: #ff9f1c;
    color: white;
    border-radius: 50px;
    font-size: 2em;
    margin: 1%;
    cursor: pointer;
  }
`;
