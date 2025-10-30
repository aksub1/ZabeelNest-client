import React from "react";
import config from '../config';

const PropertyGallery = ({ images = [] }) => {
 
  const fallbackImg = config.fallbackPropertyImg;

  const [showModal, setShowModal] = React.useState(false);
  const [modalIndex, setModalIndex] = React.useState(0);
  if (!images.length) return null;
  return (
    <>
      <div className="w-full mb-8">
        {/* Gallery Grid - Responsive Layout */}
        {/* Mobile: 3 images, last is Show More */}
        <div className="w-full grid grid-cols-1 grid-rows-2 sm:hidden gap-4">
          {/* Large main image on top */}
          <div className="row-span-1 aspect-[16/11] overflow-hidden cursor-pointer" onClick={() => { setShowModal(true); setModalIndex(0); }}>
            <img src={images[0] || fallbackImg} alt="Main" className="object-cover w-full h-full" />
          </div>
          {/* Two smaller images below */}
          <div className="row-span-1 grid grid-cols-2 gap-4">
            <div className="aspect-[16/11] overflow-hidden cursor-pointer" onClick={() => { setShowModal(true); setModalIndex(1); }}>
              <img src={images[1] || fallbackImg} alt="Gallery" className="object-cover w-full h-full" />
            </div>
            <div className="aspect-[16/11] overflow-hidden relative cursor-pointer" onClick={() => { setShowModal(true); setModalIndex(2); }}>
              <img src={images[2] || fallbackImg} alt="Gallery" className="object-cover w-full h-full opacity-60" />
              <span className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold bg-[#1a2254]/60">Show More</span>
            </div>
          </div>
        </div>

        {/* Desktop: 5 images, custom grid layout */}
        <div className="w-full hidden sm:grid grid-cols-4 grid-rows-2 gap-4">
          {/* Large main image (spans 2 columns, 2 rows) */}
          <div className="col-span-2 row-span-2 aspect-[16/11] overflow-hidden cursor-pointer" onClick={() => { setShowModal(true); setModalIndex(0); }}>
            <img src={images[0] || fallbackImg} alt="Main" className="object-cover w-full h-full" />
          </div>
          {/* Top right two images */}
          <div className="col-span-1 row-span-1 aspect-[16/11] overflow-hidden cursor-pointer" onClick={() => { setShowModal(true); setModalIndex(1); }}>
            <img src={images[1] || fallbackImg} alt="Gallery1" className="object-cover w-full h-full" />
          </div>
          <div className="col-span-1 row-span-1 aspect-[16/11] overflow-hidden cursor-pointer" onClick={() => { setShowModal(true); setModalIndex(2); }}>
            <img src={images[2] || fallbackImg} alt="Gallery2" className="object-cover w-full h-full" />
          </div>
          {/* Bottom right two images (last one is Show More) */}
          <div className="col-span-1 row-span-1 aspect-[16/11] overflow-hidden cursor-pointer" onClick={() => { setShowModal(true); setModalIndex(3); }}>
            <img src={images[3] || fallbackImg} alt="Gallery3" className="object-cover w-full h-full" />
          </div>
          <div className="col-span-1 row-span-1 aspect-[16/11] overflow-hidden relative cursor-pointer" onClick={() => { setShowModal(true); setModalIndex(4); }}>
            <img src={images[4] || fallbackImg} alt="Gallery4" className="object-cover w-full h-full opacity-60" />
            <span className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold bg-[#1a2254]/60">Show More</span>
          </div>
        </div>
      </div>

      {/* Modal Gallery - Single Image with Prev/Next, arrows on sides, large image, buttons outside image */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative max-w-3xl w-full p-8 flex flex-col items-center justify-center"
            onClick={e => e.stopPropagation()}
            style={{ minHeight: '60vh' }}
          >
            {/* Close button */}
            <div className="w-full flex justify-end mb-4">
              <button
                className="text-[#b0b0b0] text-3xl z-10 p-2 hover:text-[#1a2254] transition-colors"
                onClick={() => setShowModal(false)}
                aria-label="Close gallery"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="8" x2="16" y2="16"/><line x1="16" y1="8" x2="8" y2="16"/></svg>
              </button>
            </div>
            <div className="w-full flex items-center justify-center mb-4">
              <button
                className="text-[#b0b0b0] text-4xl z-10 p-2 hover:text-[#1a2254] transition-colors mr-6 disabled:opacity-40"
                onClick={() => setModalIndex(i => Math.max(i - 1, 0))}
                disabled={modalIndex === 0}
                aria-label="Previous image"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
              </button>
              <div className="flex-1 flex items-center justify-center">
                <img src={images[modalIndex] || fallbackImg} alt={`Gallery${modalIndex}`} className="object-cover w-full h-full max-h-[70vh]" />
              </div>
              <button
                className="text-[#b0b0b0] text-4xl z-10 p-2 hover:text-[#1a2254] transition-colors ml-6 disabled:opacity-40"
                onClick={() => setModalIndex(i => Math.min(i + 1, images.length - 1))}
                disabled={modalIndex === images.length - 1}
                aria-label="Next image"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18"/></svg>
              </button>
            </div>
            {/* Image count indicator */}
            <span className="block text-base text-[#1a2254] bg-white bg-opacity-80 px-3 py-1 rounded mt-2">{modalIndex + 1} / {images.length}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default PropertyGallery;
