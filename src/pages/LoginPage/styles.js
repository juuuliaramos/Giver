import styled from "styled-components";
import hands from "../../img/hands.jpeg";

export const HomePageLayout = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  top: 3vh;
  background-image: url(${hands});
  display: flex;
  justify-content: center;
  align-items: center;
`;