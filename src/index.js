import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react'

import './index.css';
import App from './App';
import { customTheme } from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={customTheme}>
     <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

