import React, { useState } from 'react'
import logo from './styles/assets/logo_turkey.png'
import './styles/App.scss'
import Button from './components/Button'
import FormModal from './components/Modal'
import Form from './components/Form'
import { StyledAppBar } from './components/AppBar'

function App() {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const handleOpen = () => {
    setModalOpen(true)
  }
  return (
    <div className="App">
      <StyledAppBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Button onClick={handleOpen} text="Add Recipe" />
      <FormModal open={modalOpen} handleClose={() => setModalOpen(false)}>
        <Form />
      </FormModal>
    </div>
  )
}

export default App
