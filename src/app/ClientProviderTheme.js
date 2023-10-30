'use client'
import { createTheme, ThemeProvider } from "@mui/material";
const theme = createTheme({
  palette: {

    primary: {
        main: "#E94560",
    },

    secondary: {
        main: "#0F3460",
        dark: "#0C2A4D"
    },
     
    background: {
        default: "#F6F6F6",
        primary: "#434343",
        secondary: "#E0E0E0",
    },
},
  
  typography: {
    fontFamily: "OpenSans",
    h1: {
        fontSize: "60px",
        fontWeight: "800",
    },
    h2: {
        fontSize: "30px",
        fontWeight: "400",
    },
    h3: {
        fontSize: "30px",
        fontWeight: "100",
    },
    h4: {
        fontSize: "24px",
        fontWeight: "800",
    },
    h5: {
        fontSize: "24px",
        fontWeight: "400",
    },
    h6: {
        fontSize: "18px",
        fontWeight: "400",
    },
    subtitle1: {
        fontSize: "18px",
        fontWeight: "100",
    },
    subtitle2: {
        fontSize: "12px",
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