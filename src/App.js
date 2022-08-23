import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreditEducat from './pages/CreditEducat/CreditEducat'
import './styles/styles.scss'
import './styles/App.css';


function App() {
  return (
    <BrowserRouter> 
      <CreditEducat>

      </CreditEducat>
    </BrowserRouter>
  );
}

export default App;
