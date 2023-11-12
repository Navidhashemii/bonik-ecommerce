'use client'
import { createTheme, ThemeProvider } from "@mui/material";
const theme = createTheme({
  palette: {

    common: {
        white:"#fefefe"
    },

    primary: {
        main: "#efefef",
    },

    secondary: {
        main: "#E94560",
        light: "#ed6d82",
        dark: "#c83e55"
    },

    headerFooter: {
        main: "#0F3460",
        dark: "#0C2A4D"
    },
     
    background: {
        default: "#f6f6f6",
        white: "#fcfcfc",
        grey: "#434343",
        black: "#1c1c1c",
    },
},
  
  typography: {
    fontFamily: "OpenSans",
    h1: {
        fontSize: "60px"
    },
    h2: {
        fontSize: "30px"
    },
    h3: {
        fontSize: "28px"
    },
    h4: {
        fontSize: "26px",
    },
    h5: {
        fontSize: "24px",
    },
    h6: {
        fontSize: "18px"
    },
    subtitle1: {
        fontSize: "16px"
    },
    subtitle2: {
        fontSize: "14px",
    },
    button: {
        textTransform: "none"
    }
  }
  
});

const ClientProviderTheme = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
  };
  export default ClientProviderTheme;