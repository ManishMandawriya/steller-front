import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Testmonial from './components/Home/Testmonial';
import Index from './components/Index';
import Layout from './components/Layouts/Layout';

function App() {
  return (
    <>
    {/* <Layout/> */}
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Index/>}/>
          <Route path='/test' element={<Testmonial/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
