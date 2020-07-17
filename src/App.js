import React,{useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';

function App() {

  const APP_ID = "2fa5ce4e";
  const APP_KEY = '2833ce7cb7912353747a84b6bb9216c2';

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  
  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
      <button className="search-button" type="submit">Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe />
      ))}
    </div>
  );
}

export default App;
