import styled from 'styled-components';
import { shade } from 'polished';

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
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;
  color: #363f5f;
  text-align: center;
  margin-top: 40px;
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

export const ImportFileContainer = styled.section`
  background: #fff;
  margin-top: 40px;
  border-radius: 30px;
  padding: 64px;
  max-width: 736px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 20px 60px #d0e2f2;
`;

export const Footer = styled.section`
  margin-top: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 18px;
    color: #969cb3;

    img {
      margin-right: 5px;
    }
  }

  button {
    background: linear-gradient(90deg, #f26b7f 0%, #f8af4b 100%);
    color: #fff;
    border-radius: 5px;
    padding: 15px 80px;
    border: 0;
    transition: 0.4s ease;

    &:hover {
      transform: scale(1.04);
      box-shadow: 0 10px 30px #d0e2f2;
    }
  }
`;
