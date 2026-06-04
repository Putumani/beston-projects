import React from 'react';
import { 
  FaLocationDot, 
  FaArrowLeft, 
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaFileContract
} from 'react-icons/fa6';

export default function ProjectDetailView({ 
  selectedProject, 
  activeImgIndex, 
  onBack, 
  onPrevImage, 
  onNextImage, 
  onThumbnailClick, 
  navigateTo,
  brandDark,
  brandOrange 
}) {
  return (
    <div className="w-full bg-[#f9fafb] min-h-screen pb-20 font-sans">
      <div className="w-full bg-white border-b border-gray-200 py-4 px-4 md:px-8 sticky top-0 z-40 shadow-sm">
        <div className="w-full mx-auto flex items-center justify-between" style={{ maxWidth: '1200px' }}>
          <button 
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-gray-600 hover:text-gray-900 transition-colors border border-gray-200 bg-gray-50 px-4 py-2 rounded-xl border-none cursor-pointer"
          >
            <FaArrowLeft size={12} />
            <span>Back to Projects</span>
          </button>
          <span className="text-[10px] font-black uppercase bg-gray-100 px-3 py-1.5 rounded-md text-slate-700 tracking-wider">
            Showroom / {selectedProject.category}
          </span>
        </div>
      </div>

      <main className="w-full mx-auto px-4 md:px-8 mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8" style={{ maxWidth: '1200px' }}>
        <div className="lg:col-span-2 flex flex-col gap-4">
          <div className="w-full bg-black aspect-[4/3] md:aspect-[16/10] rounded-3xl relative overflow-hidden group shadow-md flex items-center justify-center">
            <img 
              src={selectedProject.images[activeImgIndex]} 
              alt={`${selectedProject.title} view`} 
              className="max-w-full max-h-full object-contain"
            />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>

            {selectedProject.images.length > 1 && (
              <>
                <button 
                  onClick={onPrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/80 p-3.5 rounded-full backdrop-blur-sm transition-all shadow border-none cursor-pointer"
                >
                  <FaChevronLeft size={16} />
                </button>
                <button 
                  onClick={onNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/80 p-3.5 rounded-full backdrop-blur-sm transition-all shadow border-none cursor-pointer"
                >
                  <FaChevronRight size={16} />
                </button>
              </>
            )}

            <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-md text-white text-xs font-bold tracking-wider">
              {activeImgIndex + 1} / {selectedProject.images.length}
            </div>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
            {selectedProject.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => onThumbnailClick(idx)}
                className={`aspect-square rounded-xl overflow-hidden bg-gray-100 transition-all border-none cursor-pointer ${
                  activeImgIndex === idx 
                    ? 'ring-4 ring-offset-2 scale-95' 
                    : 'opacity-70 hover:opacity-100'
                }`}
                style={{ '--tw-ring-color': brandDark }}
              >
                <img src={img} alt="Thumbnail preview" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between h-fit lg:sticky lg:top-24">
          <div>
            <div className="flex items-center gap-1.5 text-gray-400 font-bold text-xs mb-3">
              <FaLocationDot size={12} style={{ color: brandOrange }} />
              <span className="text-gray-600">{selectedProject.location}</span>
            </div>

            <h1 className="text-2xl font-black tracking-tight text-gray-900 leading-tight mb-4">
              {selectedProject.title}
            </h1>

            <div className="bg-slate-50 rounded-2xl p-4 mb-6 border border-slate-100">
              <h4 className="text-[11px] font-black uppercase text-slate-400 tracking-wider mb-1 flex items-center gap-1.5">
                <FaFileContract size={11} />
                Operational Scope
              </h4>
              <p className="text-sm font-bold text-slate-800">{selectedProject.scope}</p>
            </div>

            <p className="text-gray-500 text-sm font-medium leading-relaxed mb-6">
              {selectedProject.details}
            </p>
          </div>

          <div className="border-t border-gray-100 pt-5 mt-4">
            <button
              onClick={() => navigateTo('home')}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-extrabold text-sm uppercase tracking-wider text-white shadow-md transition-all hover:opacity-95 border-none cursor-pointer"
              style={{ backgroundColor: brandOrange }}
            >
              <span>Request Pricing Details</span>
              <FaArrowRight size={12} />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}