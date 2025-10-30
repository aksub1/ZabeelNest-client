import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ListingCard from './ListingCard';

const FeaturedPropertiesSection = ({ featuredListings, loading, error, heading }) => {
  const ITEMS_PER_PAGE = 4;
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(featuredListings.length / ITEMS_PER_PAGE);
  const paginatedListings = featuredListings.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };
  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <section className="w-full bg-white py-16 px-0" id="listings">
      <div className="w-full px-4">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a2254] text-left">{typeof heading === 'string' ? heading : 'Featured Properties'}</h2>
          {/* Pagination Controls Top Right */}
          <div className="flex items-center">
            <button
              onClick={handlePrev}
              disabled={page === 1}
              className={`rounded-full border-2 w-9 h-9 flex items-center justify-center mr-2 transition-all duration-200
                ${page === 1 ? 'border-[#a3a3c2] text-[#a3a3c2] bg-white' : 'border-[#1a2254] text-[#1a2254] bg-white hover:bg-[#e0e7ff]'}
                `}
              aria-label="Previous page"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 14l-4-4 4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              disabled={page === totalPages}
              className={`rounded-full border-2 w-9 h-9 flex items-center justify-center ml-2 transition-all duration-200
                ${page === totalPages ? 'border-[#a3a3c2] text-[#a3a3c2] bg-white' : 'border-[#1a2254] text-[#1a2254] bg-white hover:bg-[#e0e7ff]'}
                `}
              aria-label="Next page"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 6l4 4-4 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
        {loading ? (
          <div className="text-center py-8 text-gray-500">Loading featured properties...</div>
        ) : error ? (
          <div className="text-center py-8 text-red-500">{error}</div>
        ) : featuredListings.length === 0 ? (
          <div className="text-center py-8 text-gray-500">No featured properties found.</div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {paginatedListings.map(listing => (
              <Link
                key={listing._id}
                to={`/property/${listing._id}`}
                className="block hover:shadow-xl transition-shadow rounded-2xl"
                style={{ textDecoration: 'none' }}
                onClick={() => {
                  if (window.location.pathname.startsWith('/property/')) {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else {
                    window.scrollTo({ top: 0, behavior: 'auto' });
                  }
                }}
              >
                <ListingCard
                  images={listing.images}
                  title={listing.title}
                  location={listing.location}
                  pricePerShare={listing.pricePerShare}
                  currency={listing.currency}
                  status={listing.status}
                  description={listing.description}
                  amenities={listing.amenities}
                  nightsPerYearPerShare={listing.nightsPerYearPerShare}
                  shares={listing.shares}
                />
              </Link>
              ))}
            </div>
            {/* Page Indicator */}
            <div className="flex justify-center mt-4">
              <span className="w-8 h-1 bg-[#1a2254] rounded-full" style={{ opacity: 0.7 }}></span>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default FeaturedPropertiesSection;
