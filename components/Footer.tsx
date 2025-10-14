
import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-deep-blue text-white">
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="mb-8 md:mb-0">
            <img 
              src="https://www.winumun.com/wp-content/uploads/2025/07/cropped-232897dd-3f8d-499d-8291-4e116276f79a-197x158.png"
              alt="Winümün Logo"
              className="h-16 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-400 mb-4">
              Escuela de Yoga y Meditación online. Recursos para escuelas, profesores y alumnos.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/winumun" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><FacebookIcon /></a>
              <a href="#" className="text-gray-400 hover:text-white"><TwitterIcon /></a>
              <a href="https://www.instagram.com/winumun" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><InstagramIcon /></a>
              <a href="#" className="text-gray-400 hover:text-white"><LinkedinIcon /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Inicio</Link></li>
              <li><Link to="/meditaciones" className="text-gray-400 hover:text-white transition-colors">Meditaciones</Link></li>
              <li><Link to="/sobre-nosotros" className="text-gray-400 hover:text-white transition-colors">Sobre Nosotros</Link></li>
              <li><Link to="/contacto" className="text-gray-400 hover:text-white transition-colors">Contacto</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidad</a></li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="font-bold text-lg mb-4">Suscríbete</h4>
            <p className="text-gray-400 mb-4">Recibe nuestras últimas noticias y artículos en tu bandeja de entrada.</p>
            <form>
              <div className="flex">
                <input type="email" placeholder="Tu e-mail" className="bg-gray-800 text-white w-full py-2 px-3 rounded-l-md focus:outline-none" />
                <button type="submit" className="bg-brand-teal text-white font-bold py-2 px-4 rounded-r-md hover:bg-opacity-80 transition-all">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Winümün Escuela de Yoga Y Meditación. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
