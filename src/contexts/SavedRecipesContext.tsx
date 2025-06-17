import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Recipe } from '@/data/mockRecipes';

interface SavedRecipesContextType {
  savedRecipes: Recipe[];
  savedRecipeIds: Set<string>;
  saveRecipe: (recipe: Recipe) => void;
  unsaveRecipe: (recipeId: string) => void;
  isRecipeSaved: (recipeId: string) => boolean;
}

const SavedRecipesContext = createContext<SavedRecipesContextType | undefined>(undefined);

export const useSavedRecipes = () => {
  const context = useContext(SavedRecipesContext);
  if (!context) {
    throw new Error('useSavedRecipes must be used within a SavedRecipesProvider');
  }
  return context;
};

interface SavedRecipesProviderProps {
  children: ReactNode;
}

export const SavedRecipesProvider = ({ children }: SavedRecipesProviderProps) => {
  const [savedRecipes, setSavedRecipes] = useState<Recipe[]>([]);
  const [savedRecipeIds, setSavedRecipeIds] = useState<Set<string>>(new Set());

  // Load saved recipes from localStorage on component mount
  useEffect(() => {
    const storedRecipes = localStorage.getItem('savedRecipes');
    if (storedRecipes) {
      try {
        const parsedRecipes: Recipe[] = JSON.parse(storedRecipes);
        setSavedRecipes(parsedRecipes);
        setSavedRecipeIds(new Set(parsedRecipes.map(recipe => recipe.id)));
      } catch (error) {
        console.error('Error loading saved recipes from localStorage:', error);
      }
    }
  }, []);

  // Save to localStorage whenever savedRecipes changes
  useEffect(() => {
    localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
  }, [savedRecipes]);

  const saveRecipe = (recipe: Recipe) => {
    if (!savedRecipeIds.has(recipe.id)) {
      setSavedRecipes(prev => [...prev, recipe]);
      setSavedRecipeIds(prev => new Set([...prev, recipe.id]));
      console.log('Recipe saved:', recipe.name);
    }
  };

  const unsaveRecipe = (recipeId: string) => {
    setSavedRecipes(prev => prev.filter(recipe => recipe.id !== recipeId));
    setSavedRecipeIds(prev => {
      const newSet = new Set(prev);
      newSet.delete(recipeId);
      return newSet;
    });
    console.log('Recipe unsaved:', recipeId);
  };

  const isRecipeSaved = (recipeId: string) => {
    return savedRecipeIds.has(recipeId);
  };

  const value = {
    savedRecipes,
    savedRecipeIds,
    saveRecipe,
    unsaveRecipe,
    isRecipeSaved,
  };

  return (
    <SavedRecipesContext.Provider value={value}>
      {children}
    </SavedRecipesContext.Provider>
  );
};