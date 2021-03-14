import useRecipe from '@/store/recipe/useRecipe.hook';
import React, { useCallback } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import RecipeCard from '../card/RecipeCard.component';

const Wrapper = styled.div``;

const NoRecipesText = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

const RecipeList: React.FC = () => {
  const { recipes } = useRecipe();
  const history = useHistory();

  const handleClick = useCallback(
    (id: string) => {
      history.push(`/recipe/${id}`);
    },
    [history]
  );

  return (
    <Wrapper>
      {recipes.length > 0 ? (
        recipes.map((recipe, index) => (
          <RecipeCard {...recipe} key={index} onClick={handleClick} />
        ))
      ) : (
        <NoRecipesText>No recipes so far...</NoRecipesText>
      )}
    </Wrapper>
  );
};

export default RecipeList;
