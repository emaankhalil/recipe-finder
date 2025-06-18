import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { cookingTimeOptions } from '@/data/mockRecipes';

interface CookingTimeFilterProps {
  maxCookingTime: number;
  onCookingTimeChange: (time: number) => void;
}

const CookingTimeFilter = ({ maxCookingTime, onCookingTimeChange }: CookingTimeFilterProps) => {
  // Convert the current maxCookingTime to a string that matches our options
  const getCurrentValue = () => {
    if (maxCookingTime === Infinity) return 'Infinity';
    return maxCookingTime.toString();
  };

  const handleValueChange = (value: string) => {
    if (value === 'Infinity') {
      onCookingTimeChange(Infinity);
    } else {
      onCookingTimeChange(Number(value));
    }
  };

  return (
    <div className="space-y-3">
      <Label className="text-sm font-medium text-gray-700">
        Maximum Cooking Time
      </Label>
      <RadioGroup
        value={getCurrentValue()}
        onValueChange={handleValueChange}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">

        {cookingTimeOptions.map((option) =>
        <div key={option.value} className="flex items-center space-x-2">
            <RadioGroupItem
            value={option.value === Infinity ? 'Infinity' : option.value.toString()}
            id={option.value === Infinity ? 'Infinity' : option.value.toString()}
            className="border-orange-300 text-orange-500" />

            <Label
            htmlFor={option.value === Infinity ? 'Infinity' : option.value.toString()}
            className="text-sm text-gray-700 cursor-pointer">

              {option.label}
            </Label>
          </div>
        )}
      </RadioGroup>
    </div>);

};

export default CookingTimeFilter;