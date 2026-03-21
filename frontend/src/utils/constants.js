import { Recipe } from './types';

export interface Dish {
  id: string;
  name: string;
  cuisine: string;
  ingredients: string[];
  image: string;
}

export const CUISINES = [
  { id: 'indian', name: 'Indian', icon: '🇮🇳' },
  { id: 'italian', name: 'Italian', icon: '🇮🇹' },
  { id: 'chinese', name: 'Chinese', icon: '🇨🇳' },
  { id: 'mexican', name: 'Mexican', icon: '🇲🇽' },
  { id: 'continental', name: 'Continental', icon: '🌍' },
];

export const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1495195129352-aec325a55b65?auto=format&fit=crop&w=800&q=80';

export const DISHES: Dish[] = [
  {
    id: 'dosa',
    name: 'Dosa',
    cuisine: 'Indian',
    ingredients: ['Rice', 'Urad Dal', 'Salt', 'Oil'],
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'paneer-butter-masala',
    name: 'Paneer Butter Masala',
    cuisine: 'Indian',
    ingredients: ['Paneer', 'Butter', 'Tomato', 'Cream', 'Garam Masala'],
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'biryani',
    name: 'Biryani',
    cuisine: 'Indian',
    ingredients: ['Basmati Rice', 'Chicken', 'Yogurt', 'Onion', 'Saffron'],
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'butter-chicken',
    name: 'Butter Chicken',
    cuisine: 'Indian',
    ingredients: ['Chicken', 'Butter', 'Cream', 'Tomato Puree', 'Kasoori Methi'],
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'chole-bhature',
    name: 'Chole Bhature',
    cuisine: 'Indian',
    ingredients: ['Chickpeas', 'Flour', 'Yogurt', 'Onion', 'Ginger-Garlic Paste'],
    image: 'https://images.unsplash.com/photo-1626132646529-5003375a9541?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'pasta',
    name: 'Pasta Carbonara',
    cuisine: 'Italian',
    ingredients: ['Pasta', 'Egg', 'Pancetta', 'Pecorino Romano', 'Black Pepper'],
    image: 'https://images.unsplash.com/photo-1546548970-71785318a17b?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'pizza',
    name: 'Margherita Pizza',
    cuisine: 'Italian',
    ingredients: ['Pizza Dough', 'Tomato Sauce', 'Mozzarella', 'Basil', 'Olive Oil'],
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'penne-arrabbiata',
    name: 'Penne Arrabbiata',
    cuisine: 'Italian',
    ingredients: ['Penne Pasta', 'Garlic', 'Tomatoes', 'Dried Red Chili Peppers', 'Olive Oil'],
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'risotto',
    name: 'Mushroom Risotto',
    cuisine: 'Italian',
    ingredients: ['Arborio Rice', 'Mushrooms', 'Parmesan', 'White Wine', 'Chicken Broth'],
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'noodles',
    name: 'Hakka Noodles',
    cuisine: 'Chinese',
    ingredients: ['Noodles', 'Cabbage', 'Carrot', 'Soy Sauce', 'Vinegar'],
    image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'kung-pao',
    name: 'Kung Pao Chicken',
    cuisine: 'Chinese',
    ingredients: ['Chicken', 'Peanuts', 'Dried Red Chilies', 'Soy Sauce', 'Sichuan Peppercorns'],
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'dim-sum',
    name: 'Dim Sum',
    cuisine: 'Chinese',
    ingredients: ['Shrimp', 'Pork', 'Wonton Wrappers', 'Ginger', 'Scallions'],
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'lemon-chicken',
    name: 'Lemon Chicken',
    cuisine: 'Chinese',
    ingredients: ['Chicken Breast', 'Lemon Juice', 'Cornstarch', 'Soy Sauce', 'Honey'],
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'enchiladas',
    name: 'Chicken Enchiladas',
    cuisine: 'Mexican',
    ingredients: ['Corn Tortillas', 'Shredded Chicken', 'Enchilada Sauce', 'Cheese', 'Sour Cream'],
    image: 'https://images.unsplash.com/photo-1534352956274-44d5f4416b1a?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'quesadilla',
    name: 'Cheese Quesadilla',
    cuisine: 'Mexican',
    ingredients: ['Flour Tortilla', 'Cheese Blend', 'Jalapenos', 'Onion', 'Bell Pepper'],
    image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'veg-tamales',
    name: 'Vegetable Tamales',
    cuisine: 'Mexican',
    ingredients: ['Corn Masa', 'Corn Husks', 'Zucchini', 'Corn', 'Salsa Verde'],
    image: 'https://images.unsplash.com/photo-1584031036380-3fb6f2d51880?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'fish-chips',
    name: 'Fish and Chips',
    cuisine: 'Continental',
    ingredients: ['White Fish', 'Potatoes', 'Flour', 'Baking Powder', 'Tartar Sauce'],
    image: 'https://images.unsplash.com/photo-1524339102455-67be27fc7f8e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'samosa',
    name: 'Samosa',
    cuisine: 'Indian',
    ingredients: ['Potatoes', 'Peas', 'Flour', 'Cumin', 'Coriander'],
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'tandoori-chicken',
    name: 'Tandoori Chicken',
    cuisine: 'Indian',
    ingredients: ['Chicken', 'Yogurt', 'Lemon Juice', 'Tandoori Masala', 'Ginger'],
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'bruschetta',
    name: 'Tomato Bruschetta',
    cuisine: 'Italian',
    ingredients: ['Baguette', 'Tomatoes', 'Garlic', 'Basil', 'Balsamic Glaze'],
    image: 'https://images.unsplash.com/photo-1572656631137-7935297eff55?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'gnocchi',
    name: 'Potato Gnocchi',
    cuisine: 'Italian',
    ingredients: ['Potatoes', 'Flour', 'Egg', 'Parmesan', 'Sage Butter'],
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'spring-rolls',
    name: 'Veg Spring Rolls',
    cuisine: 'Chinese',
    ingredients: ['Spring Roll Wrappers', 'Cabbage', 'Carrot', 'Bean Sprouts', 'Soy Sauce'],
    image: 'https://images.unsplash.com/photo-1544333346-64e4fe18274b?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'fried-rice',
    name: 'Egg Fried Rice',
    cuisine: 'Chinese',
    ingredients: ['Rice', 'Eggs', 'Peas', 'Green Onions', 'Sesame Oil'],
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'burrito',
    name: 'Chicken Burrito',
    cuisine: 'Mexican',
    ingredients: ['Large Tortilla', 'Rice', 'Beans', 'Chicken', 'Guacamole'],
    image: 'https://images.unsplash.com/photo-1584031036380-3fb6f2d51880?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'nachos',
    name: 'Loaded Nachos',
    cuisine: 'Mexican',
    ingredients: ['Tortilla Chips', 'Cheese Sauce', 'Jalapenos', 'Black Beans', 'Sour Cream'],
    image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'caesar-salad',
    name: 'Caesar Salad',
    cuisine: 'Continental',
    ingredients: ['Romaine Lettuce', 'Croutons', 'Parmesan', 'Caesar Dressing', 'Grilled Chicken'],
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'roast-chicken',
    name: 'Herb Roasted Chicken',
    cuisine: 'Continental',
    ingredients: ['Whole Chicken', 'Thyme', 'Lemon', 'Potatoes', 'Carrots'],
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'dal-makhani',
    name: 'Dal Makhani',
    cuisine: 'Indian',
    ingredients: ['Black Lentils', 'Kidney Beans', 'Butter', 'Cream', 'Tomato Puree'],
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'tiramisu',
    name: 'Tiramisu',
    cuisine: 'Italian',
    ingredients: ['Ladyfingers', 'Mascarpone', 'Coffee', 'Cocoa Powder', 'Eggs'],
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'chow-mein',
    name: 'Chicken Chow Mein',
    cuisine: 'Chinese',
    ingredients: ['Noodles', 'Chicken', 'Bok Choy', 'Soy Sauce', 'Oyster Sauce'],
    image: 'https://images.unsplash.com/photo-1512058560366-cd2427ff1141?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'aloo-gobi',
    name: 'Aloo Gobi',
    cuisine: 'Indian',
    ingredients: ['Potatoes', 'Cauliflower', 'Turmeric', 'Ginger', 'Cumin'],
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'ratatouille',
    name: 'Ratatouille',
    cuisine: 'Continental',
    ingredients: ['Eggplant', 'Zucchini', 'Bell Peppers', 'Tomatoes', 'Herbes de Provence'],
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'palak-paneer',
    name: 'Palak Paneer',
    cuisine: 'Indian',
    ingredients: ['Spinach', 'Paneer', 'Garlic', 'Ginger', 'Cream'],
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'vada-pav',
    name: 'Vada Pav',
    cuisine: 'Indian',
    ingredients: ['Potato Vada', 'Pav Bun', 'Green Chutney', 'Garlic Chutney'],
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'minestrone',
    name: 'Minestrone Soup',
    cuisine: 'Italian',
    ingredients: ['Vegetable Broth', 'Beans', 'Pasta', 'Celery', 'Zucchini'],
    image: 'https://images.unsplash.com/photo-1547592115-859745c1e144?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'ravioli',
    name: 'Spinach Ravioli',
    cuisine: 'Italian',
    ingredients: ['Ravioli Pasta', 'Spinach', 'Ricotta', 'Sage', 'Brown Butter'],
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'mapo-tofu',
    name: 'Mapo Tofu',
    cuisine: 'Chinese',
    ingredients: ['Tofu', 'Ground Pork', 'Doubanjiang', 'Sichuan Peppercorns', 'Green Onions'],
    image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sweet-sour-pork',
    name: 'Sweet and Sour Pork',
    cuisine: 'Chinese',
    ingredients: ['Pork Shoulder', 'Pineapple', 'Bell Peppers', 'Vinegar', 'Ketchup'],
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'guacamole',
    name: 'Fresh Guacamole',
    cuisine: 'Mexican',
    ingredients: ['Avocados', 'Lime', 'Cilantro', 'Onion', 'Jalapeno'],
    image: 'https://images.unsplash.com/photo-1541288097308-7b8e3f58c4c6?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'chiles-rellenos',
    name: 'Chiles Rellenos',
    cuisine: 'Mexican',
    ingredients: ['Poblano Peppers', 'Cheese', 'Egg Batter', 'Tomato Sauce'],
    image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'shepherds-pie',
    name: "Shepherd's Pie",
    cuisine: 'Continental',
    ingredients: ['Ground Lamb', 'Mashed Potatoes', 'Peas', 'Carrots', 'Gravy'],
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'quiche',
    name: 'Quiche Lorraine',
    cuisine: 'Continental',
    ingredients: ['Pie Crust', 'Eggs', 'Heavy Cream', 'Bacon', 'Swiss Cheese'],
    image: 'https://images.unsplash.com/photo-1608039755401-74a474c0ccb0?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'pav-bhaji',
    name: 'Pav Bhaji',
    cuisine: 'Indian',
    ingredients: ['Mixed Vegetables', 'Butter', 'Pav Bun', 'Onion', 'Lemon'],
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'panna-cotta',
    name: 'Vanilla Panna Cotta',
    cuisine: 'Italian',
    ingredients: ['Heavy Cream', 'Sugar', 'Vanilla Bean', 'Gelatin', 'Berry Coulis'],
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'wontons',
    name: 'Shrimp Wontons',
    cuisine: 'Chinese',
    ingredients: ['Wonton Wrappers', 'Shrimp', 'Ginger', 'Sesame Oil', 'Chili Oil'],
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'ceviche',
    name: 'Shrimp Ceviche',
    cuisine: 'Mexican',
    ingredients: ['Shrimp', 'Lime Juice', 'Red Onion', 'Cucumber', 'Cilantro'],
    image: 'https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'malai-kofta',
    name: 'Malai Kofta',
    cuisine: 'Indian',
    ingredients: ['Potato', 'Paneer', 'Cashews', 'Tomato', 'Cream'],
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'focaccia',
    name: 'Focaccia Bread',
    cuisine: 'Italian',
    ingredients: ['Flour', 'Yeast', 'Rosemary', 'Sea Salt', 'Olive Oil'],
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'scallion-pancakes',
    name: 'Scallion Pancakes',
    cuisine: 'Chinese',
    ingredients: ['Flour', 'Scallions', 'Sesame Oil', 'Salt'],
    image: 'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'elote',
    name: 'Elote (Street Corn)',
    cuisine: 'Mexican',
    ingredients: ['Corn on the Cob', 'Mayonnaise', 'Cotija Cheese', 'Chili Powder', 'Lime'],
    image: 'https://images.unsplash.com/photo-1541288097308-7b8e3f58c4c6?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'mushroom-soup',
    name: 'Creamy Mushroom Soup',
    cuisine: 'Continental',
    ingredients: ['Mushrooms', 'Cream', 'Garlic', 'Thyme', 'Vegetable Stock'],
    image: 'https://images.unsplash.com/photo-1547592115-859745c1e144?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'baingan-bharta',
    name: 'Baingan Bharta',
    cuisine: 'Indian',
    ingredients: ['Roasted Eggplant', 'Onion', 'Tomato', 'Green Peas', 'Spices'],
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'caprese-salad',
    name: 'Caprese Salad',
    cuisine: 'Italian',
    ingredients: ['Fresh Mozzarella', 'Tomatoes', 'Basil', 'Balsamic Glaze', 'Olive Oil'],
    image: 'https://images.unsplash.com/photo-1572656631137-7935297eff55?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'general-tso-cauliflower',
    name: "General Tso's Cauliflower",
    cuisine: 'Chinese',
    ingredients: ['Cauliflower', 'Ginger', 'Garlic', 'Soy Sauce', 'Sesame Seeds'],
    image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'black-bean-soup',
    name: 'Black Bean Soup',
    cuisine: 'Mexican',
    ingredients: ['Black Beans', 'Cumin', 'Garlic', 'Onion', 'Bell Pepper'],
    image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=600&q=80'
  }
];

export const MOCK_RECIPES: Recipe[] = [];
