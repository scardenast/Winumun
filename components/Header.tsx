
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MenuIcon, CloseIcon, MailIcon, PhoneIcon, FacebookIcon, InstagramIcon } from './Icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Meditaciones', path: '/meditaciones' },
    { name: 'Sobre Nosotros', path: '/sobre-nosotros' },
    { name: 'Contacto', path: '/contacto' },
  ];
  
  const linkClass = "py-6 border-b-2 border-transparent text-gray-600 hover:text-brand-teal hover:border-brand-teal transition-all duration-300 font-medium text-sm uppercase tracking-wider";
  const activeLinkClass = "text-brand-teal border-brand-teal font-semibold";

  const socialLinks = [
      { href: "https://www.facebook.com/winumun", icon: <FacebookIcon className="w-5 h-5" />, label: "Facebook" },
      { href: "https://www.instagram.com/winumun", icon: <InstagramIcon className="w-5 h-5" />, label: "Instagram" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-brand-beige hidden md:block border-b border-gray-200">
        <div className="container mx-auto px-6 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6 text-gray-600">
            <a href="mailto:yogawinumun@gmail.com" className="flex items-center space-x-2 hover:text-brand-teal transition-colors">
              <MailIcon className="w-4 h-4 text-brand-teal" />
              <span>yogawinumun@gmail.com</span>
            </a>
            <a href="https://wa.me/56976668578" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-brand-teal transition-colors">
              <PhoneIcon className="w-4 h-4 text-brand-teal" />
              <span>+56 9 7666 8578</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            {socialLinks.map(link => (
              <a key={link.label} href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-teal transition-colors">
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/">
          <img 
            src="https://www.winumun.com/wp-content/uploads/2025/07/cropped-232897dd-3f8d-499d-8291-4e116276f79a-197x158.png" 
            alt="Winümün Logo" 
            className="h-14 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => (isActive ? `${linkClass} ${activeLinkClass}` : linkClass)}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:flex items-center">
            <Link to="/login" className="bg-brand-deep-blue text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition-all duration-300 shadow-sm transform hover:-translate-y-0.5">
                Ingresar
            </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Abrir menú" className="p-2">
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 absolute top-full left-0 w-full shadow-lg animate-fade-in">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => (isActive ? `text-brand-teal font-semibold` : `text-gray-600`)}
              >
                {link.name}
              </NavLink>
            ))}
            <Link to="/login" onClick={() => setIsMenuOpen(false)} className="bg-brand-deep-blue text-white font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-all duration-300 mt-4">
              Ingresar
            </Link>
            
            <div className="border-t border-gray-200 w-11/12 my-4"></div>

            <div className="flex items-center space-x-6">
                {socialLinks.map(link => (
                    <a key={link.label} href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-deep-blue transition-colors">
                        {React.cloneElement(link.icon, { className: "w-6 h-6" })}
                    </a>
                ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;