import React from "react";

const ReapTheRewardsSection = () => (
  
    <section className="w-full py-16 px-0">
              <div className="w-full flex flex-col md:flex-row gap-0">
                {/* Left Side: Content */}
                <div className="flex-1 min-w-0 bg-[#181e5a] px-12 py-16 flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10">Reap The Rewards</h2>
                  {/* Feature 1 */}
                  <div className="flex items-start gap-5 mb-10">
                    <span className="flex items-center justify-center w-8 h-8">
                      {/* Paper plane icon */}
                      <svg width="28" height="28" fill="none" viewBox="0 0 32 32"><path d="M4 28L28 16L4 4L8 16L4 28Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <div>
                      <div className="font-bold text-lg text-white mb-1">Share with friends</div>
                      <div className="text-white/80 text-base">Not only will you share memories you can also share maintenance and upkeep costs.</div>
                    </div>
                  </div>
                  {/* Feature 2 */}
                  <div className="flex items-start gap-5 mb-10">
                    <span className="flex items-center justify-center w-8 h-8">
                      {/* Discount icon */}
                      <svg width="28" height="28" fill="none" viewBox="0 0 32 32"><path d="M16 4L28 16L16 28L4 16L16 4Z" stroke="#fff" strokeWidth="2"/><circle cx="16" cy="16" r="4" stroke="#fff" strokeWidth="2"/></svg>
                    </span>
                    <div>
                      <div className="font-bold text-lg text-white mb-1">Enjoy Discounted Rates</div>
                      <div className="text-white/80 text-base">Get cashback when you co-own with family and friends or when buying an additional share.</div>
                    </div>
                  </div>
                  {/* CTA Button */}
                  <div className="mt-8">
                    <a href="#explore-share" className="inline-flex items-center gap-3 w-full max-w-xl px-6 py-4 bg-[#353a7a] text-white font-semibold text-base rounded transition">
                      <svg width="20" height="20" fill="none" viewBox="0 0 32 32"><path d="M4 28L28 16L4 4L8 16L4 28Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      <span>Explore and Share</span>
                    </a>
                  </div>
                </div>
                {/* Right Side: Image */}
                <div className="flex-1 min-w-0">
                  <img src="/images/home-hero-bg.jpg" alt="Reap The Rewards" className="w-full h-full object-cover" />
                </div>
              </div>
            </section>
  );

  export default ReapTheRewardsSection;