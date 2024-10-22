/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import './assets/scss/style.scss';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
      </Routes>
    </Router>
  )
}