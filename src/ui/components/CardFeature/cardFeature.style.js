import styled from "styled-components";

export const StyledCardFeature = styled.div`
  background: ${({ theme }) => theme.colors.backgroundDark};
  padding: 2rem;
  border-radius: 0.75rem;

  max-width: 400px;
  width: 100%;

  height: 100%;

  display: grid;
  grid-template-columns: 1fr 4fr;

  transition-duration: 150ms;

  &:hover {
    box-shadow:
      0 15px 20px ${({ theme }) => theme.colors.shadow},
      0 6px 12px ${({ theme }) => theme.colors.shadow};
  }
`;

export const Icon = styled.div`
  background: ${({ theme }) => theme.colors.lightGreen};
  width: 48px;
  height: 48px;
  border-radius: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: ${({ theme }) => theme.colors.white};
    width: 24px;
    height: 24px;
  }
`;

export const Title = styled.h4`
  color: ${({ theme }) => theme.colors.lightGreen};
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.75rem;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: 1rem;
  line-height: inherit;
`;
