import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Search } from 'lucide-react';

interface IngredientSearchProps {
  ingredients: string;
  onIngredientsChange: (ingredients: string) => void;
}

const IngredientSearch = ({ ingredients, onIngredientsChange }: IngredientSearchProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="ingredients" className="text-sm font-medium text-gray-700">
        What ingredients do you have?
      </Label>
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        <Input
          id="ingredients"
          type="text"
          placeholder="e.g., tomatoes, chicken, rice, garlic..."
          value={ingredients}
          onChange={(e) => onIngredientsChange(e.target.value)}
          className="pl-10 py-2 border-orange-200 focus:border-orange-400 focus:ring-orange-400" />

      </div>
      <p className="text-xs text-gray-500">
        Enter ingredients separated by commas
      </p>
    </div>);

};

export default IngredientSearch;