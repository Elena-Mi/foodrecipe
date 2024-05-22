import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import video from './tomato.mp4'
import arrow from './arrow.png'
import MyRecipeComponent from './MyRecipeComponent';

function App() {
  const MY_ID = '817383b0';
  const MY_KEY = '%206b453ba41235603257c18062546d7e30';
  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('avocado');

  useEffect ( () => {
    const getRecipe =  async () => {
    const response = await fetch(
			`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`
		);
    const data = await response.json();
    setMyRecipes(data.hits);
    }
    getRecipe();
  },[wordSubmitted]);

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value);
  }
   const finalSearch = (e) => {
   e.preventDefault();
   setWordSubmitted(mySearch);
   }
  return (
		<div className='App'>
			<div className='container'>
				<video autoPlay loop muted>
					<source src={video} type='video/mp4' />
				</video>
				<h1 className='title'>Choose your favorite recipe</h1>
			</div>

			<div className='container'>
				<form onSubmit={finalSearch}>
					<input
						className='search'
						type='text'
						onChange={myRecipeSearch}
						value={mySearch}
					/>
				</form>
			</div>

			<div className='container'>
				<button onClick={finalSearch}>
					<img className='arrow' src={arrow} alt='arrows' />
				</button>
			</div>
      <div className="container">
        <h3 className='advice'>Just type in search any ingredients you want and get your daily meal. Bon Appetite!!</h3>
      </div>

			{myRecipes.map((element, index) => (
				<MyRecipeComponent
					key={index}
					label={element.recipe.label}
					image={element.recipe.image}
					calories={element.recipe.calories}
					ingredients={element.recipe.ingredientLines}
					cuisineType={element.recipe.cuisineType}
					dietLabels={element.recipe.dietLabels}
					mealType={element.recipe.mealType}
				/>
			))}
		</div>
	)
}

export default App;



// https://api.edamam.com/api/recipes/v2?type=public&q=bread&app_id=817383b0&app_key=%206b453ba41235603257c18062546d7e30