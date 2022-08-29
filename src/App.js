import React from 'react';
import { BrowserRouter, Routes, } from 'react-router-dom';
// Componentes
import Layout from './containers/Layout';

// Estilos 
import './styles/styles.scss'
import './styles/App.css';


function App() {
  return (
    <BrowserRouter> 
        <Layout>
          <Routes>
          </Routes>
        </Layout>
    </BrowserRouter>
  );
}

export default App;
