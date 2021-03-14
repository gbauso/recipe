import styled from 'styled-components';

const List = styled.ul`
  padding: 8px;
`;

const ListItem = styled.li`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  list-style: square;
`;

export { List, ListItem };
