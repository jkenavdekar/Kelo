import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';
import Banner from '../partials/Banner';
import Cards from './Cards';
import Show from '../partials/Show';
import Show2 from '../partials/Show2';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <Show />
        <Show2 />
        <FeaturesBlocks />
        <FeaturesHome />
        <Newsletter />

      </main>

      {/*  Site footer */}

    </div>
  );
}

export default Home;