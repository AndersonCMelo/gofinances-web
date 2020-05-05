import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background: #3326ae;
  padding: 30px 0;

  header {
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 20px 260px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1040px) {
      width: 94%;
    }

    img {
      width: 300px;
    }

    nav {
      display: flex;

      a {
        display: flex;
        align-items: center;
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;

        & + a {
          margin-left: 32px;
        }

        &:hover {
          opacity: 0.6;
        }

        .img {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 60px;
          height: 60px;
          border-radius: 20px;
          background: #fff;

          img {
            width: 24px;
          }
        }

        p {
          color: #d9f8ff;
          margin-left: 10px;
        }
      }
    }
  }
`;
