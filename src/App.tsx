import React, { useState, useEffect } from 'react'
import logo from './styles/assets/logo_turkey.png'
import './styles/App.scss'
import Button from './components/Button'
import FormModal from './components/Modal'
import Form from './components/Form'
import { StyledAppBar } from './components/AppBar'
import api from './api'

function App() {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const handleOpen = () => {
    setModalOpen(true)
  }

  const getRecipes = async () => {
    try {
      const response = await api({
        path: 'recipes',
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
    <div className="App layout">
      <StyledAppBar />
      <header className="App-header" />
      <div className="app-container">
        <img src={logo} className="App-logo" alt="logo" />
        <Button onClick={handleOpen} text="Add Recipe" />
        <FormModal open={modalOpen} handleClose={() => setModalOpen(false)}>
          <Form />
        </FormModal>
      </div>
    </div>
  )
}

export default App
