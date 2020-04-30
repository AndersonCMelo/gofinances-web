import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/gofinances-logo.png';
import listIcon from '../../assets/list-icon.svg';
import importIcon from '../../assets/import-icon.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav />
    </header>
  </Container>
);

export default Header;
