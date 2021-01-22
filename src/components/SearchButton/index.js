import { grommet, Box, Button, Grommet, Heading } from "grommet";
// import { grommet } from "grommet/themes";

const kindButtonTheme = {
  global: {
    colors: {
      brand: "#D6FFB7",
      "brand-contrast": "#993333",
      active: "#FF9F1C",
    },
    font: { family: "Arial" },
  },
  button: {
    default: {
      color: "text",
      border: undefined,
      padding: {
        horizontal: "12px",
        vertical: "8px",
      },
      margin: {
        horizontal: "10px",
      },
    },
    primary: {
      background: { color: "brand" },
      border: "undefined",
      color: "text-strong",
      font: { weight: "500" },
      padding: {
        horizontal: "12px",
        vertical: "8px",
      },
    },
    secondary: {
      border: { color: "brand", width: "4px" },
      color: "text",
      padding: {
        horizontal: "8px",
        vertical: "4px",
      },
    },
    active: {
      background: { color: "brand-contrast" },
      color: "text",
      secondary: {
        background: "none",
        border: {
          color: "brand-contrast",
        },
      },
    },
    disabled: {
      opacity: 0.3,
      secondary: {
        border: { color: "text-weak" },
      },
    },
    hover: {
      background: { color: "active" },
      secondary: {
        border: { color: "active" },
      },
    },
  },
};

const customTheme = {
  global: {
    font: {
      family: "Arial",
    },
  },
  button: {
    border: {
      radius: undefined,
      color: "#2196f3",
    },
    disabled: {
      color: "orange",
      border: {
        color: "orange",
      },
      extend: `border: 10px dashed red;`,
    },
    padding: {
      vertical: "12px",
      horizontal: "24px",
    },
    primary: {
      color: "#2196f3",
      active: {
        border: {
          color: "red",
        },
        extend: `background: cadetblue;`,
      },
      extend: `background: skyblue; border: 5px dotted green;`,
    },
    extend: (props) => {
      let extraStyles = "";
      if (props.primary) {
        extraStyles = `
              text-transform: uppercase;
            `;
      }
      return `
            font-size: 12px;
            font-weight: bold;
            ${extraStyles}
          `;
    },
  },
};

const coloredButton = {
  button: {
    border: {
      color: "accent-1",
    },
    color: { dark: "accent-1", light: "dark-2" },
    primary: {
      color: "neutral-2",
    },
  },
};

export const SearchButton = () => {
  return (
    <>
      <Grommet theme={kindButtonTheme}>
        <Box align="center" direction="row" gap="large">
          <Button
            background={{ color: "white" }}
            color="#D6FFB7"
            size="large"
            label="Search"
            primary
          />
        </Box>
      </Grommet>
    </>
  );
};
