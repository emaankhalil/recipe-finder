import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { dietaryOptions } from '@/data/mockRecipes';

interface DietaryFiltersProps {
  selectedDietary: string[];
  onDietaryChange: (dietary: string[]) => void;
}

const DietaryFilters = ({ selectedDietary, onDietaryChange }: DietaryFiltersProps) => {
  const handleDietaryToggle = (option: string) => {
    if (selectedDietary.includes(option)) {
      onDietaryChange(selectedDietary.filter(item => item !== option));
    } else {
      onDietaryChange([...selectedDietary, option]);
    }
  };

  return (
    <div className="space-y-3">
      <Label className="text-sm font-medium text-gray-700">
        Dietary Restrictions
      </Label>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {dietaryOptions.map((option) => (
          <div key={option} className="flex items-center space-x-2">
            <Checkbox
              id={option}
              checked={selectedDietary.includes(option)}
              onCheckedChange={() => handleDietaryToggle(option)}
              className="border-orange-300 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
            />
            <Label 
              htmlFor={option} 
              className="text-sm text-gray-700 cursor-pointer"
            >
              {option}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DietaryFilters;