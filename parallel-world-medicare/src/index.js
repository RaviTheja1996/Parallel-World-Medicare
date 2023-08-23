import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthContextProvider } from "./context/AuthContextProvider"
import { ThemeContextProvider } from './context/ThemeContextProvider';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <AuthContextProvider>
    <ThemeContextProvider>
      <BrowserRouter>
        <ChakraProvider>
          < App />
        </ChakraProvider>
      </BrowserRouter>
    </ThemeContextProvider>
  </AuthContextProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
