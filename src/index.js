import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({
  /** Your theme override here */
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MantineProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MantineProvider>
);