import { Link } from "react-router-dom";

...

{recipes.map((recipe) => (
  <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
        <p className="text-gray-700">{recipe.summary}</p>
      </div>
    </div>
  </Link>
))}
