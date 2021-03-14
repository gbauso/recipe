import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.blue};
  border: 1px solid ${({ theme }) => theme.color.lightBlue};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.font.weight.bold};

  &:hover:not([disabled]) {
    transform: scale(1.1);
  }

  &:disabled {
    background-color: ${({ theme }) => theme.color.lightGray};
    cursor: not-allowed;
  }
`;

export default Button;
