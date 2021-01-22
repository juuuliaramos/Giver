//GROMMET COMPONENTS
import {
  Box,
  Button,
  Form,
  FormField,
  RadioButtonGroup,
  Select,
  TextArea,
  TextInput,
  DateInput,
} from "grommet";

import { Camera } from "grommet-icons";

//HOOKS
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

//SOURCE DATA
import { brazilStates } from "../../Source/index";

//STYLES
import { PhotoContainer } from "./style";

const DonateTab = () => {
  const userData = useSelector((state) => state.loginData);
  const { token, data } = userData;
  const userId = Number(data.sub);

  console.log(token, userId);

  const [donation, setDonation] = useState("");
  const [donationState, setDonationState] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [model, setModel] = useState("");
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [frontSide, setfrontSide] = useState("");
  const [backSide, setBackSide] = useState("");
  const [side, setSide] = useState("");
  const [number, setNumber] = useState("");
  const [state, setState] = useState("");
  const [cep, setCep] = useState("");

  const [value, setValue] = useState({
    donation: "",
    donationState: "",
    brand: "",
    model: "",
    author: "",
    title: "",
    description: "",
    date: "",
    frontSide: "",
    backSide: "",
    side: "",
    number: "",
    state: "",
    cep: "",
  });

  const clear = () => {
    setDonationState("");
    setBrand("");
    setSize("");
    setModel("");
    setDate("");
    setDescription("");
    setfrontSide("");
    setBackSide("");
    setSide("");
    setTitle("");
    setAuthor("");
    setState("");
    setNumber("");
    setCep("");
  };

  const checkData = () => {
    setValue({
      donation: value.donation,
      donationState: value.donationState,
      brand: value.brand,
      model: value.model,
      author: value.author,
      title: value.title,
      description: value.description,
      date: value.date,
      frontSide: value.frontSide,
      backSide: value.backSide,
      side: value.side,
      number: value.number,
      state: value.state,
      cep: value.cep,
      userId: userId,
    });
    if (value.donation === "") {
      delete value.donation;
    }
    if (value.donationState === "") {
      delete value.donationState;
    }
    if (value.brand === "") {
      delete value.brand;
    }
    if (value.model === "") {
      delete value.model;
    }
    if (value.author === "") {
      delete value.author;
    }
    if (value.title === "") {
      delete value.title;
    }
    if (value.description === "") {
      delete value.description;
    }
  };

  const onSubmit = () => {
    checkData();
    axios
      .post("https://api-capstone-grupo04.herokuapp.com/produtos", value, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res);
        clear();
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box round background="rgba(0, 0, 0, 0.7)" direction="row" pad="medium">
      <Form
        name="userId"
        onChange={(value) => setValue(value)}
        onReset={() => {
          clear();
        }}
        onSubmit={onSubmit}
      >
        <FormField label="Tipo de Doação" name="donation">
          <RadioButtonGroup
            direction="row"
            name="donation"
            options={["Vestuário", "Livros", "Eletrônicos"]}
            value={donation}
            onChange={(event) => {
              setDonation(event.target.value);
              clear();
            }}
          />
        </FormField>

        {(donation === "Vestuário" || donation === "Eletrônicos") && (
          <FormField label="Marca" name="brand">
            <TextInput
              name="brand"
              value={brand}
              onChange={(event) => setBrand(event.target.value)}
            />
          </FormField>
        )}

        {donation === "Vestuário" && (
          <FormField label="Tamanho" name="size">
            <Select
              name="size"
              options={["P", "M", "G", "GG", "XGG"]}
              value={size}
              onChange={(event) => setSize(event.option)}
            />
          </FormField>
        )}

        {donation === "Eletrônicos" && (
          <FormField label="Modelo" name="model">
            <TextInput
              name="model"
              value={model}
              onChange={(event) => setModel(event.target.value)}
            />
          </FormField>
        )}

        {donation === "Livros" && (
          <Box>
            <FormField label="Autor" name="author">
              <TextInput
                name="author"
                value={author}
                onChange={(event) => setAuthor(event.target.value)}
              />
            </FormField>
            <FormField label="Título" name="title">
              <TextInput
                required
                name="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </FormField>
          </Box>
        )}

        <FormField label="Estado da Doação" name="donationState" required>
          <Select
            options={["Novo", "Semi-novo", "Usado"]}
            name="donationState"
          />
        </FormField>

        <FormField label="Fotos">
          <PhotoContainer direction="row">
            <TextInput
              icon={<Camera />}
              placeholder="Frontal"
              name="frontSide"
              value={frontSide}
              onChange={(event) => setfrontSide(event.target.value)}
            />

            <TextInput
              icon={<Camera />}
              placeholder="Traseira"
              name="backSide"
              value={backSide}
              onChange={(event) => setBackSide(event.target.value)}
            />

            <TextInput
              icon={<Camera />}
              placeholder="Lateral"
              name="side"
              value={side}
              onChange={(event) => setSide(event.target.value)}
            />
          </PhotoContainer>
        </FormField>

        <FormField label="Descrição" name="description">
          <TextArea
            name="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </FormField>

        <FormField label="Data para Sorteio">
          <DateInput
            name="date"
            value={date}
            format="dd/mm/yyyy"
            onChange={(event) => setDate(event.value)}
          />
        </FormField>

        <FormField label="Local de Entrega">
          <Box direction="row" justify="between">
            <FormField width="150px">
              <TextInput
                name="number"
                placeholder="Número"
                value={number}
                type="number"
                onChange={(event) => setNumber(event.target.value)}
              />
            </FormField>
            <FormField width="150px">
              <Select
                name="state"
                placeholder="Estado"
                options={brazilStates}
                value={state}
                onChange={(event) => setState(event.value)}
              />
            </FormField>
          </Box>
          <TextInput
            name="cep"
            placeholder="CEP"
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />
        </FormField>

        <Box direction="row" justify="evenly" margin={{ top: "medium" }}>
          <Button type="submit" label="Enviar" primary />
          <Button type="reset" label="Limpar" />
        </Box>
      </Form>
    </Box>
  );
};

export default DonateTab;
