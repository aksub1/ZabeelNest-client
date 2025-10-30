import React, { useState, useEffect, useRef } from 'react';
import { FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';
import config from '../config';

export default function ListingCard({ images = [], title, location, pricePerShare, currency, status, description, amenities, shares, nightsPerYearPerShare }) {
  // Fallback image for broken images
  const fallbackImg = config.fallbackPropertyImg;
  // Prepare images with fallback for each
  const sliderImages = (images && images.length > 0 ? images.slice(0, 3) : [fallbackImg]).map(img => img || fallbackImg);
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(0);
  const [animating, setAnimating] = useState(false);
  const intervalRef = useRef();

  // Auto-slide every 3 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setPrev(current);
      setAnimating(true);
      setCurrent(prevIdx => (prevIdx + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(intervalRef.current);
  }, [sliderImages.length, current]);

  useEffect(() => {
    if (animating) {
      const timer = setTimeout(() => setAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [animating]);

  // Extract amenities for card display (bedrooms, bathrooms, area)
  let bedrooms, bathrooms, area;
  if (amenities && Array.isArray(amenities)) {
    const main = amenities.find(a => a.type === 'Amenities');
    if (main && Array.isArray(main.items)) {
      bedrooms = main.items.find(i => i.icon === 'bed')?.name;
      bathrooms = main.items.find(i => i.icon === 'bath')?.name;
      area = main.items.find(i => i.icon === 'area')?.name;
    }
  }

  return (
    <React.Fragment>
      <div className="bg-white shadow-md overflow-hidden flex flex-col border border-gray-100 relative">
        {/* Status badge top-left */}
        {status && (
          <span className="absolute top-4 left-4 z-10 bg-[#1a2254] text-white text-xs font-semibold px-3 py-1 rounded-md shadow">{status}</span>
        )}
        {/* Image slider */}
        <div className="relative w-full h-48 mb-0 flex items-center justify-center bg-gray-100">
          <div className="w-full h-48 overflow-hidden relative">
            <img
              src={sliderImages[animating ? prev : current]}
              alt={title}
              className={`h-48 w-full object-cover absolute top-0 left-0 transition-transform duration-500 ${animating ? 'translate-x-0' : 'translate-x-0'}`}
              style={{ zIndex: 1 }}
              onError={(e) => {
                e.target.src = fallbackImg;
                sliderImages[current] = fallbackImg;
              }}
            />
            <img
              src={sliderImages[current]}
              alt={title}
              className={`h-48 w-full object-cover absolute top-0 left-0 transition-transform duration-500 ${animating ? 'translate-x-0 animate-slide-in' : 'translate-x-0'}`}
              style={{ zIndex: 2 }}
              onError={(e) => {
                e.target.src = fallbackImg;
                sliderImages[current] = fallbackImg;
              }}
            />
            {sliderImages.length > 1 && (
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                {sliderImages.map((_, idx) => (
                  <span
                    key={idx}
                    className={`inline-block w-2 h-2 rounded-full ${idx === current ? 'bg-[#1a2254]' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        {/* Card body */}
        <div className="p-6 flex-1 flex flex-col justify-between">
          {/* Title */}
          <h3 className="text-lg font-bold text-[#1a2254] mb-2">{title}</h3>
          {/* Location */}
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <FaMapMarkerAlt className="mr-2 text-[#1a2254]" />
            <span>{location}</span>
          </div>
          {/* Amenities row */}
          <div className="flex gap-4 mb-4">
            {bedrooms && (
              <div className="flex items-center px-3 py-2 border border-[#1a2254] text-[#1a2254] bg-white text-xs font-medium gap-2">
                <FaBed className="text-base" />
                <span>{bedrooms.replace(' Bedrooms', '')}</span>
              </div>
            )}
            {bathrooms && (
              <div className="flex items-center px-3 py-2 border border-[#1a2254] text-[#1a2254] bg-white text-xs font-medium gap-2">
                <FaBath className="text-base" />
                <span>{bathrooms.replace(' Bathrooms', '')}</span>
              </div>
            )}
            {area && (
              <div className="flex items-center px-3 py-2 border border-[#1a2254] text-[#1a2254] bg-white text-xs font-medium gap-2">
                <FaRulerCombined className="text-base" />
                <span>{area.replace(' m²', '')} m²</span>
              </div>
            )}
          </div>
          {/* Price row */}
          <div className="flex items-center mt-auto">
            <span className="text-xl font-bold text-[#1a2254]">{currency} {pricePerShare?.toLocaleString()}</span>
            <span className="ml-2 text-xs text-gray-500">Price per 1/{shares} share</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
