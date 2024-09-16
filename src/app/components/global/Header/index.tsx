import React from 'react';
import HeaderNavigation from './HeaderNavigation';
import HeaderContent from './HeaderContent';

const Header: React.FC = () => {
  return (
    <header className="shadow-2xl">
      <HeaderNavigation />
      <HeaderContent />
    </header>
  );
};

export default Header;