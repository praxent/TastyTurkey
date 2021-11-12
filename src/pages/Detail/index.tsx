import { Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../../api'
import { DetailCard } from '../../components/DetailCard'
import { Recipe } from '../../models'

const getRecipes = async () => {
  try {
    return await api({
      path: 'Recipes',
      method: 'GET',
    })
  } catch {
    throw Error
  }
}

export const Detail = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<null | Recipe>(null)
  const [recipes, setRecipes] = useState<[] | Recipe[]>([])
  useEffect(() => {
    async function fetchRecipes() {
      setRecipes(await getRecipes())
    }

    fetchRecipes()
  }, [])

  return (
    <div id="background-gradient">
      <h1>Detail page</h1>

      <div className="recipes-wrapper">
        {recipes.map((recipe: Recipe) => (
          <div key={Math.random()} className="recipe-row">
            <h3>{recipe.title}</h3>
            <Button onClick={() => setSelectedRecipe(recipe)}>View Recipe</Button>
          </div>
        ))}
        <Link to="/">
          <Button>Back</Button>
        </Link>
      </div>
      {selectedRecipe !== null && (
        <DetailCard
          title={selectedRecipe.title}
          ingredients={selectedRecipe.ingredients}
          temp={selectedRecipe.temp}
          time={selectedRecipe.time}
          setSelectedRecipe={setSelectedRecipe}
        />
      )}
    </div>
  )
}
