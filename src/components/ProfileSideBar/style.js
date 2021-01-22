import styled from "styled-components";
import { Grommet } from "grommet";

export const Container = styled(Grommet)`
  width: 300px;
  overflow-y: hidden;
`;

export const BoxInfo = styled.label`
  display: flex;
  align-items: center;
  svg {
    margin-right: 20px;
  }
`;
