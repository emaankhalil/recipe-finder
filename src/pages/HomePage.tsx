import { useState, useMemo } from 'react';
import { mockRecipes, Recipe } from '@/data/mockRecipes';
import RecipeCard from '@/components/RecipeCard';
import IngredientSearch from '@/components/IngredientSearch';
import DietaryFilters from '@/components/DietaryFilters';
import CookingTimeFilter from '@/components/CookingTimeFilter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ChefHat, Utensils, Clock, Filter, X } from 'lucide-react';

const HomePage = () => {
  const [ingredients, setIngredients] = useState('');
  const [selectedDietary, setSelectedDietary] = useState<string[]>([]);
  const [maxCookingTime, setMaxCookingTime] = useState(Infinity);
  const [showFilters, setShowFilters] = useState(false);

  const filteredRecipes = useMemo(() => {
    let filtered = mockRecipes;

    // Filter by ingredients
    if (ingredients.trim()) {
      const ingredientList = ingredients
        .toLowerCase()
        .split(',')
        .map(item => item.trim())
        .filter(item => item.length > 0);

      filtered = filtered.filter(recipe => {
        return ingredientList.some(ingredient =>
          recipe.ingredients.some(recipeIngredient =>
            recipeIngredient.toLowerCase().includes(ingredient)
          )
        );
      });
    }

    // Filter by dietary restrictions
    if (selectedDietary.length > 0) {
      filtered = filtered.filter(recipe =>
        selectedDietary.every(diet => recipe.dietaryTags.includes(diet))
      );
    }

    // Filter by cooking time
    if (maxCookingTime !== Infinity) {
      filtered = filtered.filter(recipe => recipe.cookingTime <= maxCookingTime);
    }

    return filtered;
  }, [ingredients, selectedDietary, maxCookingTime]);

  const clearAllFilters = () => {
    setIngredients('');
    setSelectedDietary([]);
    setMaxCookingTime(Infinity);
  };

  const hasActiveFilters = ingredients.trim() || selectedDietary.length > 0 || maxCookingTime !== Infinity;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-orange-500 p-2 rounded-full">
                <ChefHat className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Recipe Finder</h1>
                <p className="text-sm text-gray-600">Discover delicious recipes with your ingredients</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Utensils className="h-4 w-4 text-orange-500" />
                <span>{mockRecipes.length} Recipes</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <Card className="mb-8 border-orange-100 shadow-sm">
          <CardContent className="p-6">
            <div className="space-y-6">
              {/* Ingredient Search */}
              <IngredientSearch
                ingredients={ingredients}
                onIngredientsChange={setIngredients}
              />

              {/* Filter Toggle */}
              <div className="flex items-center justify-between">
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center space-x-2"
                >
                  <Filter className="h-4 w-4" />
                  <span>{showFilters ? 'Hide Filters' : 'Show Filters'}</span>
                </Button>
                
                {hasActiveFilters && (
                  <Button
                    variant="ghost"
                    onClick={clearAllFilters}
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
                  >
                    <X className="h-4 w-4" />
                    <span>Clear All</span>
                  </Button>
                )}
              </div>

              {/* Filters */}
              {showFilters && (
                <div className="space-y-6">
                  <Separator />
                  <DietaryFilters
                    selectedDietary={selectedDietary}
                    onDietaryChange={setSelectedDietary}
                  />
                  <CookingTimeFilter
                    maxCookingTime={maxCookingTime}
                    onCookingTimeChange={setMaxCookingTime}
                  />
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <h2 className="text-xl font-semibold text-gray-900">
              {filteredRecipes.length === 0 ? 'No Recipes Found' : 
               filteredRecipes.length === 1 ? '1 Recipe Found' : 
               `${filteredRecipes.length} Recipes Found`}
            </h2>
            {hasActiveFilters && (
              <div className="flex items-center space-x-2">
                {ingredients.trim() && (
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                    Ingredients: {ingredients.split(',').length}
                  </span>
                )}
                {selectedDietary.length > 0 && (
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Dietary: {selectedDietary.length}
                  </span>
                )}
                {maxCookingTime !== Infinity && (
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    <Clock className="h-3 w-3 mr-1" />
                    ≤{maxCookingTime}m
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Recipe Grid */}
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <ChefHat className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No recipes found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search criteria or ingredients.
            </p>
            <Button 
              onClick={clearAllFilters}
              variant="outline"
              className="border-orange-300 text-orange-600 hover:bg-orange-50"
            >
              Clear filters and see all recipes
            </Button>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-orange-100 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <ChefHat className="h-5 w-5 text-orange-500" />
              <span className="font-semibold text-gray-900">Recipe Finder</span>
            </div>
            <p className="text-sm text-gray-600">
              Find delicious recipes with the ingredients you have on hand
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;