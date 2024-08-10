import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
import { motion } from 'framer-motion';

const Nav = () => {
  return (
    <header className='relative z-10 w-full bg-gradient-to-r from-gray-100 to-white py-4 shadow-lg'>
      <nav className='flex justify-between items-center max-container px-6'>
        {/* Logo */}
        <a href="/" className='flex-shrink-0'>
          <img
            src={headerLogo}
            width={130}
            height={29}
            alt="Header Logo"
            className='transition-transform transform hover:scale-110 duration-300'
          />
        </a>

        {/* Navigation Links */}
        <ul className='hidden lg:flex flex-1 justify-center items-center gap-8'>
          {navLinks.map((item) => (
            <li key={item.label} className='transition-transform transform hover:scale-110 duration-300'>
              <a
                href={item.href}
                className='text-lg font-medium text-gray-700 hover:text-orange-500'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu */}
        <motion.div
          className='lg:hidden flex items-center cursor-pointer p-2 rounded-full bg-gray-200 shadow-md'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img
            src={hamburger}
            alt="Hamburger Menu"
            width={25}
            height={25}
            className='transition-transform transform hover:rotate-90 duration-300'
          />
        </motion.div>
      </nav>
    </header>
  );
};

export default Nav;
