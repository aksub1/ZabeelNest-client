import React from "react";

const SchedulingAndTypesOfStaysSection = () => (
    <section className="w-full bg-[#f7f6f3] py-16 px-0">
              <div className="w-full flex flex-col md:flex-row gap-8 px-8">
                {/* Left Side: Text & Icons */}
                <div className="flex-1 min-w-0">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a2254] mb-4">Scheduling & Types of Stays</h2>
                  <p className="text-base text-gray-500 mb-8">1/8 Share = 41 nights/year. You can book these nights over two types of stays, depending on your preference.</p>
                  {/* General Stay */}
                  <div className="flex items-start gap-4 mb-8">
                    <span className="flex items-center justify-center w-12 h-12 bg-[#f7f6f3] border border-[#e5e3df] rounded-lg">
                      {/* Cloud icon */}
                      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><path d="M24 18a4 4 0 0 0-4-4h-1.26A6 6 0 1 0 8 22h15a3 3 0 0 0 1-5.83Z" stroke="#B04A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <div>
                      <div className="font-bold text-xl text-[#1a2254] mb-1">General Stay</div>
                      <div className="text-gray-500 text-base mb-2">A stay booked 8 nights to 24 months in advance. One general stay ranges in length between 1-7 nights, not including special dates.</div>
                    </div>
                  </div>
                  {/* Special Stay */}
                  <div className="flex items-start gap-4">
                    <span className="flex items-center justify-center w-12 h-12 bg-[#f7f6f3] border border-[#e5e3df] rounded-lg">
                      {/* Crown icon */}
                      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><path d="M6 22l4-10 6 8 6-8 4 10" stroke="#B04A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="6" y="22" width="20" height="4" rx="2" fill="#B04A1A" fillOpacity="0.1"/></svg>
                    </span>
                    <div>
                      <div className="font-bold text-xl text-[#1a2254] mb-1">Special Stay</div>
                      <div className="text-gray-500 text-base mb-2">Special Dates are holidays with peak usage for the specific location of the property.</div>
                    </div>
                  </div>
                </div>
                {/* Right Side: Table */}
                <div className="flex-1 min-w-0 flex items-center justify-center">
                  <div className="w-full max-w-md bg-[#8c2d1a] rounded-lg overflow-hidden shadow-lg">
                    <table className="w-full text-left text-white">
                      <thead>
                        <tr className="bg-[#8c2d1a]">
                          <th className="py-3 px-4 font-semibold">&nbsp;</th>
                          <th className="py-3 px-4 font-semibold">1/8 share</th>
                          <th className="py-3 px-4 font-semibold">1/4 share</th>
                          <th className="py-3 px-4 font-semibold">1/2 share</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white text-[#1a2254]">
                        <tr>
                          <td className="py-2 px-4">General Stays<br/>(at a time)</td>
                          <td className="py-2 px-4 text-center">2</td>
                          <td className="py-2 px-4 text-center">4</td>
                          <td className="py-2 px-4 text-center">8</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4">Special Stays<br/>(at a time)</td>
                          <td className="py-2 px-4 text-center">1</td>
                          <td className="py-2 px-4 text-center">2</td>
                          <td className="py-2 px-4 text-center">4</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 font-semibold">Total Nights</td>
                          <td className="py-2 px-4 text-center font-semibold">41</td>
                          <td className="py-2 px-4 text-center font-semibold">82</td>
                          <td className="py-2 px-4 text-center font-semibold">164</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>
);

export default SchedulingAndTypesOfStaysSection;