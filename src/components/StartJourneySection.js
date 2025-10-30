import React from "react";

const StartJourneySection = () => (
    <section className="w-full bg-[#f7f6f3] py-12 px-0">
              <div className="w-full bg-[#120f4c] max-w-7xl mx-auto flex flex-col md:flex-row items-stretch justify-between px-8">
                {/* Left: Text and Button */}
                <div className="flex-1 flex flex-col justify-center py-8">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Let’s Start Your ZabeelNest Journey</h2>
                  <p className="text-white mb-6">Have questions or need guidance? Our experts are here to help</p>
                  <a href="#connect" className="inline-flex items-center px-5 py-2 border border-white rounded text-white font-semibold hover:bg-white hover:text-[#120f4c] transition w-fit">
                    CONNECT WITH US
                    <svg className="ml-2" width="18" height="18" fill="none" viewBox="0 0 24 24">
                      <path d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
                {/* Right: Background SVG/Graphic */}
                <div className="flex-1 flex items-center justify-end relative min-h-[180px]">
                  <svg viewBox="0 0 700 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-[180px]">
                    <path d="M0 180L700 180V0L500 80V160H200V100L0 180Z" fill="none" stroke="#fff" strokeWidth="8"/>
                    <path d="M500 160V80L600 40L700 80" fill="none" stroke="#fff" strokeWidth="8"/>
                  </svg>
                </div>
              </div>
            </section>
);
export default StartJourneySection;

// This section is designed to encourage users to start their journey with ZabeelNest, providing a clear call to action and a visually appealing background graphic. The button leads to a contact or connection point for further assistance.