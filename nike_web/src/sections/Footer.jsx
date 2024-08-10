import React, { useState } from 'react';
import { copyrightSign } from '../assets/icons';
import { footerLogo } from '../assets/images';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleLinkClick = (event, id) => {
    event.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubscription = (e) => {
    e.preventDefault();
    // Add subscription logic here
    if (email) {
      setSubscribed(true);
      setEmail('');
      // Further logic for handling email subscription can be added here
    }
  };

  return (
    <footer id="contact-us" className='max-container py-12 bg-gray-900 text-white'>
      <div className='flex justify-between items-start gap-20 flex-wrap lg:flex-nowrap'>
        <div className='flex flex-col items-start'>
          <a href='/' onClick={(e) => handleLinkClick(e, 'home')} aria-label="Home">
            <img
              src={footerLogo}
              alt='Company logo'
              width={150}
              height={46}
              className='m-0'
            />
          </a>
          <p className='mt-6 text-base leading-7 font-montserrat text-gray-400 max-w-xs'>
            Get shoes ready for the new term at your nearest Nike store. Find
            your perfect size in store and get rewards.
          </p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon) => (
              <a
                href={icon.href}
                key={icon.alt}
                aria-label={icon.alt}
                className='flex justify-center items-center w-12 h-12 bg-white rounded-full hover:bg-gray-200 transition relative group'
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
                <span className='absolute bottom-14 bg-black text-white text-xs rounded p-1 opacity-0 group-hover:opacity-100 transition'>
                  {icon.alt}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className='flex flex-1 justify-between gap-20 flex-wrap lg:gap-10'>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='font-montserrat text-2xl font-medium mb-6'>
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li key={link.name} className='mt-3'>
                    <a
                      href={`#${link.link}`}
                      onClick={(e) => handleLinkClick(e, link.link)}
                      className='font-montserrat text-base text-gray-400 hover:text-white transition'
                      aria-label={`Navigate to ${link.name}`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='flex flex-col items-start mt-8 lg:mt-0'>
          <h4 className='font-montserrat text-2xl font-medium mb-6'>Newsletter</h4>
          <p className='text-gray-400 mb-4'>
            Subscribe to our newsletter to get the latest updates.
          </p>
          <form className='flex' onSubmit={handleSubscription}>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Your email address'
              className='p-2 rounded-l bg-gray-800 text-white placeholder-gray-500 focus:outline-none'
              required
            />
            <button
              type='submit'
              className='p-2 rounded-r bg-blue-600 hover:bg-blue-700 transition text-white'
            >
              Subscribe
            </button>
          </form>
          {subscribed && (
            <p className='mt-2 text-green-400'>
              Thank you for subscribing!
            </p>
          )}
        </div>
      </div>

      <div className='flex justify-between text-gray-400 mt-24 flex-wrap items-center'>
        <div className='flex items-center gap-2 font-montserrat cursor-pointer'>
          <img
            src={copyrightSign}
            alt='Copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
        </div>
        <p
          className='font-montserrat cursor-pointer hover:text-white transition'
          onClick={(e) => handleLinkClick(e, 'terms-and-conditions')}
        >
          Terms & Conditions
        </p>
      </div>
    </footer>
  );
};

export default Footer;
