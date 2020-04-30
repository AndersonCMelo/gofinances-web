import styled from 'styled-components';

interface CardProps {
  total?: boolean;
}

export const CardBlock = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  margin-top: -260px;
  margin-bottom: 40px;
`;

export const Card = styled.div`
  background: ${({ total }: CardProps): string =>
    total ? 'linear-gradient(90deg, #F26B7F 0%, #F8AF4B 100%)' : '#fff'};
  padding: 36px 20px;
  border-radius: 30px;
  color: ${({ total }: CardProps): string => (total ? '#fff' : '#363F5F')};
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.25);
  display: flex;

  div {
    margin-left: 20px;

    p {
      font-size: 16px;
      color: ${({ total }: CardProps): string => (total ? '#fff' : '#969CB3')};
    }

    h1 {
      margin-top: 4px;
      font-size: 36px;
      font-weight: normal;
      line-height: 36px;
    }
  }
`;
