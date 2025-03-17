import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { StrictMode } from 'react'
import { createTheme, ThemeProvider } from "@mui/material/styles";


const theme = createTheme({
  palette: {
    primary: {
      main: "#F79A1E", // 500
      light: "#FBCB85", // 200
      dark: "#DC5818", // 900
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#2196F3", // 500
      light: "#BBDEFB", // 100
      dark: "#0D47A1", // 900
      contrastText: "#FFFFFF",
    },

    error: {
      main: "#B00020",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#000000",
      secondary: "#00000090",
    },
    action: {
      disabled: '#FFF',
      disabledBackground: '#00000061'
    }
  },
  typography: {
    fontFamily: "Montserrat, Arial, sans-serif",
    h1: {
      fontSize: "96px",
      fontWeight: 300, // Light
    },
    h2: {
      fontSize: "60px",
      fontWeight: 300, // Light
    },
    h3: {
      fontSize: "48px",
      fontWeight: 400, // Regular
    },
    h4: {
      fontSize: "34px",
      fontWeight: 400, // Regular
    },
    h5: {
      fontSize: "24px",
      fontWeight: 400, // Regular
    },
    h6: {
      fontSize: "20px",
      fontWeight: 500, // Medium
    },
    subtitle1: {
      fontSize: "16px",
      fontWeight: 400, // Regular
    },
    subtitle2: {
      fontSize: "14px",
      fontWeight: 500, // Medium
    },
    body1: {
      fontSize: "16px",
      fontWeight: 400, // Regular
    },
    body2: {
      fontSize: "14px",
      fontWeight: 400, // Regular
    },
    button: {
      fontSize: "14px",
      fontWeight: 500, // Medium
      textTransform: "uppercase",
    },
    caption: {
      fontSize: "12px",
      fontWeight: 400, // Regular
    },
    overline: {
      fontSize: "10px",
      fontWeight: 400, // Regular
      textTransform: "uppercase",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
        outlined: {
          backgroundColor: '#fff',
          color: '#000'
        }
      },
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
