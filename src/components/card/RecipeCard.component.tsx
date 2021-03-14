import React, { useCallback } from 'react';
import styled from 'styled-components';
import Card from './Card.component';

type RecipeCardProps = {
  name: string;
  id: string;
  onClick: (id: string) => void;
};

const Wrapper = styled(Card).attrs({ 'data-testId': 'recipe-card' })`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 6px;
`;

const Name = styled.span`
  margin-left: 16px;
  color: ${({ theme }) => theme.color.deepBlack};
`;

const RecipeCard: React.FC<RecipeCardProps> = ({ name, id, onClick }) => {
  const handleClick = useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      onClick(id);
    },
    [onClick, id]
  );

  return (
    <Wrapper onClick={handleClick}>
      <Name>{name}</Name>
    </Wrapper>
  );
};

export default RecipeCard;
