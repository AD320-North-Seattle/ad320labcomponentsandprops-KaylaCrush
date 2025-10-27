function Recipe(props){
    return (
    <div className="recipe">
      <h2>{props.recipe.name}</h2>
      <h3>Ingredients:</h3>
      <ul>
        {props.recipe.ingredients.map(item => (
            <li>{item}</li>
        ))}
      </ul>
      
      <h3>Instructions:</h3>
      <ol>
        {props.recipe.instructions.map(item => (
            <li>{item}</li>
        ))}
      </ol>

    </div>
  );
}

export default Recipe;
