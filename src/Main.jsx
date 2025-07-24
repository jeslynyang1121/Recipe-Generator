import { useState } from "react"
import IngredientsList from "./IngredientsList"
import ClaudeRecipe from "./ClaudeRecipe"
import { getRecipeFromMistral } from "./ai"

export default function Main() {
    const [ingredients, setIngredients] = useState([])
    const [recipe, setRecipe] = useState("")

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => (
            [...prevIngredients, newIngredient]
        ))
    }

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }

    return (
        <main>
            <form action={addIngredient}>
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            { ingredients.length > 0 && 
            < IngredientsList ingredients={ingredients} getRecipe={getRecipe}/>}

            {recipe!="" && < ClaudeRecipe recipe={recipe}/>}
        </main>
    )
}