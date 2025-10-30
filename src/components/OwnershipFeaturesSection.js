import React from "react";


const OwnershipFeaturesSection = () => (
                <section className="w-full bg-[#f7f6f3] py-16 px-0">
              <div className="w-full px-8">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a2254] mb-12 text-left">Access Luxurious Holiday Homes with Fractional Ownership</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                  {/* Feature 1 */}
                  <div className="flex flex-col items-start">
                    <span className="mb-3">
                      {/* Bar chart icon */}
                      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect x="4" y="18" width="4" height="10" rx="2" fill="#B04A1A"/><rect x="10" y="12" width="4" height="16" rx="2" fill="#B04A1A"/><rect x="16" y="8" width="4" height="20" rx="2" fill="#B04A1A"/><rect x="22" y="4" width="4" height="24" rx="2" fill="#B04A1A"/></svg>
                    </span>
                    <span className="font-bold text-lg text-[#1a2254] mb-1">Lower<br />Price</span>
                    <span className="text-gray-500 text-base">Invest flexibly in high-end vacation homes and diversify your portfolio.</span>
                  </div>
                  {/* Feature 2 */}
                  <div className="flex flex-col items-start">
                    <span className="mb-3">
                      {/* User settings icon */}
                      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="10" r="4" stroke="#B04A1A" strokeWidth="2"/><path d="M6 26c0-3.314 4.477-6 10-6s10 2.686 10 6" stroke="#B04A1A" strokeWidth="2" strokeLinecap="round"/></svg>
                    </span>
                    <span className="font-bold text-lg text-[#1a2254] mb-1">Zero<br />Upkeep Hassles</span>
                    <span className="text-gray-500 text-base">We specialize in property management, so you can relax knowing that the upkeep is taken care of.</span>
                  </div>
                  {/* Feature 3 */}
                  <div className="flex flex-col items-start">
                    <span className="mb-3">
                      {/* Key icon */}
                      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="12" stroke="#B04A1A" strokeWidth="2"/><path d="M20 16a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" stroke="#B04A1A" strokeWidth="2"/><path d="M16 12v4l2 2" stroke="#B04A1A" strokeWidth="2" strokeLinecap="round"/></svg>
                    </span>
                    <span className="font-bold text-lg text-[#1a2254] mb-1">Seamless<br />Tech Experience</span>
                    <span className="text-gray-500 text-base">Access your properties, book stays, rent out, or re-list your ownership on our platform.</span>
                  </div>
                  {/* Feature 4 */}
                  <div className="flex flex-col items-start">
                    <span className="mb-3">
                      {/* Lightning icon */}
                      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><path d="M18 2 6 18h8l-2 12 12-16h-8l2-12Z" fill="#B04A1A"/></svg>
                    </span>
                    <span className="font-bold text-lg text-[#1a2254] mb-1">Unlock<br />Appreciation</span>
                    <span className="text-gray-500 text-base">Like any other real estate purchase, the value appreciates over time, resulting in a potential financial gain when you decide to sell your shares.</span>
                  </div>
                </div>
                <a href="#learn-more" className="inline-flex items-center px-6 py-4 border-2 border-[#1a2254] rounded-lg font-semibold text-[#1a2254] text-lg hover:bg-[#f0f1f7] transition group">
                  <span>Learn more</span>
                  <svg className="ml-3 group-hover:translate-x-1 transition-transform" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3" stroke="#1a2254" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </section>
);

export default OwnershipFeaturesSection;