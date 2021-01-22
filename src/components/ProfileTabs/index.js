import ProfileEdit from "../ProfileEdit";
import DonateTab from "../DonateTab";
import { Box, grommet, Tab, Tabs } from "grommet";
import { deepMerge } from "grommet/utils";
import { useState } from "react";
import { Container } from "./style";

const ProfileTabs = () => {
  const [index, setIndex] = useState(0);

  const onActive = (nextIndex) => setIndex(nextIndex);

  const customTheme = deepMerge(grommet, {
    tab: {
      active: {
        color: "Dark",
      },
      background: "inherit",
      border: {
        side: "bottom",
        size: "xsmall",
        color: "#FFC15E",
      },
      color: "#FFC15E",
      hover: {
        background: "inherit",
      },
      margin: "20px",
      pad: {
        bottom: undefined,
        horizontal: "small",
      },
    },
    tabs: {
      gap: "xsmall",
      header: {
        background: "grey",
      },
    },
  });

  return (
    <Container theme={customTheme}>
      <Tabs activeIndex={index} onActive={onActive}>
        <Tab title="Editar Perfil">
          <Box margin="none" pad="large" align="center" background="accent-1">
            <ProfileEdit />
          </Box>
        </Tab>
        <Tab title="Doar">
          <Box margin="none" pad="large" align="center" background="accent-1">
            <DonateTab />
          </Box>
        </Tab>
        <Tab title="Meus Recebidos">
          <Box margin="none" pad="large" align="center" background="accent-1">
            <ProfileEdit />
          </Box>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default ProfileTabs;
