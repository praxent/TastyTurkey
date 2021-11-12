import React from 'react'
import logo from './styles/assets/logo_turkey.png'
import './styles/App.scss'
import { StyledAppBar } from './components/AppBar'

function App() {
  return (
    <div className="App">
      <StyledAppBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  )
}

export default App
