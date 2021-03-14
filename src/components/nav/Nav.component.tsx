import React, { useCallback } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import Logo from './Logo';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.background.color.navbar};
  height: 50px;
  display: flex;
  padding: 6px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const LogoWrapper = styled.div`
  & svg {
    fill: ${({ theme }) => theme.color.lightWhite};
  }

  margin-right: 16px;
`;

const Text = styled.span`
  color: ${({ theme }) => theme.color.lightWhite};
  font-size: 24px;
`;

const Nav: React.FC = () => {
  const history = useHistory();

  const handleClick = useCallback(() => history.push('/'), [history]);

  return (
    <Wrapper onClick={handleClick}>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Text>Recipe App</Text>
    </Wrapper>
  );
};

export default Nav;
