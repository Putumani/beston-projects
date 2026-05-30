import React from 'react';
import { 
  FaHammer, 
  FaWrench, 
  FaShieldHalved, 
  FaHouse, 
  FaPaintRoller, 
  FaDroplet, 
  FaBorderAll, 
  FaLayerGroup, 
  FaSliders, 
  FaFire,
  FaCircleCheck 
} from 'react-icons/fa6';

import boundaryWallImg from '../assets/services-page/boundary-wall.jpg';
import concreteCastingImg from '../assets/services-page/concrete-casting.jpg';
import staircaseImg from '../assets/services-page/staircase.jpg';
import campsBayRoofingImg from '../assets/services-page/camps-bay-roofing.jpg';
import tilingImg from '../assets/services-page/roofing.jpg';
import pavingImg from '../assets/services-page/paving.jpg';
import houseImg from '../assets/services-page/house.jpg';
import aluminiumDoorImg from '../assets/services-page/aluminium-door.jpeg';
import braaiImg from '../assets/services-page/braai.jpg';

const servicesList = [
  {
    title: "Boundary Walls & Brickwork",
    description: "Professional boundary wall construction and brickwork services that combine security with aesthetic appeal.",
    features: [
      "New boundary wall construction",
      "Pillar extensions and decorative pillars",
      "Professional plastering services"
    ],
    icon: FaHammer,
    image: boundaryWallImg
  },
  {
    title: "Concrete Works & Excavations",
    description: "Professional concrete casting and excavation services for foundations, slabs, and structural elements.",
    features: [
      "Site excavations and land clearing",
      "Concrete casting and pouring",
      "Slab floor casting for buildings"
    ],
    icon: FaWrench,
    image: concreteCastingImg
  },
  {
    title: "Structural Repairs",
    description: "Expert structural repair services including crack repairs, and wall modifications.",
    features: [
      "Structural crack repairs",
      "House extensions and additions",
      "Wall openings and modifications"
    ],
    icon: FaShieldHalved,
    image: staircaseImg
  },
  {
    title: "Roofing & Waterproofing",
    description: "Complete roofing solutions including installation, replacement, and waterproofing services.",
    features: [
      "Roofing installations (all types)",
      "Complete roof replacement",
      "Torch-on waterproofing for parapets"
    ],
    icon: FaHouse,
    image: campsBayRoofingImg
  },
  {
    title: "External Painting",
    description: "Professional exterior painting services that transform and protect your property.",
    features: [
      "Exterior painting (Bothasig area specialist)",
      "Boundary wall painting",
      "Parapet painting"
    ],
    icon: FaPaintRoller,
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "External Tiling",
    description: "Expert external tiling services for pools, patios, and outdoor areas.",
    features: [
      "Tiling around swimming pools",
      "Patio and outdoor area tiling",
      "Boundary wall capping tiling"
    ],
    icon: FaDroplet,
    image: tilingImg
  },
  {
    title: "Paving & External Finishes",
    description: "Professional paving services starting from R120/m², including high-pressure cleaning.",
    features: [
      "Paving from R120/m²",
      "Driveway paving",
      "Walkway and pathway paving"
    ],
    icon: FaBorderAll,
    image: pavingImg
  },
  {
    title: "House Extensions",
    description: "Complete , house extensions and alteration services to expand your living space.",
    features: [
      "House extensions and additions",
      "Home alterations and renovations",
      "Garage conversions"
    ],
    icon: FaLayerGroup,
    image: houseImg
  },
  {
    title: "External Doors & Windows",
    description: "Professional replacement of wooden windows to modern aluminium frames.",
    features: [
      "Wooden to aluminium window replacement",
      "Door installation and replacement",
      "Sliding doors"
    ],
    icon: FaSliders,
    image: aluminiumDoorImg
  },
  {
    title: "External Features",
    description: "Custom outdoor features including built-in braais and boundary wall renovations.",
    features: [
      "Built-in braai (outdoor)",
      "Boundary wall renovations (Somerset area)",
      "Outdoor kitchen installation"
    ],
    icon: FaFire,
    image: braaiImg
  }
];

export default function ServicesPage({ navigateTo }) {
  const brandDark = '#071d46';
  const brandOrange = '#ff5722';

  return (
    <div className="w-full bg-[#f9fafb] min-h-screen pb-16 font-sans">
      <div 
        className="w-full text-white flex flex-col justify-center px-6 md:px-12 relative overflow-hidden" 
        style={{ backgroundColor: brandDark, minHeight: '260px' }}
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="w-full mx-auto relative z-10" style={{ maxWidth: '1200px' }}>
          <span className="text-xs uppercase font-extrabold tracking-widest text-slate-300 bg-white/10 px-3 py-1 rounded-full">
            Our Portfolio Scope
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mt-3">
            Our Exterior Construction Services
          </h1>
          <p className="text-sm md:text-base text-slate-300 mt-2 max-w-xl font-medium">
            Comprehensive solutions for all your exterior construction needs. Professional engineering paired with structural integrity.
          </p>
        </div>
      </div>

      <main className="w-full mx-auto px-4 md:px-8 mt-12" style={{ maxWidth: '1200px' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 flex flex-col overflow-hidden group transition-all duration-300"
              >
                <div className="h-52 w-full bg-gray-100 relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-white p-2.5 rounded-xl shadow-sm flex items-center justify-center border border-gray-50 text-indigo-900">
                    <Icon size={18} style={{ color: brandDark }} />
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-5 font-medium">
                      {service.description}
                    </p>

                    <ul className="space-y-2.5 border-t border-gray-100 pt-4 mb-6">
                      {servicesList[index].features.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs font-semibold text-gray-700">
                          <FaCircleCheck size={13} className="mt-0.5 shrink-0 text-indigo-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a 
                    href="#quote"
                    onClick={() => navigateTo('home')}
                    className="w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-center border transition-all duration-200"
                    style={{ 
                      color: brandDark, 
                      borderColor: '#e5e7eb',
                      backgroundColor: '#ffffff'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = brandDark;
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#ffffff';
                      e.currentTarget.style.color = brandDark;
                    }}
                  >
                    Learn More &rarr;
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-full border border-gray-100 rounded-3xl p-8 md:p-12 text-center mt-16 bg-white shadow-sm">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight" style={{ color: brandDark }}>
            Need a Custom Solution?
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto mt-2 font-medium">
            Contact us today for a free consultation. We'll assess your needs and provide a competitive quote.
          </p>
          <div className="mt-6 flex justify-center">
            <a 
              href="#quote"
              onClick={() => navigateTo('home')}
              className="text-white font-bold rounded-full transition-all hover:scale-105 duration-200 text-xs uppercase tracking-widest px-8 py-4 shadow-md"
              style={{ backgroundColor: brandOrange }}
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}