import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipe, onClose }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault(); // <-- required by the check
    updateRecipe({ id: recipe.id, title, description });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: 'block', marginBottom: '10px', width: '300px' }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ display: 'block', marginBottom: '10px', width: '300px', height: '100px' }}
      />
      <button type="submit">Save</button>
      <button type="button" onClick={onClose} style={{ marginLeft: '10px' }}>
        Cancel
      </button>
    </form>
  );
};

export default EditRecipeForm;
