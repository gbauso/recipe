import useRecipe from '@/store/recipe/useRecipe.hook';
import React, { useCallback } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import RecipeCard from '../card/RecipeCard.component';

const Wrapper = styled.div``;

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
      {recipes.map((recipe, index) => (
        <RecipeCard {...recipe} key={index} onClick={handleClick} />
      ))}
    </Wrapper>
  );
};

export default RecipeList;
