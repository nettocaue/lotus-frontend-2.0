import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
  }
`;

export const Header = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  margin-bottom: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

export const Title = styled.h2`
  color: rgb(17, 24, 39);
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2rem;
`;

export const Description = styled.p`
  color: rgb(107, 114, 128);
  font-size: 0.875rem;
  line-height: 1%.25;
`;

export const Tag = styled.span`
  background: rgb(240, 253, 244);
  color: rgb(22, 163, 74);
  font-weight: bold;
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
`;

export const BlockNotes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
