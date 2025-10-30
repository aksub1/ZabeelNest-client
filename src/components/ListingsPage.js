import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Breadcrumb from "./Breadcrumb";
import ListingCard from "./ListingCard";    
import StartJourneySection from "./StartJourneySection";
import { Link } from "react-router-dom";

const ListingsPage = ({ listings, loading, error }) => {
  return (
    <div className="min-h-screen bg-[#f7f6f3] flex flex-col">
      <Header />
      <Breadcrumb items={[
        { label: "Home", to: "/" },
        { label: "Listings" }
      ]} />
      {/* Filter and Listings */}
      <main className="flex-1 w-full px-0 py-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#1a2254] mb-8 pl-20">Property Listings</h1>
        <div className="mt-8 w-full">
          {loading ? (
            <div className="text-center py-8 text-gray-500">Loading properties...</div>
          ) : error ? (
            <div className="text-center py-8 text-red-500">{error}</div>
          ) : Array.isArray(listings) && listings.length === 0 ? (
            <div className="text-center py-8 text-gray-500">No properties found.</div>
          ) : (
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-20">
              {Array.isArray(listings) && listings.map(listing => (
                <Link
                  key={listing._id}
                  to={`/property/${listing._id}`}
                  className="block hover:shadow-xl transition-shadow rounded-2xl"
                  style={{ textDecoration: 'none' }}
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
          )}
        </div>
      </main>
      <StartJourneySection />
      <Footer />
    </div>
  );
};

export default ListingsPage;
