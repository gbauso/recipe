import Recipe, { Ingredient, Step } from '@/models/recipe';
import useRecipe from '@/store/recipe/useRecipe.hook';
import React, { useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';
import Button from '../button/Button';
import Input from '../input/Input.component';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router';
import { List, ListItem } from '../list/List';

const Wrapper = styled.div``;

const Title = styled.h1`
  text-align: center;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: 24px;
`;

const FormWrapper = styled.div`
  padding: 16px 0;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  margin: 0 4px;
  flex-grow: 1;
`;

const InputLabel = styled.label`
  font-size: 13px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin-bottom: 8px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 12px 0;
`;

const ButtonWrapper = styled.div`
  height: 24px;
  width: 24px;
  align-self: flex-end;
`;

const AddButton = styled(Button)`
  &::before {
    content: '+';
  }

  border-radius: 50%;
`;

const SubmitWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
`;

const Submit = styled(Button)`
  padding: 8px;
`;

const RecipeForm: React.FC = () => {
  const { addRecipe } = useRecipe();
  const history = useHistory();

  const [name, setName] = useState<string>('');
  const [ingredient, setIngredient] = useState<string>('');
  const [step, setStep] = useState<string>('');

  const [steps, setSteps] = useState<Step[]>([]);
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      const recipe: Recipe = {
        name,
        ingredients,
        steps,
        id: uuidv4() as string,
      };
      addRecipe(recipe);
      history.push('/');
    },
    [addRecipe, history, ingredients, name, steps]
  );

  const addStep = useCallback(
    event => {
      event.preventDefault();
      setSteps([...steps, { description: step }]);
      setStep('');
    },
    [step, steps]
  );

  const addIngredient = useCallback(
    event => {
      event.preventDefault();
      setIngredients([...ingredients, { name: ingredient }]);
      setIngredient('');
    },
    [ingredient, ingredients]
  );

  const canSubmit = useMemo(
    () => name.length > 0 && ingredients.length > 0 && steps.length > 0,
    [ingredients.length, name.length, steps.length]
  );

  return (
    <Wrapper>
      <Title>Create your Recipe</Title>
      <FormWrapper>
        <InputWrapper>
          <InputLabel>Name</InputLabel>
          <Input
            onChange={useCallback(evt => setName(evt.target.value), [])}
            value={name}
            variant="normal"
            placeholder="Name"
          />
        </InputWrapper>
        <InputGroup>
          <InputWrapper>
            <InputLabel>Ingredient</InputLabel>
            <Input
              onChange={useCallback(evt => setIngredient(evt.target.value), [])}
              value={ingredient}
              variant="normal"
              placeholder="Ingredient"
            />
          </InputWrapper>
          <ButtonWrapper>
            <AddButton
              disabled={ingredient.length === 0}
              onClick={addIngredient}
            />
          </ButtonWrapper>
        </InputGroup>
        {ingredients.length > 0 && (
          <List>
            {ingredients.map((ingredient, index) => (
              <ListItem key={index}>{ingredient.name}</ListItem>
            ))}
          </List>
        )}
        <InputGroup>
          <InputWrapper>
            <InputLabel>Step</InputLabel>
            <Input
              onChange={useCallback(evt => setStep(evt.target.value), [])}
              value={step}
              variant="normal"
              placeholder="Step"
            />
          </InputWrapper>
          <ButtonWrapper>
            <AddButton disabled={step.length === 0} onClick={addStep} />
          </ButtonWrapper>
        </InputGroup>
        {steps.length > 0 && (
          <List>
            {steps.map((step, index) => (
              <ListItem key={index}>{step.description}</ListItem>
            ))}
          </List>
        )}
        <SubmitWrapper>
          <Submit disabled={!canSubmit} onClick={handleSubmit}>
            Submit
          </Submit>
        </SubmitWrapper>
      </FormWrapper>
    </Wrapper>
  );
};

export default RecipeForm;
