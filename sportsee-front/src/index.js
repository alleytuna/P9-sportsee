import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';

fetch('datas.json').then((response) => {
  console.log(response.json())
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
