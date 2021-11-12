import { Routes, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import logo from './styles/assets/logo_turkey.png'
import './styles/App.scss'
import Button from './components/Button'
import FormModal from './components/Modal'
import Form from './components/Form'
import { StyledAppBar } from './components/AppBar'
import api from './api'
import { Dashboard } from './pages/Dashboard'
import { Detail } from './pages/Detail'

function App() {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const handleOpen = () => {
    setModalOpen(true)
  }

  const getRecipes = async () => {
    try {
      const response = await api({
        path: 'Recipes',
        method: 'GET',
      })

      return response
    } catch {
      throw Error
    }
  }

  useEffect(() => {
    getRecipes()
  }, [])

  return (
    <div className="App">
      <StyledAppBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button onClick={handleOpen} text="Add Recipe" />
      </header>
      <FormModal open={modalOpen} handleClose={() => setModalOpen(false)}>
        <Form />
      </FormModal>
    </div>
  )
}

export default App
