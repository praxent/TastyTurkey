import { Button } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { DetailCard } from '../../components/DetailCard'

const MOCK_INGREDIENTS = [
  '20-Pound turkey',
  '1 Onion',
  '1 Lemon',
  '1 Apple',
  '.75 ounce container fresh rosemary ',
  '.75 ounce container fresh thyme ',
  '.75 ounce container fresh sage ',
]

const MOCK_INSTRUCTIONS = ['Buy turkey', 'Mix ingredients', 'Make sure it is perfect!']

export const Detail = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<null | number>(null)
  return (
    <div id="background-gradient">
      <h1>Detail page</h1>

      <div className="recipes-wrapper">
        <div className="recipe-row">
          <h3>Thanksgiving Turkey</h3>
          <Button onClick={() => setSelectedRecipe(0)}>View Recipe</Button>
        </div>
        <div className="recipe-row">
          <h3>Another awesome Turkey</h3>
          <Button onClick={() => setSelectedRecipe(0)}>View Recipe</Button>
        </div>
      </div>
      {selectedRecipe !== null && (
        <DetailCard
          title="Thanksgiving Turkey"
          ingredients={MOCK_INGREDIENTS}
          instructions={MOCK_INSTRUCTIONS}
          setSelectedRecipe={setSelectedRecipe}
        />
      )}
      <Link to="/">
        <Button>Back</Button>
      </Link>
    </div>
  )
}
