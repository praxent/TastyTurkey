import React, { useState } from 'react'
import { FormControl, InputLabel, Input } from '@mui/material'

import Button from '../Button'

const Form: React.FC = () => {
  const [title, setTitle] = useState('')
  const [temp, setTemp] = useState('')
  const [time, setTime] = useState('')
  const [ingredients, setIngredients] = useState('')

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value)
  }
  const handleChangeTemp = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTemp(e.target.value)
  }
  const handleChangeTime = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTime(e.target.value)
  }
  const handleChangeIngredients = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIngredients(e.target.value)
  }

  const handleSubmit = (): void => {
    console.log('submit')
  }

  return (
    <>
      <div
        style={{ display: 'flex', flexDirection: 'column', marginLeft: 50, marginTop: 20 }}
        className="input"
      >
        <h2>Add your recipe</h2>
        <FormControl style={{ marginTop: 20 }}>
          <InputLabel htmlFor="title">Title</InputLabel>
          <Input
            id="title"
            type="text"
            value={title}
            onChange={handleChangeTitle}
            style={{ width: '90%' }}
          />
        </FormControl>
        <FormControl style={{ marginTop: 20 }}>
          <InputLabel htmlFor="temp">Temperature (F)</InputLabel>
          <Input
            id="temp"
            type="number"
            value={temp}
            onChange={handleChangeTemp}
            style={{ width: '90%' }}
          />
        </FormControl>
        <FormControl style={{ marginTop: 20 }}>
          <InputLabel htmlFor="time">Time (min)</InputLabel>
          <Input
            id="time"
            type="number"
            value={time}
            onChange={handleChangeTime}
            style={{ width: '90%' }}
          />
        </FormControl>
        <FormControl style={{ marginTop: 20 }}>
          <InputLabel htmlFor="ingredients">Ingredients</InputLabel>
          <Input
            id="ingredients"
            type="text"
            value={ingredients}
            onChange={handleChangeIngredients}
            style={{ width: '90%' }}
            multiline
          />
        </FormControl>
      </div>
      <div style={{ marginLeft: 50, marginTop: 30 }}>
        <Button onClick={handleSubmit} text="Submit" />
      </div>
    </>
  )
}

export default Form
