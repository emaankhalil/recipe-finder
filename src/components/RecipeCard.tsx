import { Recipe } from '@/data/mockRecipes';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, ChefHat, Heart } from 'lucide-react';
import { useSavedRecipes } from '@/contexts/SavedRecipesContext';
import { toast } from '@/hooks/use-toast';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const { saveRecipe, unsaveRecipe, isRecipeSaved } = useSavedRecipes();
  const isSaved = isRecipeSaved(recipe.id);

  const handleSaveToggle = () => {
    if (isSaved) {
      unsaveRecipe(recipe.id);
      toast({
        title: "Recipe removed",
        description: `${recipe.name} has been removed from your saved recipes.`
      });
    } else {
      saveRecipe(recipe);
      toast({
        title: "Recipe saved!",
        description: `${recipe.name} has been added to your saved recipes.`
      });
    }
  };

  return (
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300 border-orange-100">
      <div className="relative overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" />


        <div className="absolute top-2 right-2">
          <Badge variant="secondary" className="bg-white/90 text-orange-800">
            <Clock className="w-3 h-3 mr-1" />
            {recipe.cookingTime}m
          </Badge>
        </div>

        <div className="absolute top-2 left-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleSaveToggle}
            className={`p-2 rounded-full transition-colors ${
            isSaved ?
            'bg-red-500 hover:bg-red-600 text-white' :
            'bg-white/90 hover:bg-white text-gray-600 hover:text-red-500'}`
            }>

            <Heart className={`h-4 w-4 ${isSaved ? 'fill-current' : ''}`} />
          </Button>
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-semibold text-gray-800 line-clamp-2">
            {recipe.name}
          </CardTitle>
          <Badge variant="outline" className="ml-2 shrink-0">
            <ChefHat className="w-3 h-3 mr-1" />
            {recipe.difficulty}
          </Badge>
        </div>
        <CardDescription className="text-sm text-gray-600 line-clamp-2">
          {recipe.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col">
        <div className="mb-3">
          <p className="text-xs font-medium text-gray-500 mb-1">Key Ingredients:</p>
          <p className="text-sm text-gray-700 line-clamp-2">
            {recipe.ingredients.slice(0, 4).join(', ')}
            {recipe.ingredients.length > 4 && '...'}
          </p>
        </div>
        
        {recipe.dietaryTags.length > 0 &&
        <div className="mb-3">
            <div className="flex flex-wrap gap-1">
              {recipe.dietaryTags.map((tag) =>
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs bg-green-100 text-green-800 hover:bg-green-200">

                  {tag}
                </Badge>
            )}
            </div>
          </div>
        }
        
        <div className="mt-auto pt-2">
          <Button
            className="w-full bg-orange-500 hover:bg-orange-600 text-white"
            onClick={() => {
              console.log('Viewing recipe:', recipe.name);
              // Future: Navigate to detailed recipe page
            }}>

            View Recipe
          </Button>
        </div>
      </CardContent>
    </Card>);

};

export default RecipeCard;