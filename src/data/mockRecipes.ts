export interface Recipe {
  id: string;
  name: string;
  description: string;
  image: string;
  ingredients: string[];
  cookingTime: number; // in minutes
  dietaryTags: string[];
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export const mockRecipes: Recipe[] = [
  {
    id: '1',
    name: 'Mediterranean Quinoa Bowl',
    description: 'Fresh and nutritious quinoa bowl with Mediterranean flavors, perfect for a healthy meal.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop&crop=center',
    ingredients: ['quinoa', 'tomatoes', 'cucumber', 'olive oil', 'feta cheese', 'olives', 'lemon'],
    cookingTime: 25,
    dietaryTags: ['Vegetarian', 'Gluten-Free'],
    difficulty: 'Easy'
  },
  {
    id: '2',
    name: 'Creamy Mushroom Risotto',
    description: 'Rich and creamy mushroom risotto made with arborio rice and fresh herbs.',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=300&fit=crop&crop=center',
    ingredients: ['arborio rice', 'mushrooms', 'onion', 'garlic', 'white wine', 'parmesan', 'butter'],
    cookingTime: 35,
    dietaryTags: ['Vegetarian'],
    difficulty: 'Medium'
  },
  {
    id: '3',
    name: 'Vegan Buddha Bowl',
    description: 'Colorful plant-based bowl packed with nutrients and bold flavors.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop&crop=center',
    ingredients: ['brown rice', 'chickpeas', 'sweet potato', 'spinach', 'avocado', 'tahini', 'lemon'],
    cookingTime: 30,
    dietaryTags: ['Vegan', 'Gluten-Free', 'Dairy-Free'],
    difficulty: 'Easy'
  },
  {
    id: '4',
    name: 'Classic Caesar Salad',
    description: 'Traditional Caesar salad with crispy romaine lettuce and homemade dressing.',
    image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=400&h=300&fit=crop&crop=center',
    ingredients: ['romaine lettuce', 'parmesan', 'croutons', 'anchovies', 'garlic', 'lemon', 'olive oil'],
    cookingTime: 15,
    dietaryTags: ['Vegetarian'],
    difficulty: 'Easy'
  },
  {
    id: '5',
    name: 'Spicy Thai Curry',
    description: 'Aromatic and spicy Thai curry with coconut milk and fresh vegetables.',
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=300&fit=crop&crop=center',
    ingredients: ['coconut milk', 'red curry paste', 'chicken', 'bell peppers', 'basil', 'ginger', 'garlic'],
    cookingTime: 25,
    dietaryTags: ['Gluten-Free', 'Dairy-Free'],
    difficulty: 'Medium'
  },
  {
    id: '6',
    name: 'Avocado Toast Supreme',
    description: 'Elevated avocado toast with poached egg and everything seasoning.',
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=300&fit=crop&crop=center',
    ingredients: ['sourdough bread', 'avocado', 'eggs', 'lemon', 'salt', 'pepper', 'chili flakes'],
    cookingTime: 10,
    dietaryTags: ['Vegetarian'],
    difficulty: 'Easy'
  },
  {
    id: '7',
    name: 'Keto Cauliflower Mac',
    description: 'Low-carb alternative to mac and cheese using cauliflower.',
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop&crop=center',
    ingredients: ['cauliflower', 'cheddar cheese', 'cream cheese', 'butter', 'garlic', 'paprika'],
    cookingTime: 20,
    dietaryTags: ['Vegetarian', 'Low-Carb', 'Gluten-Free'],
    difficulty: 'Easy'
  },
  {
    id: '8',
    name: 'Mediterranean Stuffed Peppers',
    description: 'Colorful bell peppers stuffed with quinoa, vegetables, and herbs.',
    image: 'https://images.unsplash.com/photo-1597012523223-3b2300183816?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxDb2xvcmZ1bCUyMGJlbGwlMjBwZXBwZXJzJTIwc3R1ZmZlZCUyMHdpdGglMjBxdWlub2ElMkMlMjB2ZWdldGFibGVzJTJDJTIwYW5kJTIwaGVyYnMufGVufDB8fHx8MTc1MDE4NDYwMHww&ixlib=rb-4.1.0&q=80&w=200$w=400',
    ingredients: ['bell peppers', 'quinoa', 'zucchini', 'tomatoes', 'onion', 'feta cheese', 'herbs'],
    cookingTime: 45,
    dietaryTags: ['Vegetarian', 'Gluten-Free'],
    difficulty: 'Medium'
  },
  {
    id: '9',
    name: 'Quick Veggie Stir Fry',
    description: 'Fast and healthy stir fry with seasonal vegetables and ginger.',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop&crop=center',
    ingredients: ['broccoli', 'carrots', 'snap peas', 'ginger', 'garlic', 'soy sauce', 'sesame oil'],
    cookingTime: 12,
    dietaryTags: ['Vegan', 'Dairy-Free'],
    difficulty: 'Easy'
  },
  {
    id: '10',
    name: 'Hearty Lentil Soup',
    description: 'Warming and nutritious lentil soup perfect for cold days.',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=300&fit=crop&crop=center',
    ingredients: ['red lentils', 'carrots', 'celery', 'onion', 'garlic', 'vegetable broth', 'bay leaves'],
    cookingTime: 40,
    dietaryTags: ['Vegan', 'Gluten-Free', 'Dairy-Free'],
    difficulty: 'Easy'
  },
  {
    id: '11',
    name: 'Grilled Salmon with Herbs',
    description: 'Perfectly grilled salmon with fresh herbs and lemon.',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop&crop=center',
    ingredients: ['salmon', 'dill', 'parsley', 'lemon', 'olive oil', 'garlic', 'salt'],
    cookingTime: 18,
    dietaryTags: ['Gluten-Free', 'Dairy-Free'],
    difficulty: 'Medium'
  },
  {
    id: '12',
    name: 'Chocolate Chia Pudding',
    description: 'Healthy and indulgent chia pudding with rich chocolate flavor.',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop&crop=center',
    ingredients: ['chia seeds', 'cocoa powder', 'almond milk', 'maple syrup', 'vanilla', 'berries'],
    cookingTime: 5,
    dietaryTags: ['Vegan', 'Gluten-Free', 'Dairy-Free'],
    difficulty: 'Easy'
  },
  {
    id: '13',
    name: 'Classic Beef Tacos',
    description: 'Traditional beef tacos with fresh toppings and homemade salsa.',
    image: 'https://images.unsplash.com/photo-1636777408340-e053c0b5ba2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwZGVsaWNpb3VzJTIwcGxhdGUlMjBvZiUyMGNsYXNzaWMlMjBiZWVmJTIwdGFjb3MlMjB3aXRoJTIwZnJlc2glMjB0b3BwaW5ncyUyMGFuZCUyMGhvbWVtYWRlJTIwc2Fsc2EufGVufDB8fHx8MTc1MDE4NDU5OXww&ixlib=rb-4.1.0&q=80&w=200$w=400',
    ingredients: ['ground beef', 'taco shells', 'lettuce', 'tomatoes', 'cheese', 'sour cream', 'onion'],
    cookingTime: 20,
    dietaryTags: [],
    difficulty: 'Easy'
  },
  {
    id: '14',
    name: 'Zucchini Noodles Carbonara',
    description: 'Low-carb take on carbonara using spiralized zucchini noodles.',
    image: 'https://images.unsplash.com/photo-1630563775062-bbaf8ad3d73c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwbG93LWNhcmIlMjB0YWtlJTIwb24lMjBjYXJib25hcmElMjB1c2luZyUyMHNwaXJhbGl6ZWQlMjB6dWNjaGluaSUyMG5vb2RsZXMufGVufDB8fHx8MTc1MDE4NDYwMXww&ixlib=rb-4.1.0&q=80&w=200$w=400',
    ingredients: ['zucchini', 'eggs', 'parmesan', 'bacon', 'garlic', 'black pepper', 'olive oil'],
    cookingTime: 15,
    dietaryTags: ['Low-Carb', 'Gluten-Free'],
    difficulty: 'Medium'
  },
  {
    id: '15',
    name: 'Overnight Oats',
    description: 'No-cook breakfast option that\'s ready when you wake up.',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop&crop=center',
    ingredients: ['oats', 'milk', 'yogurt', 'honey', 'berries', 'nuts', 'cinnamon'],
    cookingTime: 5,
    dietaryTags: ['Vegetarian'],
    difficulty: 'Easy'
  }
];

export const dietaryOptions = [
  'Vegetarian',
  'Vegan', 
  'Gluten-Free',
  'Dairy-Free',
  'Low-Carb'
];

export const cookingTimeOptions = [
  { label: 'Quick (≤15 min)', value: 15 },
  { label: 'Medium (≤30 min)', value: 30 },
  { label: 'Long (≤60 min)', value: 60 },
  { label: 'Extended (≤120 min)', value: 120 },
  { label: 'Any time', value: Infinity }
];