import React, { useState } from 'react';
import { 
  Camera, 
  X, 
  MapPin, 
  Tag, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2 
} from 'lucide-react';
import { GALLERY_ITEMS } from '../data/schoolData';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['all', 'Campus', 'Academics', 'STEM', 'Sports', 'Culture', 'Arts', 'Library'];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase());

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="campus-life" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-900 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200">
            <Camera className="w-3.5 h-3.5 text-blue-700" />
            <span>Campus Life & Moments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-[#0B1D38] tracking-tight">
            Learning Beyond The{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-amber-600 italic">
              Classroom
            </span>
          </h2>
          <p className="mt-3 text-slate-600 text-base md:text-lg">
            Sports, science symposiums, arts, cultural pageants, and national celebrations — glimpses into the vibrant everyday life of IDPS scholars.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all capitalize cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#133568] text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat === 'all' ? 'All Activities' : cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden aspect-4/3 bg-slate-900 cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07172c]/90 via-[#07172c]/20 to-transparent"></div>

              {/* Tag & Location */}
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 text-[#0a1d38] backdrop-blur-xs">
                  {item.category}
                </span>
              </div>

              {/* Text bottom */}
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h4 className="text-sm font-bold truncate group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h4>
                <div className="flex items-center gap-1 text-[11px] text-slate-300 mt-0.5">
                  <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                  <span>{item.location}</span>
                </div>
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={filteredItems[lightboxIndex].src}
              alt={filteredItems[lightboxIndex].title}
              className="max-w-full max-h-[70vh] rounded-2xl object-contain shadow-2xl"
            />
            <div className="text-center text-white mt-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
                {filteredItems[lightboxIndex].category}
              </span>
              <h3 className="text-lg font-bold">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-xs text-slate-300 flex items-center justify-center gap-1 mt-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>{filteredItems[lightboxIndex].location}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
