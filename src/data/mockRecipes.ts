export interface Recipe {
  id: string;
  name: string;
  description: string;
  image: string;
  ingredients: string[];
  instructions: string[];
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
  instructions: [
    'Rinse quinoa and cook according to package directions until fluffy.',
    'Dice tomatoes and cucumber into small pieces.',
    'Crumble feta cheese and pit olives if needed.',
    'In a large bowl, combine cooked quinoa with diced vegetables.',
    'Drizzle with olive oil and fresh lemon juice.',
    'Add feta cheese and olives, toss gently.',
    'Season with salt and pepper to taste.',
    'Serve chilled or at room temperature.'
  ],
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
  instructions: [
    'Heat vegetable broth in a separate pot and keep warm.',
    'Slice mushrooms and sauté until golden brown.',
    'In a large pan, melt butter and sauté diced onion until translucent.',
    'Add minced garlic and arborio rice, stirring for 2 minutes.',
    'Pour in white wine and stir until absorbed.',
    'Add warm broth one ladle at a time, stirring constantly.',
    'Continue adding broth and stirring for 18-20 minutes.',
    'Fold in sautéed mushrooms and grated parmesan.',
    'Season with salt, pepper, and fresh herbs before serving.'
  ],
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
  instructions: [
    'Cook brown rice according to package directions.',
    'Roast cubed sweet potato at 400°F for 25 minutes.',
    'Drain and rinse chickpeas, then season and roast for 15 minutes.',
    'Prepare tahini dressing by mixing tahini, lemon juice, and water.',
    'Massage fresh spinach with a pinch of salt.',
    'Slice avocado just before serving.',
    'Arrange all components in a bowl over brown rice.',
    'Drizzle with tahini dressing and serve immediately.'
  ],
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
  instructions: [
    'Wash and chop romaine lettuce into bite-sized pieces.',
    'Make croutons by toasting cubed bread with olive oil.',
    'Mince garlic and anchovies for the dressing.',
    'Whisk together garlic, anchovies, lemon juice, and olive oil.',
    'Add grated parmesan to the dressing.',
    'Toss lettuce with dressing until well coated.',
    'Top with croutons and additional parmesan.',
    'Serve immediately while croutons are crispy.'
  ],
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
  instructions: [
    'Cut chicken into bite-sized pieces and season.',
    'Slice bell peppers and prepare aromatics.',
    'Heat oil in a large pan or wok over medium-high heat.',
    'Cook chicken until golden brown, then set aside.',
    'Sauté curry paste, garlic, and ginger until fragrant.',
    'Add coconut milk and bring to a simmer.',
    'Return chicken to pan and add bell peppers.',
    'Simmer for 15 minutes until chicken is cooked through.',
    'Garnish with fresh basil leaves before serving.'
  ],
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
  instructions: [
    'Toast sourdough bread slices until golden brown.',
    'Bring water to a gentle simmer for poaching eggs.',
    'Mash ripe avocado with lemon juice, salt, and pepper.',
    'Create a whirlpool in simmering water and crack egg into center.',
    'Poach egg for 3-4 minutes until whites are set.',
    'Spread avocado mixture generously on toast.',
    'Top with poached egg and season with everything seasoning.',
    'Add chili flakes and serve immediately.'
  ],
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
  instructions: [
    'Cut cauliflower into small florets and steam until tender.',
    'In a large pan, melt butter and sauté minced garlic.',
    'Add cream cheese and melt until smooth.',
    'Gradually add shredded cheddar cheese, stirring constantly.',
    'Season cheese sauce with paprika, salt, and pepper.',
    'Fold steamed cauliflower into cheese sauce.',
    'Transfer to baking dish and top with extra cheese.',
    'Bake at 375°F for 15 minutes until bubbly and golden.'
  ],
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
  instructions: [
    'Preheat oven to 375°F and prepare bell peppers by cutting tops and removing seeds.',
    'Cook quinoa according to package directions until fluffy.',
    'Dice zucchini, tomatoes, and onion into small pieces.',
    'Sauté vegetables until softened, about 8 minutes.',
    'Mix cooked quinoa with sautéed vegetables and crumbled feta.',
    'Season filling with fresh herbs, salt, and pepper.',
    'Stuff peppers with quinoa mixture and place in baking dish.',
    'Add water to bottom of dish and bake for 35-40 minutes.',
    'Serve hot with extra herbs if desired.'
  ],
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
  instructions: [
    'Cut all vegetables into uniform pieces for even cooking.',
    'Heat wok or large pan over high heat until smoking.',
    'Add oil and swirl to coat the pan.',
    'Add ginger and garlic, stir-fry for 30 seconds.',
    'Add harder vegetables like carrots first, cook 2 minutes.',
    'Add broccoli and snap peas, continue stir-frying.',
    'Add soy sauce and toss everything together.',
    'Finish with sesame oil and serve immediately over rice.'
  ],
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
  instructions: [
    'Rinse red lentils in cold water until water runs clear.',
    'Dice carrots, celery, and onion into small pieces.',
    'Heat oil in large pot and sauté vegetables until softened.',
    'Add minced garlic and cook for another minute.',
    'Add rinsed lentils, vegetable broth, and bay leaves.',
    'Bring to boil, then reduce heat and simmer 25 minutes.',
    'Remove bay leaves and season with salt and pepper.',
    'Blend partially for desired consistency and serve hot.'
  ],
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
  instructions: [
    'Remove salmon from refrigerator 30 minutes before cooking.',
    'Preheat grill to medium-high heat and oil grates.',
    'Mix chopped herbs with olive oil, garlic, and lemon zest.',
    'Season salmon fillets with salt and pepper.',
    'Grill salmon skin-side down for 6-8 minutes.',
    'Flip carefully and grill another 4-6 minutes.',
    'Check internal temperature reaches 145°F.',
    'Top with herb mixture and lemon wedges before serving.'
  ],
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
  instructions: [
    'In a bowl, whisk together almond milk, cocoa powder, and maple syrup.',
    'Add vanilla extract and mix well.',
    'Gradually whisk in chia seeds to prevent clumping.',
    'Let mixture sit 5 minutes, then whisk again.',
    'Cover and refrigerate for at least 2 hours or overnight.',
    'Stir pudding before serving to break up any clumps.',
    'Top with fresh berries and additional toppings.',
    'Serve chilled in glasses or bowls.'
  ],
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
  instructions: [
    'Heat taco shells in oven according to package directions.',
    'Brown ground beef in a large skillet over medium heat.',
    'Season beef with taco seasoning and a splash of water.',
    'Simmer until liquid is absorbed and beef is well seasoned.',
    'Dice tomatoes and onions, shred lettuce.',
    'Warm taco shells until crispy and fragrant.',
    'Fill shells with seasoned beef and desired toppings.',
    'Serve immediately with lime wedges and hot sauce.'
  ],
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
  instructions: [
    'Spiralize zucchini into noodle shapes using a spiralizer.',
    'Cook bacon until crispy, then remove and chop.',
    'Beat eggs with grated parmesan and black pepper.',
    'Sauté minced garlic in bacon fat until fragrant.',
    'Add zucchini noodles and toss for 2-3 minutes.',
    'Remove from heat and quickly toss with egg mixture.',
    'The residual heat will cook the eggs into a creamy sauce.',
    'Top with crispy bacon and extra parmesan before serving.'
  ],
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
  instructions: [
    'Combine rolled oats with milk in a mason jar or bowl.',
    'Add a dollop of yogurt for creaminess.',
    'Stir in honey or maple syrup to taste.',
    'Add a pinch of cinnamon and mix well.',
    'Cover and refrigerate overnight or at least 4 hours.',
    'In the morning, stir the oats and add more liquid if needed.',
    'Top with fresh berries, nuts, and additional honey.',
    'Enjoy cold or warm briefly in microwave if preferred.'
  ],
  cookingTime: 5,
  dietaryTags: ['Vegetarian'],
  difficulty: 'Easy'
}];


export const dietaryOptions = [
'Vegetarian',
'Vegan',
'Gluten-Free',
'Dairy-Free',
'Low-Carb'];


export const cookingTimeOptions = [
{ label: 'Quick (≤15 min)', value: 15 },
{ label: 'Medium (≤30 min)', value: 30 },
{ label: 'Long (≤60 min)', value: 60 },
{ label: 'Extended (≤120 min)', value: 120 },
{ label: 'Any time', value: Infinity }];