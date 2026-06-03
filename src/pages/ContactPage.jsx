import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaLocationDot, FaPaperPlane } from 'react-icons/fa6';

export default function ContactPage() {
  const brandDark = '#071d46';
  const brandOrange = '#ff5722';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`New Project Inquiry: ${formData.projectType}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:bestonconstruct@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="w-full bg-[#f9fafb] min-h-screen pb-20 font-sans relative">
      <div 
        className="w-full text-white flex flex-col justify-center px-6 md:px-12 relative overflow-hidden" 
        style={{ backgroundColor: brandDark, minHeight: '280px' }}
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="w-full mx-auto relative z-10" style={{ maxWidth: '1200px' }}>
          <span className="text-xs uppercase font-extrabold tracking-widest text-slate-300 bg-white/10 px-3 py-1 rounded-full">
            Connect With Us
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mt-3">
            Get in Touch
          </h1>
          <p className="text-sm md:text-base text-slate-300 mt-2 max-w-xl font-medium">
            Ready to start your next construction or renovation project? Contact our team for a professional consultation and quote.
          </p>
        </div>
      </div>

      <div className="w-full py-16 px-4 md:px-8">
        <div className="w-full mx-auto" style={{ maxWidth: '900px' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1 space-y-6">
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <FaPhone className="mb-3" style={{ color: brandOrange }} size={20} />
                <h4 className="text-xs font-black uppercase text-gray-400 tracking-wider">Phone</h4>
                <p className="text-sm font-bold text-gray-900">+27 65 864 1093</p>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <FaEnvelope className="mb-3" style={{ color: brandOrange }} size={20} />
                <h4 className="text-xs font-black uppercase text-gray-400 tracking-wider">Email</h4>
                <p className="text-sm font-bold text-gray-900">bestonconstruct@gmail.com</p>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <FaLocationDot className="mb-3" style={{ color: brandOrange }} size={20} />
                <h4 className="text-xs font-black uppercase text-gray-400 tracking-wider">Location</h4>
                <p className="text-sm font-bold text-gray-900">Grandflora, Milnerton, Cape Town, 7441</p>
              </div>
            </div>

            <form 
              onSubmit={handleSubmit}
              className="md:col-span-2 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2"
                  style={{ '--tw-ring-color': brandOrange }}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2"
                  style={{ '--tw-ring-color': brandOrange }}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <select 
                className="w-full p-4 mb-6 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none"
                onChange={(e) => setFormData({...formData, projectType: e.target.value})}
              >
                <option>General Inquiry</option>
                <option>Roofing</option>
                <option>Waterproofing</option>
                <option>Renovations</option>
                <option>Other</option>
              </select>
              <textarea 
                placeholder="Tell us about your project..."
                className="w-full p-4 mb-6 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none h-32 focus:ring-2"
                style={{ '--tw-ring-color': brandOrange }}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              ></textarea>
              <button 
                type="submit"
                className="w-full py-4 rounded-xl font-extrabold text-white flex items-center justify-center gap-2 hover:opacity-90 transition-all border-none cursor-pointer"
                style={{ backgroundColor: brandDark }}
              >
                Send Message <FaPaperPlane size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}