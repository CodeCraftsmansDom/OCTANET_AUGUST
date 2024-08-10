import React, { Suspense, lazy } from 'react';
import Nav from './components/Nav';
import { navLinks } from './constants';

// Lazy load sections for better performance
const Hero = lazy(() => import('./sections/Hero'));
const Footer = lazy(() => import('./sections/Footer'));
const CustomerReviews = lazy(() => import('./sections/CustomerReviews'));
const PopularProducts = lazy(() => import('./sections/PopularProducts'));
const Services = lazy(() => import('./sections/Services'));
const SpecialOffer = lazy(() => import('./sections/SpecialOffer'));
const SuperQuality = lazy(() => import('./sections/SuperQuality'));

const App = () => {
  return (
    <main className='relative'>
      <Nav navLinks={navLinks} />
      
      {/* Use Suspense for loading fallback */}
      <Suspense fallback={<div>Loading...</div>}>
        <section className='xl:padding-l wide:padding-r padding-b'>
          <Hero />
        </section>
        <section className='padding'>
          <PopularProducts />
        </section>
        <section className='padding'>
          <SuperQuality />
        </section>
        <section className='padding-x py-10'>
          <Services />
        </section>
        <section className='padding'>
          <SpecialOffer />
        </section>
        <section className='bg-pale-blue padding mb-8'>
          <CustomerReviews />
        </section>
        <section className='bg-black padding-x padding-t pb-8 mt-18 pt-4'>
          <Footer />
        </section>
      </Suspense>
    </main>
  );
};

export default App;
