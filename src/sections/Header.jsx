import { Link } from 'react-scroll';
import { FaXmark, FaBars } from 'react-icons/fa6';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { link: 'Home', path: 'home' },
    { link: 'About', path: 'about' },
    { link: 'Menu', path: 'menu' },
    { link: 'Gallery', path: 'gallery' },
    { link: 'Contact', path: 'contact' },
  ];

  return (
    <nav className='flex justify-between items-center gap-4 bg-slate-800 lg:px-10 px-4 py-6 sticky top-0 z-30'>
      <div id='logo'>
        <h1 className='lg:text-[35px] text-[28px] text-orange-500 font-bold'>AMIRER TONG</h1>
      </div>

      {/* Desktop Menu */}
      <ul className='lg:flex hidden justify-center items-center gap-10'>
        {navItems.map(({ link, path }) => (
          <Link
            key={path}
            to={path}
            spy={true}
            offset={-100}
            smooth={true}
            className='text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-orange-500 hover:text-black'
          >
            {link}
          </Link>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div onClick={toggleMenu} className='lg:hidden'>
        {isMenuOpen ? (
          <FaXmark className='text-white text-2xl cursor-pointer' />
        ) : (
          <FaBars className='text-white text-2xl cursor-pointer' />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`${isMenuOpen ? 'flex' : 'hidden'} lg:hidden flex-col w-full h-fit bg-slate-800 p-4 absolute top-[80px] left-0`}
      >
        <ul className='flex flex-col justify-center items-center gap-2 w-full'>
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              spy={true}
              offset={-100}
              smooth={true}
              onClick={() => setIsMenuOpen(false)}
              className='text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-orange-500 hover:text-black'
            >
              {link}
            </Link>
          ))}
        </ul>
      </div>
      <button className='bg-green-500 px-8 py-3 rounded-full hover:bg-orange-500 hover:text-black font-bold hidden lg:flex'>ORDER NOW</button>
    </nav>
  );
};

export default Header;
