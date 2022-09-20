import React from 'react';
import TopHeader from './TopHeader';
import NavigationHeader from './NavigationHeader';
const Header = () => {
  return (
    <section className='header_wrapper'>
      <TopHeader />
      <NavigationHeader />
    </section>
  );
};

export default Header;