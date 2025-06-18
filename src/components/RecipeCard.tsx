import { Recipe } from '@/data/mockRecipes';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, ChefHat, Heart } from 'lucide-react';
import { useSavedRecipes } from '@/contexts/SavedRecipesContext';
import { useToast } from '@/hooks/use-toast';
import RecipeDetailModal from '@/components/RecipeDetailModal';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const { saveRecipe, unsaveRecipe, isRecipeSaved } = useSavedRecipes();
  const { toast } = useToast();
  const isSaved = isRecipeSaved(recipe.id);

  const handleSaveToggle = () => {
    console.log('Save button clicked for recipe:', recipe.name);
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
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300 border-orange-100" data-id="l7huhqncg">
      <div className="relative overflow-hidden" data-id="s60b521lf">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
          data-id="2qi61q4i5" />


        <div className="absolute top-2 right-2" data-id="6a90b5hhu">
          <Badge variant="secondary" className="bg-white/90 text-orange-800" data-id="y9luk33li">
            <Clock className="w-3 h-3 mr-1" data-id="deaja4cvy" />
            {recipe.cookingTime}m
          </Badge>
        </div>

        <div className="absolute top-2 left-2" data-id="7fhdwmnfw">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleSaveToggle}
            className={`p-2 rounded-full transition-colors ${
            isSaved ?
            'bg-red-500 hover:bg-red-600 text-white' :
            'bg-white/90 hover:bg-white text-gray-600 hover:text-red-500'}`
            }
            data-id="be3ip3pe1">

            <Heart className={`h-4 w-4 ${isSaved ? 'fill-current' : ''}`} data-id="9zb7ud4or" />
          </Button>
        </div>
      </div>
      
      <CardHeader className="pb-2" data-id="8k7prc1pl">
        <div className="flex items-start justify-between" data-id="n23jqyj6e">
          <CardTitle className="text-lg font-semibold text-gray-800 line-clamp-2" data-id="fao9bqori">
            {recipe.name}
          </CardTitle>
          <Badge variant="outline" className="ml-2 shrink-0" data-id="35f95x734">
            <ChefHat className="w-3 h-3 mr-1" data-id="jx27xxd2y" />
            {recipe.difficulty}
          </Badge>
        </div>
        <CardDescription className="text-sm text-gray-600 line-clamp-2" data-id="283ren1n9">
          {recipe.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col" data-id="y962g2lvu">
        <div className="mb-3" data-id="jiyxueqfm">
          <p className="text-xs font-medium text-gray-500 mb-1" data-id="lr5uy6eej">Key Ingredients:</p>
          <p className="text-sm text-gray-700 line-clamp-2" data-id="y2etno8vq">
            {recipe.ingredients.slice(0, 4).join(', ')}
            {recipe.ingredients.length > 4 && '...'}
          </p>
        </div>
        
        {recipe.dietaryTags.length > 0 &&
        <div className="mb-3" data-id="bxydbnwfk">
            <div className="flex flex-wrap gap-1" data-id="vh1avw8pw">
              {recipe.dietaryTags.map((tag) =>
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs bg-green-100 text-green-800 hover:bg-green-200"
              data-id="n41gnk8ad">

                  {tag}
                </Badge>
            )}
            </div>
          </div>
        }
        
        <div className="mt-auto pt-2" data-id="d3sngu1t6">
          <RecipeDetailModal recipe={recipe}>
            <Button
              className="w-full bg-orange-500 hover:bg-orange-600 text-white"
              data-id="39hgx1gkr">
              View Recipe
            </Button>
          </RecipeDetailModal>
        </div>
      </CardContent>
    </Card>);

};

export default RecipeCard;