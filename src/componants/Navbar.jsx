import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Helper function to close menu when a link is clicked
  const handleLinkClick = () => setIsOpen(false);

  return (
    <div className='w-full p-3 flex items-center justify-around'>
      <div className='h-full flex items-center justify-around w-full border border-[rgba(255,255,255,0.3)] rounded-2xl p-2'>
        <div className='logo flex z-30 items-center justify-around gap-2'>
            <img className="h-7" src="./photos/video.png" alt="camera" />
            <h1 className='font-bold text-xl text-white'>Daily.Movies</h1>
        </div>
        <div className='md:flex text-gray-50 font-bold hidden flex-row items-center justify-around gap-7'>
            <a href="#">Faviorate</a>
            <a href="#">Saved</a>
            <a href="#">History</a>
            <a href="#">About</a>
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
