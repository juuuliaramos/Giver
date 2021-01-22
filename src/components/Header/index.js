import React from "react";
import { useHistory } from "react-router-dom";
import { Header, Button, Box } from "grommet";
import { Home, Login, Logout, Flows, User, Clipboard } from "grommet-icons";
import { Container } from "./style";
import Modal from "../Modal";
import CardLogin from "../CardLogin";
import CardRegister from "../CardRegister";
import { useSelector } from "react-redux";

export const HeaderAll = ({ setShowContainer }) => {
  const history = useHistory();
  const token = useSelector((state) => state.loginData.token);
  return (
    <Container>
      <Header background="#FF9F1C">
        <Button
          icon={<Home />}
          hoverIndicator
          title="Home"
          onClick={() => history.push("/")}
        />

        {token ? (
          <Box direction="row" justify="between">
            <Button
              icon={<Flows />}
              hoverIndicator
              title="Feed"
              onClick={() => history.push("/feed")}
            />

            <Button
              icon={<User />}
              hoverIndicator
              title="Meu perfil"
              onClick={() => history.push("/profile")}
            />

            <Button
              icon={<Logout />}
              hoverIndicator
              title="Logout"
              onClick={() => {
                history.push("/");
                localStorage.clear();
              }}
            />
          </Box>
        ) : (
          <Box direction="row" justify="between">
            <Modal
              setShowContainer={setShowContainer}
              icon={<Clipboard />}
              title="Cadastre-se"
            >
              <CardRegister />
            </Modal>

            <Modal
              setShowContainer={setShowContainer}
              icon={<Login />}
              title="Login"
            >
              <CardLogin />
            </Modal>
          </Box>
        )}
      </Header>
    </Container>
  );
};

export default HeaderAll;
