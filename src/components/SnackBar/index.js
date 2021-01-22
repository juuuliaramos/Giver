import React from "react";

import { FormClose, StatusGood } from "grommet-icons";

import { Box, Button, Grommet, Layer, Text } from "grommet";
import { grommet } from "grommet/themes";

const NotificationLayer = ({ open }) => {
  return (
    <Box>
      {open && (
        <Layer
          position="bottom"
          modal={false}
          margin={{ vertical: "medium", horizontal: "small" }}
          onEsc={open}
          responsive={false}
          plain
        >
          <Box
            align="center"
            direction="row"
            gap="small"
            justify="between"
            round="medium"
            elevation="medium"
            pad={{ vertical: "xsmall", horizontal: "small" }}
            background="status-ok"
          >
            <Box align="center" direction="row" gap="xsmall">
              <StatusGood />
              <Text>
                A new virtual machine has been successfully added (this Layer
                will close after 3 seconds)
              </Text>
            </Box>
            <Button icon={<FormClose />} onClick={open} plain />
          </Box>
        </Layer>
      )}
    </Box>
  );
};

export default NotificationLayer;
