import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import StatsSection from './components/StatsSection';
import TrendingAppsSection from './components/TrendingAppsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />

      <HeroSection />

      <StatsSection />

      <TrendingAppsSection />

      <Footer />
    </div>
  )
}

export default App