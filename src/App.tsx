import { Routes, Route } from 'react-router-dom'
import React, { useState } from 'react'
import logo from './styles/assets/logo_turkey.png'
import './styles/App.scss'
import Button from './components/Button'
import FormModal from './components/Modal'
import Form from './components/Form'
import { StyledAppBar } from './components/AppBar'
import { Dashboard } from './pages/Dashboard'
import { Detail } from './pages/Detail'

function App() {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const handleOpen = () => {
    setModalOpen(true)
  }

  return (
    <div className="App layout">
      <StyledAppBar />
      <div className="app-container">
        <header className="App-header text-center">
          <img height="256" width="256" src={logo} className="App-logo" alt="logo" />
        </header>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="detail" element={<Detail />} />
        </Routes>

        <Button onClick={handleOpen} text="Add Recipe" />
        <FormModal open={modalOpen} handleClose={() => setModalOpen(false)}>
          <Form />
        </FormModal>
      </div>
    </div>
  )
}

export default App
