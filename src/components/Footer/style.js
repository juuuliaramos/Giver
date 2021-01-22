import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  height: 5%;
  background-color: #ff9f1c;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8em;

  a {
    color: white;
    margin: 0 auto;
  }

  a:hover {
    color: #000000;
    text-decoration: underline;
  }

  a:link {
    color: #ff0000;
    text-decoration: none;
    cursor: pointer;
  }

  p {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
