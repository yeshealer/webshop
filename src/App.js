import React, { Suspense } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import GlobalStyle from './GlobalStyle';
import Home from './Views/Home'
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
