import styled, { css } from "styled-components";

const baseInputStyles = css`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 0.5rem;
  outline: none;
  transition: all 0.3s ease;
  width: 100%;
  color: rgb(0, 0, 0);

  &::placeholder {
    color: ${({ theme }) => theme.colors.lightGrey};
  }
`;

export const StyledInput = styled.input`
  ${baseInputStyles}
`;

export const StyledTextarea = styled.textarea`
  ${baseInputStyles}
  height: 150px;
  resize: vertical;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-bottom: 0.25rem;
`;
