import React, { useState } from 'react'
import { Alert, FormControl } from '@mui/material';
import { InputLabel } from '@mui/material';
import { Input } from '@mui/material';

import Button from '../Button'

const Form: React.FC = () => { 
    const [name, setName] = useState('')
    const [temp, setTemp] = useState('')
    const [time, setTime] = useState('')
    const [ingredients, setIngredients] = useState('')

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setName(e.target.value);
    }
    const handleChangeTemp = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setTemp(e.target.value);
    }
    const handleChangeTime = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setTime(e.target.value);
    }
    const handleChangeIngredients = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setIngredients(e.target.value);
    }
  
  return (
    <>
    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 50, marginTop: 20 }} className="input">
    <h2>Add your recipe</h2>
    <FormControl style={{ marginTop: 20}}>
      <InputLabel htmlFor="name">Name</InputLabel>
      <Input id="name" type='text' value={name} onChange={handleChangeName} style={{ width: '90%'}} />
    </FormControl>
    <FormControl style={{ marginTop: 20}}>
      <InputLabel htmlFor="temp">Temperature (F)</InputLabel>
      <Input id="temp" type='number' value={temp} onChange={handleChangeTemp} style={{ width: '90%'}} />
    </FormControl>
    <FormControl style={{ marginTop: 20}}>
      <InputLabel htmlFor="time">Time (min)</InputLabel>
      <Input id="time" type='number' value={time} onChange={handleChangeTime} style={{ width: '90%'}} />
    </FormControl>
    <FormControl style={{ marginTop: 20}}>
      <InputLabel htmlFor="ingredients">Ingredients</InputLabel>
      <Input id="ingredients" type='text' value={ingredients} onChange={handleChangeIngredients} style={{ width: '90%'}} multiline/>
    </FormControl>
  </div>
  <div style={{ marginLeft: 50, marginTop: 30 }}>
  <Button onClick={() => console.log("submit values to API")} text="Submit" />
  </div>
  </>
  );
}

export default Form;

