import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import recipesData from "../data/data.json"; // adjust path if needed

function HomePage() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        // Load recipes from data.json
        setRecipes(recipesData);
    }, []);

    return (
        <div className="p-6 max-w-5xl mx-auto">
            {/* Add Recipe Button */}
            <div className="flex justify-center mb-6">
                <Link
                    to="/add-recipe"
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                >
                    Add New Recipe
                </Link>
            </div>

            {/* Recipe List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                                <p className="text-gray-700 line-clamp-2">{recipe.summary}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default HomePage;
