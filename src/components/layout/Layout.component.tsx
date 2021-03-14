import React from 'react';
import styled from 'styled-components';
import Nav from '../nav/Nav.component';
import Container from './Container.component';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.background.color.primary};
`;

const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
`;

const Content = styled.div`
  padding-top: 70px;
  padding-bottom: 30px;

  min-height: 100vh;
`;

const Layout: React.FC = ({ children }) => (
  <Wrapper>
    <Container>
      <HeaderWrapper>
        <Nav />
      </HeaderWrapper>

      <Content>{children}</Content>
    </Container>
  </Wrapper>
);

export default Layout;
