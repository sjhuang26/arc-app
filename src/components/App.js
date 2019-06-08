import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import 'antd/dist/antd.css';
import './App.css';
import Body from './Body';
import { StoreProvider } from '../stores/root';

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
