import { Recipe } from '@/data/mockRecipes';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Clock, ChefHat, Users, Heart } from 'lucide-react';
import { useSavedRecipes } from '@/contexts/SavedRecipesContext';
import { useToast } from '@/hooks/use-toast';

interface RecipeDetailModalProps {
  recipe: Recipe;
  children: React.ReactNode;
}

const RecipeDetailModal = ({ recipe, children }: RecipeDetailModalProps) => {
  const { saveRecipe, unsaveRecipe, isRecipeSaved } = useSavedRecipes();
  const { toast } = useToast();
  const isSaved = isRecipeSaved(recipe.id);

  const handleSaveToggle = () => {
    console.log('Save button clicked in modal for recipe:', recipe.name);
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
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] flex flex-col p-0">
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <DialogTitle className="text-2xl font-bold text-gray-800 mb-2">
                {recipe.name}
              </DialogTitle>
              <p className="text-gray-600 mb-4">{recipe.description}</p>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1 text-orange-600">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">{recipe.cookingTime} minutes</span>
                </div>
                <div className="flex items-center gap-1 text-blue-600">
                  <ChefHat className="w-4 h-4" />
                  <span className="text-sm font-medium">{recipe.difficulty}</span>
                </div>
                <div className="flex items-center gap-1 text-green-600">
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-medium">4 servings</span>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4">
                {recipe.dietaryTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="text-xs bg-green-100 text-green-800"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            
            <Button
              onClick={handleSaveToggle}
              variant={isSaved ? "default" : "outline"}
              className={`ml-4 ${
                isSaved 
                  ? 'bg-red-500 hover:bg-red-600 text-white' 
                  : 'border-red-500 text-red-500 hover:bg-red-50'
              }`}
            >
              <Heart className={`w-4 h-4 mr-2 ${isSaved ? 'fill-current' : ''}`} />
              {isSaved ? 'Saved' : 'Save Recipe'}
            </Button>
          </div>
        </DialogHeader>

        <ScrollArea className="flex-1 px-6 pb-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Recipe Image */}
            <div className="space-y-4">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-64 object-cover rounded-lg shadow-sm"
              />
            </div>

            {/* Ingredients */}
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Ingredients</h3>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li
                      key={index}
                      className="flex items-center text-gray-700 text-sm"
                    >
                      <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0"></span>
                      <span className="capitalize">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <Separator className="my-6" />

          {/* Instructions */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Instructions</h3>
            <ol className="space-y-3">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-orange-500 text-white text-xs font-medium rounded-full flex items-center justify-center mr-3 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-gray-700 text-sm leading-relaxed">{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Cooking Tips */}
          <div className="mt-6 p-4 bg-orange-50 rounded-lg">
            <h4 className="text-sm font-semibold text-orange-800 mb-2">💡 Cooking Tips</h4>
            <div className="text-xs text-orange-700 space-y-1">
              <p>• Read through all instructions before starting</p>
              <p>• Prep all ingredients (mise en place) for smoother cooking</p>
              <p>• Adjust seasoning to taste throughout the cooking process</p>
              {recipe.difficulty === 'Medium' || recipe.difficulty === 'Hard' ? (
                <p>• Take your time with this recipe - patience leads to better results</p>
              ) : (
                <p>• This is a beginner-friendly recipe - perfect for trying something new!</p>
              )}
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default RecipeDetailModal;