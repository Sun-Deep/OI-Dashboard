import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './index.css';
import App from './App';
import { customTheme } from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={customTheme}>
      <Router>
        <Routes>
          <Route path='/' element={<App />}></Route>
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

