import React from "react";

const SellWithZabeelSection = () => (
    <section className="w-full bg-[#f7f6f3] py-16 px-0">
              <div className="w-full flex flex-col md:flex-row gap-8 px-8 items-center">
                {/* Left Side: Image */}
                <div className="flex-1 min-w-0 flex items-center justify-center mb-8 md:mb-0">
                  <img src="/images/home-hero-bg.jpg" alt="Sell With Zabeel" className="w-full max-w-lg rounded-xl object-cover shadow-lg" />
                </div>
                {/* Right Side: Content */}
                <div className="flex-1 min-w-0">
                  <div className="mb-2 text-[#b04a1a] font-medium">Get the best of both worlds</div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a2254] mb-6">Sell With Zabeel</h2>
                  {/* Feature 1 */}
                  <div className="flex items-start gap-4 mb-8">
                    <span className="flex items-center justify-center w-8 h-8 bg-[#f7f6f3] border border-[#e5e3df] rounded-lg mt-1">
                      {/* Cloud icon */}
                      <svg width="24" height="24" fill="none" viewBox="0 0 32 32"><path d="M24 18a4 4 0 0 0-4-4h-1.26A6 6 0 1 0 8 22h15a3 3 0 0 0 1-5.83Z" stroke="#B04A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <div>
                      <div className="font-bold text-lg text-[#1a2254] mb-1">Liquidate your assets</div>
                      <div className="text-gray-500 text-base">Leverage our co-ownership program to liquidate 50% or more of your property, and free up capital to invest in other assets</div>
                    </div>
                  </div>
                  {/* Feature 2 */}
                  <div className="flex items-start gap-4 mb-8">
                    <span className="flex items-center justify-center w-8 h-8 bg-[#f7f6f3] border border-[#e5e3df] rounded-lg mt-1">
                      {/* User icon */}
                      <svg width="24" height="24" fill="none" viewBox="0 0 32 32"><path d="M16 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" stroke="#B04A1A" strokeWidth="2"/><path d="M6 26c0-3.314 4.477-6 10-6s10 2.686 10 6" stroke="#B04A1A" strokeWidth="2" strokeLinecap="round"/></svg>
                    </span>
                    <div>
                      <div className="font-bold text-lg text-[#1a2254] mb-1">Retain home ownership</div>
                      <div className="text-gray-500 text-base">By keeping a fraction of your property, you can continue to enjoy the comfort and control over your valuable assets</div>
                    </div>
                  </div>
                  {/* Feature 3 */}
                  <div className="flex items-start gap-4 mb-8">
                    <span className="flex items-center justify-center w-8 h-8 bg-[#f7f6f3] border border-[#e5e3df] rounded-lg mt-1">
                      {/* Experience icon */}
                      <svg width="24" height="24" fill="none" viewBox="0 0 32 32"><path d="M8 20v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" stroke="#B04A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="16" cy="10" r="4" stroke="#B04A1A" strokeWidth="2"/></svg>
                    </span>
                    <div>
                      <div className="font-bold text-lg text-[#1a2254] mb-1">Indulge in a seamless experience</div>
                      <div className="text-gray-500 text-base">Discover an array of deluxe properties available for fractional ownership, delivered smoothly and conveniently</div>
                    </div>
                  </div>
                  {/* CTA Button */}
                  <div className="mt-6">
                    <a href="#partner-zabeel" className="inline-flex items-center justify-between w-full max-w-md px-6 py-3 border border-[#1a2254] rounded-lg font-semibold text-[#1a2254] text-base bg-white hover:bg-[#f0f1f7] transition">
                      <span>Partner with Zabeel</span>
                      <svg className="ml-3" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3" stroke="#1a2254" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </section>
);
export default SellWithZabeelSection;