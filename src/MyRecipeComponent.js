import icon from './icon.png';
function MyRecipeComponent({
	label,
	image,
	calories,
	ingredients,
	cuisineType,
	dietLabels,
	mealType,
}) {
	return (
		<div>
			<div className='container'>
				<h2 className='nameText'>{label}</h2>
			</div>

			<div className='container'>
				<img className='recipeImage' src={image} alt='food' />
			</div>

			<div className='container'>
				<p className='calories'> {calories.toFixed()} calories</p>
			</div>

			<ul className='container list'>
				{ingredients.map((ingredient, index) => (
					<li key={index}>
						<img className='icon' src={icon} alt='cross' />
						{ingredient}
					</li>
				))}
			</ul>

			<div className='container'>
				<p className='mealType'>{mealType}</p>
			</div>
			<div className='container'>
				<p className='typeFood'>{cuisineType} food</p>
			</div>

			<div className='container'>
				<p className='diet'>{dietLabels}</p>
			</div>
			<div className='container'>
				<p className='line'> _______________________________________</p>
			</div>
		</div>
	)
}
export default MyRecipeComponent ;