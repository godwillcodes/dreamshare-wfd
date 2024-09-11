import React from 'react';
import HeaderNavigation from './HeaderNavigation';
import HeaderContent from './HeaderContent';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-700">
      <HeaderNavigation />
      <HeaderContent />
    </header>
  );
};

export default Header;