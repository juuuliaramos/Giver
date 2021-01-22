//GROMMET COMPONENTS
import { Box, Form, FormField, TextInput, Button } from "grommet";

import {
  MailOption,
  User,
  Phone,
  Hide,
  View,
  Camera,
  Lock,
  StatusGood,
} from "grommet-icons";

//HOOKS
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const ProfileEdit = () => {
  const userData = useSelector((state) => state.loginData);
  const { token, data } = userData;
  const userId = Number(data.sub);

  const [nameVal, setNameVal] = useState(false);
  const [lastNameVal, setLastNameVal] = useState(false);
  const [phoneVal, setPhoneVal] = useState(false);
  const [emailVal, setEmailVal] = useState(false);
  const [passwordVal, setPasswordVal] = useState(false);

  const [value, setValue] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    profilePicture: "",
    password: "",
  });

  const { name, lastName, phone, email, profilePicture, password } = value;

  const checkData = () => {
    if (name === "") {
      delete value.name;
    }
    if (lastName === "") {
      delete value.lastName;
    }
    if (phone === "") {
      delete value.phone;
    }
    if (email === "") {
      delete value.email;
    }
    if (profilePicture === "") {
      delete value.profilePicture;
    }
    if (password === "") {
      delete value.password;
    }
  };

  checkData();

  const [reveal, setReveal] = useState(false);

  const onSubmit = () => {
    checkData();
    axios
      .patch(
        `https://api-capstone-grupo04.herokuapp.com/users/${userId}`,
        value,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Box round background="rgba(0, 0, 0, 0.7)" pad="medium">
      <Form value={value} onChange={(val) => setValue(val)} onSubmit={onSubmit}>
        <Box>
          <FormField
            label="Nome"
            name="name"
            icon={<User />}
            component={TextInput}
          ></FormField>
          <Box align="center" justify="center">
            {nameVal && <StatusGood />}
          </Box>
        </Box>

        <Box>
          <FormField label="Sobrenome" name="lastName" icon={<User />} />
          <Box align="center" justify="center">
            {lastNameVal && <StatusGood />}
          </Box>
        </Box>

        <Box>
          <FormField label="Telefone" name="phone" icon={<Phone />} />
          <Box align="center" justify="center">
            {phoneVal && <StatusGood />}
          </Box>
        </Box>

        <Box>
          <FormField label="E-mail" name="email" icon={<MailOption />} />
          <Box align="center" justify="center">
            {emailVal && <StatusGood />}
          </Box>
        </Box>

        <Box>
          <FormField
            label="Foto de Perfil"
            name="profilePicture"
            icon={<Camera />}
          />
        </Box>

        <Box direction="row">
          <FormField
            label="Senha"
            name="password"
            icon={<Lock />}
            type={reveal ? "text" : "password"}
          />

          <Button
            icon={reveal ? <View size="small" /> : <Hide size="small" />}
            onClick={() => setReveal(!reveal)}
          />

          <Box align="center" justify="center">
            {passwordVal && <StatusGood />}
          </Box>
        </Box>
        <Box align="center" pad="small">
          <Button primary label="Enviar" type="submit" />
        </Box>
      </Form>
    </Box>
  );
};

export default ProfileEdit;
