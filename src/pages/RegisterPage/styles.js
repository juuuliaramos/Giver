import styled from "styled-components";
import hands from "../../img/hands.jpeg";

export const HomePageLayout = styled.div`
  width: 100vw;
  max-width: 100%;
  height: fit-content;
  top: 3vh;
  background-image: url(${hands});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 70px 0;  
`;