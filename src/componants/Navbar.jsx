import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Helper function to close menu when a link is clicked
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className=" text-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Section */}
          <div>
            <a href="#" className="text-xl font-bold tracking-wider">
              MyBrand
            </a>
          </div>

          {/* Desktop Navigation Links */}
          {/* hidden by default, flex layout applied from medium (md) screens and up */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-blue-400 transition-colors duration-200">Home</a>
            <a href="#about" className="hover:text-blue-400 transition-colors duration-200">About</a>
            <a href="#services" className="hover:text-blue-400 transition-colors duration-200">Services</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors duration-200">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          {/* visible by default, hidden on medium (md) screens and up */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-slate-800 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Dynamic Hamburger / X Icon using pure Tailwind lines */}
              <div className="w-6 h-6 flex flex-col justify-around justify-items-center relative">
                <span className={`w-6 h-0.5 bg-current transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-6 h-0.5 bg-current transition-all duration-200 ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`w-6 h-0.5 bg-current transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {/* Uses absolute/hidden classes driven by state, disappears on 'md:' screens */}
      <div 
        className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-slate-800 border-t border-slate-700`} 
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 flex flex-col">
          <a href="#home" onClick={handleLinkClick} className="hover:bg-slate-700 px-3 py-2 rounded-md block">Home</a>
          <a href="#about" onClick={handleLinkClick} className="hover:bg-slate-700 px-3 py-2 rounded-md block">About</a>
          <a href="#services" onClick={handleLinkClick} className="hover:bg-slate-700 px-3 py-2 rounded-md block">Services</a>
          <a href="#contact" onClick={handleLinkClick} className="hover:bg-slate-700 px-3 py-2 rounded-md block">Contact</a>
        </div>
      </div>
    </nav>
  );
}
