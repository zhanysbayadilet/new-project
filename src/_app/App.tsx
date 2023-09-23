import React from 'react';
import Root from "./Root";
import {CssVarsProvider} from '@mui/joy/styles';
import {theme} from "./Theme";

function App() {
  return (
      <CssVarsProvider theme={theme}>
        <Root/>
      </CssVarsProvider>
  );
}

export default App;
