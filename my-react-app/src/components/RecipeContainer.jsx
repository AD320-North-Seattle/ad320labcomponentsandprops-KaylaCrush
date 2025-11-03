import Recipe from "./Recipe"

function RecipeContainer (props) {
    return (
        <div className="recipeContainer">
            {props.data.map(recipe => <Recipe recipe={recipe} />)}
        </div>
    );
}

export default RecipeContainer
