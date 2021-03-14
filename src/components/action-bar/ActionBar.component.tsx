import React, { useCallback } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

const Wrapper = styled.div.attrs({ 'data-testid': 'action-bar' })`
  position: fixed;
  display: flex;
  align-items: center;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  bottom: 16px;
  right: 16px;
  background-color: ${({ theme }) => theme.background.color.navbar};

  &:hover {
    transform: scale(1.2);
  }
`;

const AddIcon = styled.span`
  &::before {
    content: '+';
  }

  cursor: pointer;
  padding: 0px 8px;
  height: 54px;
  color: ${({ theme }) => theme.color.white};
  font-size: 48px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

const ActionBar: React.FC = () => {
  const history = useHistory();

  const handleClick = useCallback(() => history.push('/create'), [history]);

  return (
    <Wrapper onClick={handleClick}>
      <AddIcon />
    </Wrapper>
  );
};

export default ActionBar;
