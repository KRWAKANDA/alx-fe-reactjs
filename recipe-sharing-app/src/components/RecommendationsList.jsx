import { useRecipeStore } from './recipeStore';
import { useEffect } from 'react';

const RecommendationsList = () => {
  const { recommendations, generateRecommendations } = useRecipeStore((state) => ({
    recommendations: state.recommendations,
    generateRecommendations: state.generateRecommendations,
  }));

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  if (recommendations.length === 0) return <p>No recommendations available.</p>;

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Recommended for You</h2>
      {recommendations.map((recipe) => (
        <div key={recipe.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
