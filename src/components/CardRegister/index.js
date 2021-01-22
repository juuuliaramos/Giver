//OBS : arrumar o required ( nao consigo mudar o texto)
import CardHeader from "../CardHeader";

import {
  Box,
  Form,
  FormField,
  TextInput,
  MaskedInput,
  Text,
  Button,
  Heading,
} from "grommet";

import {
  MailOption,
  User,
  Phone,
  Hide,
  View,
  Lock,
  StatusGood,
} from "grommet-icons";

import { useState } from "react";

import { useHistory } from "react-router-dom";

import axios from "axios";

const UserRegister = () => {
  const history = useHistory();
  const [nameVal, setNameVal] = useState(false);
  const [lastNameVal, setLastNameVal] = useState(false);
  const [phoneVal, setPhoneVal] = useState(false);
  const [emailVal, setEmailVal] = useState(false);
  const [passwordVal, setPasswordVal] = useState(false);
  const [confirmPasswordVal, setConfirmPasswordVal] = useState(false);

  const [value, setValue] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [reveal, setReveal] = useState(false);

  const onFinish = (values) => {
    axios
      .post("https://api-capstone-grupo04.herokuapp.com/users", { ...values })
      .then((res) => {
        console.log(res);
        history.push("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box round>
      <CardHeader>
        <h2>Registre-se</h2>
      </CardHeader>

      <Box align="center" justify="center" pad="large">
        <Form
          value={value}
          validate="blur"
          onChange={(val) => setValue(val)}
          onSubmit={({ value: val }) => onFinish(val)}
        >
          <Box direction="row">
            <FormField
              label="Nome"
              name="name"
              icon={<User />}
              component={TextInput}
              required
              validate={[
                { regexp: /^[a-zA-Z]+$/i, message: "Somente letras." },
                (name) => {
                  if (name.length >= 3) {
                    setNameVal(true);
                  }
                  return undefined;
                },
              ]}
            />
            <Box align="center" justify="center">
              {nameVal && <StatusGood />}
            </Box>
          </Box>

          <Box direction="row">
            <FormField
              label="Sobrenome"
              name="lastName"
              icon={<User />}
              validate={[
                { regexp: /^[a-zA-Z ]+$/i, message: "Somente letras." },
                (lastName) => {
                  if (lastName.length >= 2) {
                    setLastNameVal(true);
                  }
                  return undefined;
                },
              ]}
            />
            <Box align="center" justify="center">
              {lastNameVal && <StatusGood />}
            </Box>
          </Box>

          <Box direction="row">
            <FormField
              label="Telefone"
              name="phone"
              icon={<Phone />}
              validate={[
                (phone) => {
                  if (phone.length === 10) {
                    setPhoneVal(true);
                  }
                  return undefined;
                },
              ]}
            />
            <Box align="center" justify="center">
              {phoneVal && <StatusGood />}
            </Box>
          </Box>

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
            <Button
              icon={reveal ? <View size="medium" /> : <Hide size="medium" />}
              onClick={() => setReveal(!reveal)}
            />
            <Box align="center" justify="center">
              {passwordVal && <StatusGood />}
            </Box>
          </Box>
          <Box direction="row">
            <FormField
              label="Confirmar Senha"
              name="confirmPassword"
              required
              icon={<Lock />}
              type={reveal ? "text" : "password"}
              validate={[
                (confirmPassword) => {
                  if (confirmPassword === value.password) {
                    setConfirmPasswordVal(true);
                    return;
                  }
                  return { message: "As senhas não estão iguais!" };
                },
              ]}
            />
            <Box align="center" justify="center">
              {confirmPasswordVal && <StatusGood />}
            </Box>
          </Box>
          <Box align="center">
            <Button primary label="Enviar" type="submit" />
          </Box>
        </Form>
      </Box>
    </Box>
  );
};

export default UserRegister;
