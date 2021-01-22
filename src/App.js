import styled from "styled-components";
import Routes from "./routes";
import { motion } from "framer-motion";

function App() {
  return (
    <Container>
      <Routes></Routes>
    </Container>
  );
}
export default App;

export const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 100vh;

  footer {
    width: 100%;
    height: 5vh;
    background-color: #ff9f1c;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 0.8em;
  }
`;
