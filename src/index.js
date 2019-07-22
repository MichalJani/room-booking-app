import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import "./index.css";
import App from "./components/App/App";

ReactDOM.render(
  // <ThemeProvider theme={theme}>
    // <CssBaseline />
    <App />
  // </ThemeProvider>
  ,
  document.getElementById("root")
);
