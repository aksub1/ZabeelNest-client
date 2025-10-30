
import './index.css';
import FeaturedPropertiesSection from './components/FeaturedPropertiesSection';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PropertyDetails from './components/PropertyDetails';
import ZaynaChatPage from './components/ZaynaChatPage';
import Footer from './components/Footer';
import Header from './components/Header';
import ListingsPage from './components/ListingsPage';
import HomeHeroSection from './components/HomeHeroSection';
import SchedulingAndTypesOfStaysSection from './components/SchedulingAndTypesOfStaysSection';
import SellWithZabeelSection from './components/SellWithZabeelSection';
import ReapTheRewardsSection from './components/ReapTheRewardsSection';
import FeaturedInSection from './components/FeaturedInSection';
import StartJourneySection from './components/StartJourneySection';
import OwnershipFeaturesSection from './components/OwnershipFeaturesSection';

function useListings() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
  fetch(`${process.env.REACT_APP_API_URL}/listings`)
      .then(res => res.json())
      .then(data => {
        setListings(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load listings.');
        setLoading(false);
      });
  }, []);
  return { listings, loading, error };
}


function App() {
  const { listings, loading, error } = useListings();
  const handleSendToZayna = async (userMessage) => {
    try {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/zayna`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage })
      });
      const data = await res.json();
      return data.reply || "Sorry, I couldn't get a response from Zayna.";
    } catch (err) {
      return "Sorry, there was a problem connecting to Zayna.";
    }
  };

  // Filter featured listings
  const featuredListings = listings.filter(l => l.isFeatured);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-[#f7f6f3]">
            {/* Top Navigation */}
            <Header />
            {/* Hero Section */}
            <HomeHeroSection />
            {/* Ownership Features Section */}
            <OwnershipFeaturesSection/>
            {/* Featured Properties Section */}
            <FeaturedPropertiesSection
              featuredListings={featuredListings}
              loading={loading}
              error={error}
            />
            {/* Scheduling & Types of Stays Section */}
            <SchedulingAndTypesOfStaysSection />
            {/* Sell With Zabeel Section */}
            <SellWithZabeelSection />
            {/* Reap The Rewards Section */}
            <ReapTheRewardsSection />
            {/* Featured in Section */}
            <FeaturedInSection />
            {/* Start Your ZabeelNest Journey Section */}
            <StartJourneySection />
            {/* Footer Section */}
            <Footer />
          </div>
        } />
        <Route path="/listings" element={<ListingsPage listings={listings} loading={loading} error={error} />} />
        <Route path="/zayna" element={<ZaynaChatPage onSend={handleSendToZayna} />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
