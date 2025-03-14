import styled from "styled-components";

export const StyledCardFeature = styled.div`
  padding: 2rem;
  border-radius: 0.75rem;

  max-width: 400px;
  width: 100%;

  height: 100%;

  display: grid;
  grid-template-columns: 1fr 4fr;

  transition-duration: 150ms;

  &:hover {
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.1), 0 6px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const Icon = styled.div`
  background: rgb(92, 156, 84);
  width: 48px;
  height: 48px;
  border-radius: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: white;
    width: 24px;
    height: 24px;
  }
`;

export const Title = styled.h4`
  color: rgb(92, 156, 84);
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.75rem;
`;

export const Description = styled.p`
  color: rgb(75, 85, 99);
  font-size: 1rem;
  line-height: inherit;
`;
