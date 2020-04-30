import styled from 'styled-components';

interface CardProps {
  total?: boolean;
}

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
`;

export const NavContainer = styled.div`
  ul {
    display: flex;
    list-style: none;

    a {
      text-decoration: none;
    }

    li {
      width: 170px;
      padding: 10px 0;
      text-align: center;
      vertical-align: middle;
      color: #d9f8ff;
    }

    li.active {
      background: #f2f7ff;
      border-radius: 14px 14px 0px 0px;
      color: #061058;
    }
  }
`;

export const TableContainer = styled.section`
  margin-top: 64px;

  table {
    width: 100%;
    border-spacing: 0 8px;
    background: #fff;
    border-radius: 24px;
    padding: 10px 32px;
    box-shadow: 0px 20px 60px #d0e2f2;

    th {
      color: #061058;
      opacity: 0.5;
      font-weight: normal;
      padding: 20px 0;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
    }

    td {
      padding: 30px 0;
      border: 0;
      font-size: 16px;
      font-weight: normal;
      color: #969cb3;
      border-top: 1px solid #e1e2eb;

      &.title {
        color: #061058;
      }

      &.income {
        color: #61d7bb;
      }

      &.outcome {
        color: #f26b7f;
      }
    }

    /* td:first-child {
      border-radius: 8px 0 0 8px;
    }

    td:last-child {
      border-radius: 0 8px 8px 0;
    } */
  }

  /* table {
    width: 100%;
    border-spacing: 0 8px;

    th {
      color: #969cb3;
      font-weight: normal;
      padding: 20px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
    }

    td {
      padding: 20px 32px;
      border: 0;
      background: #fff;
      font-size: 16px;
      font-weight: normal;
      color: #969cb3;

      &.title {
        color: #363f5f;
      }

      &.income {
        color: #61d7bb;
      }

      &.outcome {
        color: #f26b7f;
      }
    }

    td:first-child {
      border-radius: 8px 0 0 8px;
    }

    td:last-child {
      border-radius: 0 8px 8px 0;
    }
  } */
`;
