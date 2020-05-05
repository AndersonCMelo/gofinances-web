import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  margin-bottom: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  div {
    border: transparent;

    .react-select__value-container.css-g1d714-ValueContainer {
      padding: 0 20px;
    }

    .react-select__placeholder.css-1wa3eu0-placeholder {
      color: #a8a8b3;
    }
  }
`;
