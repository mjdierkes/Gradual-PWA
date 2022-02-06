import React from 'react';

import MainNavbar from '../MainNavbar';
import IntroHero from './IntroHero';
import FeaturesHero from './FeaturesHero';
import Footer from './Footer';

function App() {
  return (
    <main>
      <MainNavbar />

      <IntroHero />
      <FeaturesHero />
      
      <Footer />
    </main>
  );
}

export default App;
