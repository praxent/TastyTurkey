import React from 'react'
import { Routes, Route } from 'react-router-dom'

import logo from './styles/assets/logo_turkey.png'
import './styles/App.scss'
import { StyledAppBar } from './components/AppBar'
import { Dashboard } from './pages/Dashboard'
import { Detail } from './pages/Detail'

function App() {
  return (
    <div className="App">
      <StyledAppBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  )
}

export default App
