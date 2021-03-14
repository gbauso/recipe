import styled from 'styled-components';

const Container = styled.div`
  padding: 0 20px;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => `${theme.breakpoint.md}px`}) {
    max-width: 360px;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoint.lg}px`}) {
    max-width: 480px;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoint.xl}px`}) {
    max-width: 720px;
  }
`;

export default Container;
