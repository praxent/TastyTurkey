import { Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../../api'
import { DetailCard } from '../../components/DetailCard'

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
  const [selectedRecipe, setSelectedRecipe] = useState<null | any>(null)
  const [recipes, setRecipes] = useState([])
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
        {recipes.map((recipe: any) => (
          <div className="recipe-row">
            <h3>{recipe.title}</h3>
            <Button onClick={() => setSelectedRecipe(recipe)}>View Recipe</Button>
          </div>
        ))}
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
      <Link to="/">
        <Button>Back</Button>
      </Link>
    </div>
  )
}
