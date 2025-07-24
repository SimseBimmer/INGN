import { useState } from 'react';
import './App.scss';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { NavBar } from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AllePage } from './pages/AllePage/AllePage';
import { IndlandPage } from './pages/IndlandPage/IndlandPage';
import { UdlandPage } from './pages/UdlandPage/UdlandPage';
import { TeknologiPage } from './pages/TeknologiPage/TeknologiPage';
import { SportPage } from './pages/SportPage/SportPage';
import { PolitikPage } from './pages/PolitikPage/PolitikPage';
import { SamfundPage } from './pages/SamfundPage/SamfundPage';
import { LoginPage } from "./pages/LoginPage/LoginPage";
import ArticlePage from "./pages/ArticlePage/ArticlePage";

import { ErrorPage } from './pages/ErrorPage/ErrorPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/Alle" replace />} />
            <Route path="/Alle" element={<AllePage />} />
            <Route path="/Indland" element={<IndlandPage />} />
            <Route path="/Udland" element={<UdlandPage />} />
            <Route path="/Teknologi" element={<TeknologiPage />} />
            <Route path="/Sport" element={<SportPage />} />
            <Route path="/Politik" element={<PolitikPage />} />
            <Route path="/Samfund" element={<SamfundPage />} />
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/article/:id" element={<ArticlePage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;