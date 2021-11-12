import { Button } from '@mui/material'
import React from 'react'

import logo from '../../styles/assets/logo_turkey.png'
import './styles.scss'

interface Props {
  title: string
  ingredients: string[]
  instructions: string[]
  setSelectedRecipe: React.Dispatch<React.SetStateAction<number | null>>
}

export const DetailCard: React.FC<Props> = ({
  title,
  ingredients,
  instructions,
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
          {instructions.map((instruction) => (
            <li key={Math.random()}>{instruction}</li>
          ))}
        </ol>
      </div>

      <Button onClick={() => setSelectedRecipe(null)}>Close</Button>
    </div>
  )
}
