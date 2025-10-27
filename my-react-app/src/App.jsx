import "./App.css";
import RecipeContainer from "./components/RecipeContainer";
import {recipes} from "./data/data.js"

//App is the root of our application and where we load in our components.
function App() {
  return <div className="App">
    <RecipeContainer data={recipes} />
  </div>;
}

export default App;
