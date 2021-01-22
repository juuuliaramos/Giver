import { useState } from "react";

import { Box, Grommet } from "grommet";

import { StyledButton, StyledLayer } from "./style";

const CenterLayer = ({ setShowContainer, children, icon, title }) => {
  const [open, setOpen] = useState();

  const onOpen = () => setOpen(true);

  const onClose = () => setOpen(undefined);

  return (
    <Grommet>
      <Box>
        <StyledButton
          icon={icon}
          title={title}
          hoverIndicator
          onClick={() => {
            onOpen();
            setShowContainer(false);
          }}
          plain
        />
      </Box>
      {open && (
        <StyledLayer
          position="center"
          onClickOutside={() => {
            onClose();
            setShowContainer(true);
          }}
          onEsc={() => {
            onClose();
            setShowContainer(true);
          }}
        >
          {children}
        </StyledLayer>
      )}
    </Grommet>
  );
};

export default CenterLayer;
