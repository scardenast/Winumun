
import React from 'react';
import { FacebookIcon, InstagramIcon, PhoneIcon, LocationMarkerIcon } from '../components/Icons';

const Contact: React.FC = () => {
  return (
    <div className="bg-brand-light-gray">
      {/* Hero Section */}
      <section 
        className="bg-brand-beige py-20 md:py-28 text-center"
        style={{
          backgroundImage: "url('https://creativelayers.net/themes/upskill-html/images/page-title/page-title-home5.png')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-6 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-brand-deep-blue">
            Contáctanos
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Estamos aquí para ayudarte a sembrar calma y bienestar en tu comunidad educativa.
          </p>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            
            {/* Location Card */}
            <div className="flex flex-col items-center animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <div className="bg-brand-beige rounded-full p-5 mb-6 inline-block">
                <LocationMarkerIcon className="w-8 h-8 text-brand-deep-blue" />
              </div>
              <h3 className="text-2xl font-bold text-brand-deep-blue mb-2">Nuestra Ubicación</h3>
              <p className="text-gray-600">Pirque y Padre Las Casas</p>
              <p className="text-gray-600">Sede Matriz</p>
            </div>
            
            {/* Contact Info Card */}
            <div className="flex flex-col items-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <div className="bg-brand-beige rounded-full p-5 mb-6 inline-block">
                <PhoneIcon className="w-8 h-8 text-brand-deep-blue" />
              </div>
              <h3 className="text-2xl font-bold text-brand-deep-blue mb-2">Información de Contacto</h3>
              <a href="https://wa.me/56976668578" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-teal transition-colors">+56 9 7666 8578 (WhatsApp)</a>
              <a href="mailto:yogawinumun@gmail.com" className="text-gray-600 hover:text-brand-teal transition-colors">yogawinumun@gmail.com</a>
            </div>

            {/* Social Media Card */}
            <div className="flex flex-col items-center animate-fade-in-up" style={{ animationDelay: '500ms' }}>
               <div className="bg-brand-beige rounded-full p-5 mb-6 inline-block">
                <InstagramIcon className="w-8 h-8 text-brand-deep-blue" />
              </div>
              <h3 className="text-2xl font-bold text-brand-deep-blue mb-2">Síguenos</h3>
              <p className="text-gray-600 mb-3">Búscanos como <strong>winumun</strong> en:</p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/winumun" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-500 hover:text-brand-deep-blue transition-colors">
                  <FacebookIcon className="w-7 h-7" />
                </a>
                <a href="https://www.instagram.com/winumun" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-500 hover:text-brand-deep-blue transition-colors">
                  <InstagramIcon className="w-7 h-7" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-brand-beige py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Image */}
            <div className="rounded-lg overflow-hidden shadow-xl animate-fade-in h-full hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120"
                alt="Woman doing yoga outdoors"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Form */}
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h2 className="text-4xl font-bold text-brand-deep-blue mb-4">¿Cómo podemos ayudarte?</h2>
              <p className="text-gray-600 mb-8">
                ¿Tienes alguna pregunta o comentario? Completa el formulario y nos pondremos en contacto contigo lo antes posible.
              </p>
              <form action="#" method="POST" className="space-y-6">
                <div>
                    <label htmlFor="full-name" className="block text-sm font-semibold text-gray-700 mb-2">Nombre Completo</label>
                    <input type="text" name="full-name" id="full-name" autoComplete="name" required className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal transition-shadow" />
                  </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input type="email" name="email" id="email" autoComplete="email" required className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal transition-shadow" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">Asunto</label>
                  <input type="text" name="subject" id="subject" required className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal transition-shadow" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Mensaje</label>
                  <textarea name="message" id="message" rows={5} required className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal transition-shadow"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full bg-brand-deep-blue text-white font-bold py-4 px-8 rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-md text-lg">
                    Enviar Mensaje
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
