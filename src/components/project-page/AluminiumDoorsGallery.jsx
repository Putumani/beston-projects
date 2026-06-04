import React, { useState } from 'react';
import { FaImages, FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

// Aluminium Doors Gallery Images
import aluminiumDoor1 from '../../assets/projects/aluminium-doors/aluminium-door-1.jpeg';
import aluminiumDoor2 from '../../assets/projects/aluminium-doors/aluminium-door-2.jpeg';
import aluminiumDoor3 from '../../assets/projects/aluminium-doors/aluminium-door-3.jpeg';
import aluminiumDoor4 from '../../assets/projects/aluminium-doors/aluminium-door-4.jpeg';
import aluminiumDoor5 from '../../assets/projects/aluminium-doors/aluminium-door-5.jpeg';
import aluminiumDoor6 from '../../assets/projects/aluminium-doors/aluminium-door-6.jpeg';
import aluminiumDoor7 from '../../assets/projects/aluminium-doors/aluminium-door-7.jpeg';
import aluminiumDoorMain from '../../assets/projects/aluminium-doors/aluminium-door.jpeg';

const aluminiumDoorsImages = [aluminiumDoorMain, aluminiumDoor1, aluminiumDoor2, aluminiumDoor3, aluminiumDoor4, aluminiumDoor5, aluminiumDoor6, aluminiumDoor7];

export default function AluminiumDoorsGallery({ navigateTo, brandDark, brandOrange }) {
  const [galleryViewOpen, setGalleryViewOpen] = useState(false);
  const [activeGalleryImgIndex, setActiveGalleryImgIndex] = useState(0);

  const openGalleryView = (index) => {
    setActiveGalleryImgIndex(index);
    setGalleryViewOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeGalleryView = () => {
    setGalleryViewOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextGalleryImage = () => {
    setActiveGalleryImgIndex((prev) => (prev + 1) % aluminiumDoorsImages.length);
  };

  const prevGalleryImage = () => {
    setActiveGalleryImgIndex((prev) => (prev - 1 + aluminiumDoorsImages.length) % aluminiumDoorsImages.length);
  };

  return (
    <>
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 mt-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-orange-50 px-4 py-1.5 rounded-full mb-4">
            <FaImages size={14} style={{ color: brandOrange }} />
            <span className="text-xs font-black uppercase tracking-wider" style={{ color: brandOrange }}>Product Showcase</span>
          </div>
          <h2 className="text-2xl font-black tracking-tight text-gray-900">
            Aluminium Doors Portfolio
          </h2>
          <p className="text-gray-500 mt-2 max-w-lg mx-auto">
            Browse our premium aluminium door installations for residential and commercial properties
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {aluminiumDoorsImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => openGalleryView(idx)}
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer bg-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img
                src={img}
                alt={`Aluminium door installation ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 pt-4">
          <button
            onClick={() => navigateTo('home')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all hover:opacity-90 border-none cursor-pointer"
            style={{ backgroundColor: brandDark, color: 'white' }}
          >
            <span>Request a Quote for Aluminium Doors</span>
            <FaArrowRight size={12} />
          </button>
        </div>
      </div>

      {/* Fullscreen Gallery Modal */}
      {galleryViewOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={closeGalleryView}>
          <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeGalleryView}
              className="absolute top-4 right-4 z-10 text-white bg-black/50 hover:bg-black/80 p-2 rounded-full transition-all border-none cursor-pointer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <button
              onClick={prevGalleryImage}
              className="absolute left-4 z-10 text-white bg-black/50 hover:bg-black/80 p-3 rounded-full transition-all border-none cursor-pointer"
            >
              <FaChevronLeft size={20} />
            </button>
            
            <button
              onClick={nextGalleryImage}
              className="absolute right-4 z-10 text-white bg-black/50 hover:bg-black/80 p-3 rounded-full transition-all border-none cursor-pointer"
            >
              <FaChevronRight size={20} />
            </button>
            
            <img
              src={aluminiumDoorsImages[activeGalleryImgIndex]}
              alt={`Aluminium doors gallery ${activeGalleryImgIndex + 1}`}
              className="max-w-[90vw] max-h-[90vh] object-contain"
            />
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-bold">
              {activeGalleryImgIndex + 1} / {aluminiumDoorsImages.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}