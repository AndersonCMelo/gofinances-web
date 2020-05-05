import React from 'react';

import { Container } from './styles';

import Logo from '../../assets/new-logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
    </header>
  </Container>
);

export default Header;
