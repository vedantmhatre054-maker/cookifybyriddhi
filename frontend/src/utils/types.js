export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}

export interface Recipe {
  id: string;
  name: string;
  image: string;
  cookingTime: string;
  usedIngredients: string[];
  missingIngredients: string[];
  ingredients: Ingredient[];
  instructions: string[];
  servings: number;
}
