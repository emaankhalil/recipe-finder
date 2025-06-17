import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { cookingTimeOptions } from '@/data/mockRecipes';

interface CookingTimeFilterProps {
  maxCookingTime: number;
  onCookingTimeChange: (time: number) => void;
}

const CookingTimeFilter = ({ maxCookingTime, onCookingTimeChange }: CookingTimeFilterProps) => {
  return (
    <div className="space-y-3">
      <Label className="text-sm font-medium text-gray-700">
        Maximum Cooking Time
      </Label>
      <RadioGroup 
        value={maxCookingTime.toString()}
        onValueChange={(value) => onCookingTimeChange(Number(value))}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3"
      >
        {cookingTimeOptions.map((option) => (
          <div key={option.value} className="flex items-center space-x-2">
            <RadioGroupItem 
              value={option.value.toString()} 
              id={option.value.toString()}
              className="border-orange-300 text-orange-500"
            />
            <Label 
              htmlFor={option.value.toString()} 
              className="text-sm text-gray-700 cursor-pointer"
            >
              {option.label}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default CookingTimeFilter;