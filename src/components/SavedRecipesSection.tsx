import { useSavedRecipes } from '@/contexts/SavedRecipesContext';
import RecipeCard from './RecipeCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, BookOpen } from 'lucide-react';

const SavedRecipesSection = () => {
  const { savedRecipes } = useSavedRecipes();

  if (savedRecipes.length === 0) {
    return (
      <Card className="border-orange-100 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-gray-900">
            <Heart className="h-5 w-5 text-red-500" />
            <span>Saved Recipes</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No saved recipes yet</h3>
            <p className="text-gray-600">
              Start saving your favorite recipes by clicking the heart icon on any recipe card.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-orange-100 shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-gray-900">
          <Heart className="h-5 w-5 text-red-500 fill-current" />
          <span>Saved Recipes ({savedRecipes.length})</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {savedRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SavedRecipesSection;