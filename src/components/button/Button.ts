import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.blue};
  border: 1px solid ${({ theme }) => theme.color.lightBlue};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.font.weight.bold};

  &:hover {
    transform: scale(1.1);
  }
`;

export default Button;
