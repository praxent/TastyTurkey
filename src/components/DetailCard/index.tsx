import { Button } from '@mui/material'
import React from 'react'
import logo from '../../styles/assets/logo_turkey.png'
import './styles.scss'

interface Props {
  title: string
  ingredients: string[]
  temp: number
  time: number
  setSelectedRecipe: React.Dispatch<React.SetStateAction<any | null>>
}

export const DetailCard: React.FC<Props> = ({
  title,
  ingredients,
  temp,
  time,
  setSelectedRecipe,
}) => {
  return (
    <div id="detail-card">
      <div className="detail-card-header">
        <h3>{title}</h3>
        <img height={120} width={120} src={logo} alt="Turkey" />
      </div>

      <div className="detail-card-body">
        <h3>Ingredients:</h3>
        <ul>
          {ingredients.map((ingredient) => (
            <li key={Math.random()}>{ingredient}</li>
          ))}
        </ul>
        <h3>Instructions</h3>
        <ol>
          <li key={Math.random()}>Temp: {temp}</li>
          <li key={Math.random()}>Time: {time}</li>
        </ol>
      </div>

      <Button onClick={() => setSelectedRecipe(null)}>Close</Button>
    </div>
  )
}
