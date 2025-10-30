import React from "react";
import { Link } from "react-router-dom";

const HomeHeroSection = () => (
  <section
    className="relative flex flex-col items-center justify-center min-h-screen w-full bg-cover bg-center"
    style={{ backgroundImage: 'url(/images/home-hero-bg.jpg)' }}
  >
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/60" />
    <div className="relative flex flex-col items-center justify-center w-full pt-32 pb-20">
      <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center mb-8 drop-shadow-lg">Own a Share, Everywhere.</h1>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-3xl mx-auto justify-center items-center">
        {/* Card 1: Listings */}
        <div className="flex-1 bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col items-start gap-3 w-full min-h-[230px] min-w-0 md:min-w-[350px] md:max-w-[500px]">
          <span className="text-xl font-bold text-gray-900 mb-1">Co-own Your Holiday Home</span>
          <span className="text-gray-600 mb-2">Explore our available listings and own shares in your dream property</span>
          <div className="flex-grow" />
          <a href="#listings" className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition text-base">
            <span>Browse Listings</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3" />
            </svg>
          </a>
        </div>
        {/* Card 2: Zayna AI */}
        <div className="flex-1 bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col items-start gap-3 w-full min-h-[230px] min-w-0 md:min-w-[350px] md:max-w-[500px]">
          <span className="text-xl font-bold text-gray-900 mb-1">Talk to Zayna AI</span>
          <span className="text-gray-600 mb-2">Your AI real estate assistant for Dubai</span>
          <div className="flex-grow" />
          <Link to="/zayna" className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition text-base">
            <span>Chat Now</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default HomeHeroSection;
