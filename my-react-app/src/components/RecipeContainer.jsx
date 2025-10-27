import Recipe from "./Recipe"
import {recipes} from "../data/data.js"

function RecipeContainer (props) {
    return (
        <div className="recipeContainer">
            {recipes.map(recipe => <Recipe recipe={recipe} />)}
        </div>
    );
}

export default RecipeContainer
