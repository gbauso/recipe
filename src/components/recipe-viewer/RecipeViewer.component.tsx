import Recipe from '@/models/recipe';
import useRecipe from '@/store/recipe/useRecipe.hook';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ListItem, List } from '../list/List';
import { toast } from 'react-toastify';

const Wrapper = styled.div``;

const Title = styled.h1.attrs({ 'data-testid': 'recipe-title' })`
  text-align: center;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: 24px;
  margin-bottom: 16px;
`;

const SmallTitle = styled.h2`
  margin: 8px 0;
  text-align: left;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: 16px;
`;

const ListWrapper = styled.div``;

const RecipeViewer: React.FC = () => {
  const { recipes } = useRecipe();
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const [recipe, setRecipe] = useState<Recipe>();

  useEffect(() => {
    const recipe = recipes.find(rec => rec.id === id);
    if (recipe) {
      setRecipe(recipe);
    } else {
      toast.error('Recipe not Found');
      history.push('/');
    }
  }, [history, id, recipes]);

  return (
    <Wrapper>
      <Title>{recipe?.name}</Title>
      <SmallTitle>Ingredients</SmallTitle>
      <ListWrapper>
        <List>
          {recipe?.ingredients.map((ingredient, index) => (
            <ListItem key={index}>{ingredient.name}</ListItem>
          ))}
        </List>
      </ListWrapper>
      <SmallTitle>Steps</SmallTitle>
      <ListWrapper>
        <List>
          {recipe?.steps.map((step, index) => (
            <ListItem key={index}>{step.description}</ListItem>
          ))}
        </List>
      </ListWrapper>
    </Wrapper>
  );
};

export default RecipeViewer;
