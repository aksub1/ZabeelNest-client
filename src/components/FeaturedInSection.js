import React from "react";

const FeaturedInSection = () => (
    <section className="w-full bg-[#f7f6f3] py-16 px-0">
              <div className="w-full px-8">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a2254] mb-8">Featured in</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Card 1 */}
                  <div className="bg-white rounded-xl shadow p-0 flex flex-col md:flex-row overflow-hidden border border-gray-100 min-h-[220px] max-h-[240px]">
                    <div className="w-full md:w-1/2 h-36 md:h-auto flex-shrink-0">
                      <img src="/images/home-hero-bg.jpg" alt="Startup Scene" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 p-4 flex flex-col justify-between">
                      <div>
                        <div className="text-lg font-semibold text-[#1a2254] mb-2 line-clamp-2">Egypt’s Real Estate Platform ZabeelNest Raises $500,000 Pre-Seed Round</div>
                        <div className="text-gray-500 text-sm mb-4 line-clamp-3">{`ZabeelNest, Egypt-based proptech co-ownership platform, has raised $500,000 in a pre-Seed round backed by several strategic angel investors, as well as Banque Misr’s Accelerator Program. Founded in 2022 by Omar Eldessouky and Mohamed Elkhatib, ZabeelNest enables people to own shares of a second home, while experiencing the perks of real estate ownership.`.slice(0, 140) + '...'}</div>
                      </div>
                      <div className="mt-2">
                        <img src="/images/startup-scene-logo.png" alt="Startup Scene" className="h-6" />
                      </div>
                    </div>
                  </div>
                  {/* Card 2 */}
                  <div className="bg-white rounded-xl shadow p-0 flex flex-col md:flex-row overflow-hidden border border-gray-100 min-h-[220px] max-h-[240px]">
                    <div className="w-full md:w-1/2 h-36 md:h-auto flex-shrink-0">
                      <img src="/images/home-hero-bg.jpg" alt="Zawya" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 p-4 flex flex-col justify-between">
                      <div>
                        <div className="text-lg font-semibold text-[#1a2254] mb-2 line-clamp-2">ZabeelNest Secures $500K In Pre-Seed To Bring Real Estate Co-Ownership To Egypt</div>
                        <div className="text-gray-500 text-sm mb-4 line-clamp-3">{`Cairo – ZabeelNest raised $500,000 in a pre-seed round, backed by one of Egypt’s Banque Misr, through the bank’s pilot programme to support innovative startups in Egypt. The programme aims to aid financial technology (FinTech) startups by providing subject matter sponsors from within Banque Misr, in addition to providing international subject matter experts for guidance and mentorship in the upcoming accelerated ventures, according to a recent press release.`.slice(0, 140) + '...'}</div>
                      </div>
                      <div className="mt-2">
                        <img src="/images/zawya-logo.png" alt="Zawya" className="h-6" />
                      </div>
                    </div>
                  </div>
                  {/* Card 3 */}
                  <div className="bg-white rounded-xl shadow p-0 flex flex-col md:flex-row overflow-hidden border border-gray-100 min-h-[220px] max-h-[240px]">
                    <div className="w-full md:w-1/2 h-36 md:h-auto flex-shrink-0">
                      <img src="/images/home-hero-bg.jpg" alt="Enterprise" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 p-4 flex flex-col justify-between">
                      <div>
                        <div className="text-lg font-semibold text-[#1a2254] mb-2 line-clamp-2">ZabeelNest Raises $500K In Pre-Seed To Bring Real Estate Co-Ownership To Egypt</div>
                        <div className="text-gray-500 text-sm mb-4 line-clamp-3">{`The first of its kind in Egypt and MENA, ZabeelNest offer new take on real estate ownership by empowering people to own shares of a vacation home (from 1/8th to 1/2) while enjoying the full perks of real estate.`.slice(0, 140) + '...'}</div>
                      </div>
                      <div className="mt-2">
                        <img src="/images/enterprise-logo.png" alt="Enterprise" className="h-6" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
);

export default FeaturedInSection;