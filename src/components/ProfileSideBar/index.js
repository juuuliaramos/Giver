import { Avatar, Box, Stack, Text, Sidebar } from "grommet";

import { Achievement, MailOption, Phone, List, Location } from "grommet-icons";

import { Container, BoxInfo } from "./style";

const SidebarHeader = ({ image, name }) => (
  <Box align="center" gap="small" direction="row" margin={{ bottom: "large" }}>
    <Stack alignSelf="start" align="center" anchor="top-right">
      <Avatar src={image} size="xlarge" />
      <Box pad="small" background="green" round responsive={false} />
    </Stack>
    <Text>{name}</Text>
  </Box>
);

const MainNavigation = ({ score, email, phone, interests, location }) => (
  <Box gap="large" responsive={false} align="start">
    <BoxInfo>
      <Achievement />
      {score} ryu
    </BoxInfo>
    <BoxInfo>
      <MailOption />
      {email}
    </BoxInfo>
    <BoxInfo>
      <Phone />
      {phone}
    </BoxInfo>
    <BoxInfo>
      <List />
      {interests}
    </BoxInfo>
    <BoxInfo>
      <Location />
      {location}
    </BoxInfo>
  </Box>
);

const ProfileSideBar = ({
  image,
  name,
  score,
  email,
  phone,
  interests,
  location,
}) => (
  <Container>
    <Box direction="row" height={{ min: "100%" }}>
      <Sidebar
        responsive={false}
        background={{ color: "#FFC15E" }}
        header={<SidebarHeader image={image} name={name} />}
        pad={{ left: "medium", right: "large", vertical: "medium" }}
      >
        <MainNavigation
          score={score}
          email={email}
          phone={phone}
          interests={interests}
          location={location}
        />
      </Sidebar>
    </Box>
  </Container>
);

export default ProfileSideBar;
