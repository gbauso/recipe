type Recipe = {
  id: string;
  dateAdded: Date;
  name: string;
  ingredients: Ingredient[];
  steps: Step[];
};

export type Ingredient = {
  name: string;
};

export type Step = {
  description: string;
};

export default Recipe;
