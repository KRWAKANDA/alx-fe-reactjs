import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AddRecipe from "./components/AddRecipe";
import RecipeDetails from "./components/RecipeDetails";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/add-recipe" element={<AddRecipe />} />
                <Route path="/recipe/:id" element={<RecipeDetails />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

