import styled, { css } from 'styled-components';

type InputProps = {
  block?: boolean;
  variant: 'small' | 'normal';
};

const Input = styled.input<InputProps>`
  font-size: 14px;
  line-height: 28px;
  padding: 0 16px;

  font-family: ${({ theme }) => theme.font.family};
  font-weight: ${({ theme }) => theme.font.weight.regular};

  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.white};
  border: solid 1px ${({ theme }) => theme.color.lightGray};
  border-radius: 6px;

  outline: 0;

  &:focus {
    border-color: ${({ theme }) => theme.color.blue};
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.gray};
  }

  ${({ variant }) =>
    css`
      width: ${variant === 'small' ? '50%' : '100%'};
    `};

  ${({ block }) =>
    block &&
    css`
      display: block;
    `}
`;

export default Input;
