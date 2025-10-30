
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from './Header';
import amenityIconMap from './amenityIconMap';
import Breadcrumb from './Breadcrumb';

import StartJourneySection from './StartJourneySection';
import Footer from './Footer';
import PropertyGallery from './PropertyGallery';
import FeaturedPropertiesSection from './FeaturedPropertiesSection';

import SharePrice from './SharePrice';


export default function PropertyDetails() {
  const [showAllAmenities, setShowAllAmenities] = useState(false);
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [otherListings, setOtherListings] = useState([]);
  const [otherLoading, setOtherLoading] = useState(true);
  const [otherError, setOtherError] = useState(null);

  useEffect(() => {
  fetch(`${process.env.REACT_APP_API_URL}/listings`)
      .then(res => res.json())
      .then(data => {
        const found = data.find(l => l._id === id);
        setListing(found);
        setLoading(false);
        // Exclude current property and only show featured properties
        setOtherListings(data.filter(l => l._id !== id && l.isFeatured));
        setOtherLoading(false);
      })
      .catch(() => {
        setError('Failed to load property details.');
        setLoading(false);
        setOtherError('Failed to load featured properties.');
        setOtherLoading(false);
      });
  }, [id]);

  return (
    <>
      <div className="min-h-screen bg-[#f7f6f3] flex flex-col w-full">
        <Header />
        <Breadcrumb items={[ 
          { label: "Home", to: "/" },
          { label: "Listings", to: "/listings" },
          { label: listing?.title || "Property Details" }
        ]} />
        {loading ? (
          <div className="text-center py-10">Loading...</div>
        ) : error || !listing ? (
          <div className="text-center py-10 text-red-500">{error || 'Property not found.'}</div>
        ) : (
          <div className="flex flex-col items-center py-10">
            <div className="w-full bg-[#f7f6f3] px-8">
              {/* Title, location, share button */}
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 px-6">
                <div>
                  <h1 className="text-4xl font-extrabold text-[#1a2254] mb-2">{listing.title}</h1>                  
                  <div className="flex items-center gap-2">
                    <span className="text-base text-[#b04a1a] font-semibold flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 inline-block text-[#1a2254]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                      {listing.location}
                    </span>
                  </div>
                </div>
                <button className="bg-[#f7f6f3] text-[#1a2254] px-4 py-2 rounded-lg shadow flex items-center gap-2 mt-4 md:mt-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 8a3 3 0 11-6 0 3 3 0 016 0zm6 8a6 6 0 11-12 0 6 6 0 0112 0z" /></svg>
                  Share
                </button>
              </div>
              {/* Gallery */}
              <PropertyGallery images={listing.images && listing.images.length ? listing.images : [listing.image]} />
              <div className="flex flex-col lg:flex-row gap-10">
                {/* Left column: property info */}
                <div className="flex-1 min-w-0">
                  {/* About Property Section - match image layout */}
                  <div className="mb-8 px-6">
                    <h2 className="text-xl font-bold text-[#1a2254] mb-2">About Property</h2>
                    {/* Icon boxes for bedrooms, bathrooms, area with icons */}
                    <div className="flex gap-4 mb-4">
                      {listing.amenities && Array.isArray(listing.amenities) && (() => {
                        const main = listing.amenities.find(a => a.type === 'Amenities');
                        if (main && Array.isArray(main.items)) {
                          const bedrooms = main.items.find(i => i.icon === 'bed');
                          const bathrooms = main.items.find(i => i.icon === 'bath');
                          const area = main.items.find(i => i.icon === 'area');
                          return <>
                            {bedrooms && (
                              <div className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-[#1a2254] bg-white text-base font-medium gap-2">
                                <span className="inline-block text-lg mr-2">{React.createElement(amenityIconMap['bed'])}</span>
                                {bedrooms.name}
                              </div>
                            )}
                            {bathrooms && (
                              <div className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-[#1a2254] bg-white text-base font-medium gap-2">
                                <span className="inline-block text-lg mr-2">{React.createElement(amenityIconMap['bath'])}</span>
                                {bathrooms.name}
                              </div>
                            )}
                            {area && (
                              <div className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-[#1a2254] bg-white text-base font-medium gap-2">
                                <span className="inline-block text-lg mr-2">{React.createElement(amenityIconMap['area'])}</span>
                                {area.name}
                              </div>
                            )}
                          </>;
                        }
                        return null;
                      })()}
                    </div>
                    {/* Italic intro text */}
                    {listing.intro && (
                      <div className="italic text-gray-600 mb-4">{listing.intro}</div>
                    )}
                    {/* Main description text */}
                    <div className="text-base text-gray-700 whitespace-pre-line leading-relaxed mb-4">{listing.description}</div>
                  </div>
                  {/* Essentials Amenities Section only */}
                  <div className="mb-8 px-6">
                    <h3 className="text-lg font-bold text-[#1a2254] mb-3">Amenities</h3>
                    <div className="flex flex-wrap gap-3">
                      {listing.amenities && (() => {
                        const essentials = listing.amenities.find(a => a.type === 'Essentials');
                        if (essentials && Array.isArray(essentials.items)) {
                          return essentials.items.map((item, i) => (
                            <div key={item.name + i} className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-[#1a2254] bg-white text-base font-medium gap-2">
                              {item.icon && amenityIconMap[item.icon] && (
                                <span className="inline-block text-lg mr-1">{React.createElement(amenityIconMap[item.icon])}</span>
                              )}
                              {item.name}
                            </div>
                          ));
                        }
                        return null;
                      })()}
                    </div>
                    {/* Show all amenities button */}
                    <button className="mt-6 px-6 py-2 bg-white border border-gray-300 rounded text-[#1a2254] font-semibold text-sm shadow" onClick={() => setShowAllAmenities(true)}>Show all amenities</button>
                  </div>
      {/* Modal for all amenities grouped by type */}
      {showAllAmenities && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
          onClick={() => setShowAllAmenities(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md h-[500px] overflow-y-auto relative"
            onClick={e => e.stopPropagation()}
          >
            <button className="absolute top-4 right-4 text-[#1a2254] text-xl font-bold" onClick={() => setShowAllAmenities(false)}>&times;</button>            
            {listing.amenities && listing.amenities.map((cat, idx) => (
              <div key={cat.type + idx} className="mb-6">
                <h3 className="text-lg font-bold text-[#1a2254] mb-3">{cat.type}</h3>
                <div className="flex flex-wrap gap-3">
                  {cat.items.map((item, i) => (
                    <div key={item.name + i} className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-[#1a2254] bg-white text-base font-medium gap-2">
                      {item.icon && amenityIconMap[item.icon] && (
                        <span className="inline-block text-lg mr-1">{React.createElement(amenityIconMap[item.icon])}</span>
                      )}
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
                </div>
                {/* Right column: SharePrice */}
                <div className="w-full lg:w-[400px] flex-shrink-0">
                  <SharePrice
                    pricePerShare={listing.pricePerShare}
                    currency={listing.currency}
                    shares={listing.shares}
                    nightsPerYearPerShare={listing.nightsPerYearPerShare}
                    financingAvailable={listing.financingAvailable}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Featured Properties Section at the end */}
        <FeaturedPropertiesSection
          featuredListings={otherListings}
          loading={otherLoading}
          error={otherError}
          heading="You might also like"
        />
        <StartJourneySection />
        <Footer />
      </div>
    </>
  );
  }
