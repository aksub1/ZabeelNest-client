import React from 'react';

export default function ListingsFilter({ filters, setFilters }) {
  return (
    <div className="w-full max-w-5xl flex flex-wrap gap-4 mb-8 px-4">
      <input
        className="flex-1 min-w-[180px] px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-400 text-sm"
        type="text"
        placeholder="Search by title or location..."
        value={filters.query}
        onChange={e => setFilters(f => ({ ...f, query: e.target.value }))}
      />
      <input
        className="w-32 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-400 text-sm"
        type="number"
        min="0"
        placeholder="Min Price"
        value={filters.minPrice}
        onChange={e => setFilters(f => ({ ...f, minPrice: e.target.value }))}
      />
      <input
        className="w-32 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-400 text-sm"
        type="number"
        min="0"
        placeholder="Max Price"
        value={filters.maxPrice}
        onChange={e => setFilters(f => ({ ...f, maxPrice: e.target.value }))}
      />
      <input
        className="w-24 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-400 text-sm"
        type="number"
        min="0"
        placeholder="Bedrooms"
        value={filters.bedrooms}
        onChange={e => setFilters(f => ({ ...f, bedrooms: e.target.value }))}
      />
      <input
        className="w-24 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-400 text-sm"
        type="number"
        min="0"
        placeholder="Bathrooms"
        value={filters.bathrooms}
        onChange={e => setFilters(f => ({ ...f, bathrooms: e.target.value }))}
      />
    </div>
  );
}
