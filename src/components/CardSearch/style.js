import styled from "styled-components";

export const DivContainer = styled.div`
  @media (max-width: 521px) {
    width: 80%;
  }

  box-sizing: border-box;
  height: 30%;
  width: 50%;
  background-color: #ff9f1c;
  border-radius: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 1% 0;
  padding: 2%;
`;

export const CardInput = styled.input`
  height: 50px;
  width: 70%;
  background-color: white;
  border-radius: 50px;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 1030px;
  height: 100%;
`;

// export const Btn = styled.button`
//   height: 4vh;
//   border: 2px solid white;
//   text-align: center;
//   background-color: #ff9f1c;
//   color: white;
//   border-radius: 50px;
//   font-size: 1.5em;
//   margin: 1%;
// `;
