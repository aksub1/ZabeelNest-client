import React, { useState } from 'react';

export default function SharePrice({ pricePerShare, currency, shares = 8, nightsPerYearPerShare, financingAvailable }) {
  const [selectedShares, setSelectedShares] = useState(1);
  const maxShares = Math.floor(shares / 2) || 4; // up to 50% of shares

  // Format price with commas for thousands, lakhs, crores
  function formatPrice(val) {
    if (!val) return '';
    // UAE format: 14,00,000
    return val.toLocaleString('en-AE');
  }

  return (
    <div className="bg-white shadow-md border border-gray-100 p-6 rounded-2xl w-full">
      <div className="flex items-center gap-3 mb-4">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1a2254" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 9h8M8 13h6"/></svg>
        <h2 className="text-2xl font-bold text-[#1a2254]">Share Price</h2>
      </div>
      <div className="mb-2 text-sm text-gray-500">Shares to buy:</div>
      <div className="flex items-center justify-between mb-2">
        <input
          type="range"
          min={1}
          max={maxShares}
          value={selectedShares}
          onChange={e => setSelectedShares(Number(e.target.value))}
          className="w-full accent-[#1a2254]"
        />
        <span className="ml-4 text-[#1a2254] font-semibold text-base">{selectedShares}/{shares} <span className="text-xs font-normal">Shares</span></span>
      </div>
      <div className="mb-2 text-xs text-gray-500">You can buy up to 50% of the property only</div>
      <div className="w-full h-[2px] bg-gray-200 rounded mb-4" />
      <div className="mb-2 text-sm text-gray-500">Cash price</div>
      <div className="mb-4 text-3xl font-bold text-[#1a2254]">{formatPrice(pricePerShare * selectedShares)} {currency}</div>
      <div className="mb-2 text-xs text-gray-500">Nights per year</div>
      <div className="mb-4 text-lg font-bold text-[#1a2254]">{Math.round((nightsPerYearPerShare / shares) * selectedShares)}</div>
      {financingAvailable && (
        <div className="mb-4">
          <span className="inline-flex items-center px-3 py-1 bg-[#f7f6f3] text-[#1a2254] rounded-full text-xs font-medium border border-[#e0e0e0]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a2254" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
            Financing Options Available!
          </span>
        </div>
      )}
      <button className="w-full py-3 bg-white border border-gray-300 text-[#1a2254] font-bold rounded-lg shadow flex items-center justify-center gap-2 mb-4">
        REGISTER INTEREST <span className="ml-2">→</span>
      </button>
      <div className="flex gap-2">
        <button className="flex-1 py-3 bg-[#e9f7ef] border border-[#25d366] rounded-lg flex items-center justify-center text-[#25d366] font-bold">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#25d366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><circle cx="12" cy="12" r="10"/><path d="M16 8l-4.5 4.5-2.5-2.5"/></svg>
          WhatsApp
        </button>
        <button className="flex-1 py-3 bg-white border border-gray-300 rounded-lg flex items-center justify-center text-[#1a2254] font-bold">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1a2254" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          Call
        </button>
      </div>
    </div>
  );
}
