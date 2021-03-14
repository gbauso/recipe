const {
  Given,
  When,
  And,
  Then,
} = require('cypress-cucumber-preprocessor/steps');

Given('that application is opened', function () {
  cy.openApplication();
});

When('user clicks on action bar', function () {
  cy.clickAddRecipe();
});

And('user fills a recipe', function () {
  cy.fillRecipe();
});

And('click on recipe created', function () {
  cy.clickRecipeCard(this.recipe.name);
});

Then('recipe was sucessfully created', function () {
  const recipe = this.recipe;
  cy.get('[data-testId="recipe-title"]')
    .contains(recipe.name)
    .should('be.visible');

  recipe.ingredients.forEach(ingredient => {
    cy.get('[data-testId="list-item"]')
      .contains(ingredient)
      .should('be.visible');
  });

  recipe.steps.forEach(step => {
    cy.get('[data-testId="list-item"]').contains(step).should('be.visible');
  });
});
