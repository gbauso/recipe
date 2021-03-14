import styled from 'styled-components';

const Card = styled.div`
  height: 72px;
  padding: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  background-color: ${({ theme }) => theme.background.color.card};

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export default Card;
