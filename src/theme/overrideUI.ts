import { createTheme, formLabelClasses, tableCellClasses } from "@mui/material";

const theme = createTheme({
  components: {
    // Name of the component

    MuiFormLabel: {
      styleOverrides: {
        // Name of the slot

        root: {
          color: "gray",
          [`&.${formLabelClasses.focused}`]: {
            color: "#1DB954",
          },
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: (props) =>
            props.variant === "contained" && props.color === "primary",
          style: {
            backgroundColor: "#1DB954",
          },
        },
        {
          props: (props) =>
            props.variant === "contained" && props.color === "error",
          style: {
            backgroundColor: "gray",
          },
        },
      ],
      styleOverrides: {
        root: {},
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#cdebd9", // customize background color here
          color: "rgb(89, 87, 87)", // customize text color here
          boxShadow: "none", // customize box shadow here
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          backgroundColor: "white", // customize background color here
          color: "white", // customize text color here
          boxShadow: "none", // customize box shadow here
          flexShrink: 0,
          whiteSpace: "nowrap",
          boxSizing: "border-box",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#e6f2eb",
          color: "rgb(89, 87, 87)",
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: "#cdebd9",
          color: "black",
          subheader: {},
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          [`&.${tableCellClasses.head}`]: {
            backgroundColor: "#1DB954",
            color: "white",
          },
          [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          border: 0,
        },
      },
    },

    // MuiList: {
    //   styleOverrides: {
    //     root: {
    //       //backgroundColor: "#1DB954",
    //     },
    //   },
    // },
  },
});

export default theme;
