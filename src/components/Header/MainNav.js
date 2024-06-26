import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import MenuBar from '../MenuBar/MenuBar';
import HeaderLogo from '../../assets/img/logo/logo.png';

const MainNav = () => {
  return (
    <div className="relative z-10  bg-transparent">
      <div className="relative py-5 px-0 flex justify-between items-center space-x-4 xl:space-x-8">
        <div className="flex justify-start flex-grow items-center space-x-3 sm:space-x-8 lg:space-x-10">
          {/* <Logo /> */}
          <a href='/inicio' smooth="true" >
            <img src={HeaderLogo} className='w-28 h-28 xl:w-32 xl:h-24'/>
          </a>
          {/* <span className='font-bold text-6xl text-primary uppercase'>Logo</span> */}
        </div>

        <div className="flex-shrink-0 flex items-center justify-end text-neutral-700 space-x-1">
          <div className="hidden items-center xl:flex space-x-2 ">
            <Navigation />
          </div>
        </div>

        <div className="flex items-center xl:hidden">
          <MenuBar />
        </div>
      </div>
    </div>
  );
};

export default MainNav;
