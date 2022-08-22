import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Layout from './containers/Layout';

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
