import React from "react";
import "./App.css";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import LoginForm from "./Login/LoginForm";
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

function App() {
  return (
    <ChakraProvider theme={theme}>
      <LoginForm />
    </ChakraProvider>
  );
}

export default App;
