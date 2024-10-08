import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Project from './pages/Project'
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:title" element={<Project />} />
        <Route path='*' element={<ErrorPage/>} />
    </Routes>

    </>
  )
}

export default App