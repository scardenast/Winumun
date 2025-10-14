
import React from 'react';
import { Link } from 'react-router-dom';
import { AcademicCapIcon, LightBulbIcon, SparklesIcon, UsersIcon, ArrowUpRightIcon } from '../components/Icons';

const About: React.FC = () => {
  return (
    <div className="bg-white overflow-hidden">
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
            Sobre Nosotros
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Conoce la historia y la misión detrás de Winümün, tu aliado en el bienestar escolar.
          </p>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h2 className="text-4xl font-bold text-brand-deep-blue mb-4 text-center md:text-left">Nuestra Historia</h2>
              <div className="w-24 h-1 bg-brand-teal mx-auto md:mx-0 mb-8 rounded"></div>
              <p className="text-gray-700 leading-relaxed text-lg text-center md:text-left">
                Winümün nació de un sueño compartido: llevar el poder transformador del yoga y la meditación a los corazones y mentes de las nuevas generaciones. Como educadoras y practicantes, vimos la necesidad de crear un espacio de calma y autoconocimiento dentro del entorno escolar. Nuestro viaje comenzó con la convicción de que al nutrir el mundo interior de un niño, le damos las herramientas para navegar la vida con resiliencia, empatía y alegría. Así, unimos nuestra pasión y experiencia para fundar una escuela que no solo enseña posturas, sino que siembra semillas de conciencia para toda la vida.
              </p>
            </div>
            {/* Image */}
            <div className="opacity-0 animate-fade-in-up order-first md:order-last" style={{ animationDelay: '400ms' }}>
              <img 
                src="https://bucket.somosohlala.com.ar/s3fs-public/styles/internal_1250/public/2024-04/yoga-infantil-abre.jpg.webp?itok=gQ5V6uMH"
                alt="Niños practicando yoga en un aula"
                className="rounded-lg shadow-2xl w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founders Section */}
      <section className="py-16 md:py-24 bg-brand-beige">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
             <h2 className="text-4xl font-bold text-brand-deep-blue mb-4">Conoce a las Fundadoras</h2>
             <div className="w-24 h-1 bg-brand-teal mx-auto rounded"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Carolina */}
            <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left opacity-0 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=461"
                alt="Carolina Ines Martinez Pichicona" 
                className="w-48 h-48 rounded-full object-cover shadow-lg flex-shrink-0 border-4 border-white"
              />
              <div>
                <h3 className="text-2xl font-bold text-brand-deep-blue">CAROLINA INES MARTINEZ PICHICONA</h3>
                <p className="font-semibold text-brand-teal mt-1 mb-3">Co-fundadora de Winümün</p>
                <p className="text-gray-600">
                  Yoga Teacher, Terapéuta Holística y Master Coach en meditación y mindfulness. Carolina aporta la profundidad de la práctica contemplativa y su aplicación terapéutica.
                </p>
              </div>
            </div>
            {/* Ana */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 text-center md:text-right opacity-0 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=388"
                alt="Ana Margarita Gayoso Tejo" 
                className="w-48 h-48 rounded-full object-cover shadow-lg flex-shrink-0 border-4 border-white"
              />
              <div>
                <h3 className="text-2xl font-bold text-brand-deep-blue">ANA MARGARITA GAYOSO TEJO</h3>
                <p className="font-semibold text-brand-teal mt-1 mb-3">Co-fundadora de Winümün</p>
                <p className="text-gray-600">
                  Yoga Teacher, Profesora de Danza y Entrenadora de Yoga artístico-deportivo. Ana infunde creatividad, movimiento y estructura pedagógica a cada una de nuestras clases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <h2 className="text-4xl font-bold text-brand-deep-blue mb-4">¿Por qué estudiar con nosotros?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nuestra propuesta de valor está diseñada para impactar positivamente a toda la comunidad educativa.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <div className="bg-brand-light-teal text-brand-teal rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-6">
                <AcademicCapIcon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-brand-deep-blue mb-2">Instructoras Expertas</h3>
              <p className="text-gray-600">Guiado por fundadoras con una profunda trayectoria en yoga, meditación y pedagogía.</p>
            </div>
            {/* Feature 2 */}
            <div className="text-center p-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <div className="bg-brand-light-teal text-brand-teal rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-6">
                <LightBulbIcon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-brand-deep-blue mb-2">Metodología Única</h3>
              <p className="text-gray-600">Programas diseñados específicamente para el contexto escolar, adaptables a cada edad y necesidad.</p>
            </div>
            {/* Feature 3 */}
            <div className="text-center p-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
              <div className="bg-brand-light-teal text-brand-teal rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-6">
                <SparklesIcon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-brand-deep-blue mb-2">Bienestar Integral</h3>
              <p className="text-gray-600">Fomentamos el equilibrio entre mente, cuerpo y emociones para un desarrollo pleno y feliz.</p>
            </div>
            {/* Feature 4 */}
            <div className="text-center p-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
              <div className="bg-brand-light-teal text-brand-teal rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-6">
                <UsersIcon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-brand-deep-blue mb-2">Comunidad Consciente</h3>
              <p className="text-gray-600">Únete a una red de escuelas y educadores comprometidos con la creación de entornos de aprendizaje positivos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
       <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="relative bg-brand-deep-blue rounded-2xl p-10 md:p-16 overflow-hidden">
                {/* Decorative shapes */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full"></div>
                <div className="absolute top-1/2 -left-20 w-48 h-48 bg-white/5 rounded-lg transform -rotate-45"></div>

                <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-8">
                    <div className="text-center lg:text-left">
                        <h2 className="text-4xl font-bold text-white mb-3">Únete a Nuestra Comunidad Consciente</h2>
                        <p className="text-gray-300 max-w-xl">
                            Da el primer paso hacia un aula más calmada y un bienestar integral para tus alumnos y para ti.
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <Link 
                            to="/meditaciones" 
                            className="inline-flex items-center justify-center bg-brand-orange text-white font-bold py-4 px-8 rounded-lg hover:bg-opacity-90 transition-all duration-300 text-lg shadow-md group"
                        >
                            Comenzar Ahora
                            <ArrowUpRightIcon className="w-5 h-5 ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
          </div>
      </section>
    </div>
  );
};

export default About;
