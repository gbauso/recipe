Cypress.Commands.add('openApplication', function () {
  cy.visit(Cypress.env().baseUrl);
});

Cypress.Commands.add('clickAddRecipe', function () {
  cy.get('[data-testid="action-bar"]').click();
});

Cypress.Commands.add('clickRecipeCard', function (name) {
  cy.get('[data-testid="recipe-card"]').contains(name).click();
});

Cypress.Commands.add('fillRecipe', function () {
  const recipe = {
    name: 'My Recipe',
    ingredients: ['1 frog'],
    steps: ['Add boiled water to a pan', 'Wait till the frog change the color'],
  };

  cy.wrap(recipe).as('recipe');

  cy.get('#name').type(recipe.name);
  recipe.ingredients.forEach(ingredient => {
    cy.get('#ingredient').type(ingredient);
    cy.get('[data-testid="add-button"]').first().click();
  });

  recipe.steps.forEach(step => {
    cy.get('#step').type(step);
    cy.get('[data-testid="add-button"]').last().click();
  });

  cy.get('[data-testid="submit"]').click();
});
