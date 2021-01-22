import { useState } from "react";

import { useHistory } from "react-router-dom";

import { Box, Form, FormField, TextInput, Button } from "grommet";
import CardHeader from "../CardHeader";

import { MailOption, Hide, View, Lock, StatusGood } from "grommet-icons";

import axios from "axios";

import { useDispatch } from "react-redux";
import { dataLoginThunk } from "../../store/modules/UserLogin/thunks";

const UserLogin = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [reveal, setReveal] = useState(false);
  const [emailVal, setEmailVal] = useState(false);
  const [passwordVal, setPasswordVal] = useState(false);
  const [failedLogin, setFailedLogin] = useState(false);

  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const tryLogin = (values) => {
    axios
      .post("https://api-capstone-grupo04.herokuapp.com/login", {
        ...values,
      })
      .then((res) => {
        localStorage.setItem("authToken", JSON.stringify(res.data.accessToken));
        dispatch(dataLoginThunk(res.data));
        history.push("/feed");
      })
      .catch((err) => {
        console.log("erro", err);
        setFailedLogin(!failedLogin);
      });
  };

  return (
    <>
      <Box round>
        <CardHeader>
          <h2>Login</h2>
        </CardHeader>

        <Box align="center" justify="center" pad="large" direction="column">
          <Form
            value={value}
            onChange={(val) => setValue(val)}
            onSubmit={({ value: val }) => tryLogin(val)}
          >
            <Box direction="row">
              <FormField
                label="E-mail"
                name="email"
                icon={<MailOption />}
                required
                validate={[
                  {
                    regexp: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))+$/,
                    placeholder: "exemplo@ex.com",
                    message: "E-mail inválido.",
                  },
                  (email) => {
                    if (email.length > 5) {
                      setEmailVal(true);
                    }
                    return undefined;
                  },
                ]}
              />
              <Box align="center" justify="center">
                {emailVal && <StatusGood />}
              </Box>
            </Box>
            <Box direction="row">
              <FormField
                label="Senha"
                name="password"
                required
                icon={<Lock />}
                type={reveal ? "text" : "password"}
                validate={[
                  (password) => {
                    if (password.length > 2) {
                      setPasswordVal(true);
                    }
                    return undefined;
                  },
                ]}
              />
              <Box align="center" justify="center">
                {passwordVal && <StatusGood />}

                <Button
                  icon={
                    reveal ? <View size="medium" /> : <Hide size="medium" />
                  }
                  onClick={() => setReveal(!reveal)}
                />
              </Box>
            </Box>
            <Box align="center" pad="medium">
              <Button primary label="Enviar" type="submit" />
            </Box>
          </Form>
        </Box>
      </Box>
    </>
  );
};

export default UserLogin;
