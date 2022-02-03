import React from 'react';
import Navbar from './Navbar';
import IntroHero from './IntroHero';
import FeaturesHero from './FeaturesHero';
import Footer from './Footer';

function App() {
  return (
    <main>
      <Navbar />

      <IntroHero />
      <FeaturesHero />
      
      <Footer />
    </main>
  );
}

export default App;
