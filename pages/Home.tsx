import React from 'react';
import { Link } from 'react-router-dom';
import type { Testimonial, Course } from '../types';
import { PlayIcon, ArrowRightIcon, SimpleArrowRightIcon, ChevronLeftIcon, ChevronRightIcon, CheckCircleIcon, LungsIcon, BrainIcon, HeartIcon, SmileyIcon, StarIcon, ArrowUpRightIcon, UserIcon, MailIcon, PencilIcon, PhoneIcon, QuoteIcon } from '../components/Icons';
import CourseCard from '../components/CourseCard';

const testimonials: Testimonial[] = [
  {
    quote: "Una experiencia increíble. Las profesoras tienen un don para enseñar y crear un ambiente de paz. Totalmente recomendado para cualquier colega que busque herramientas de bienestar para sus alumnos.",
    author: "Marcos Vidal",
    role: "Inspector General",
    rating: 5
  },
  {
    quote: "Asistí a clases de yoga en la academia de Puente Alto. Utilicé ejercicios con mis alumnos de 3º Básico, y el servicio de las profesoras Carolina y Ana Margarita es excelente. Recomiendo la academia.",
    author: "Ana Tejo",
    role: "Profesora de Educación Básica",
    rating: 5
  },
  {
    quote: "La práctica me permitió reducir y canalizar el malestar físico y emocional, potenciando mi salud. Se respeta los ritmos y necesidades individuales de cada persona.",
    author: "Paulina Carrera",
    role: "Alumna",
    rating: 5
  },
  {
    quote: "Las clases fueron una encantadora experiencia, desde la calidez de la sala hasta el conocimiento de las maestras. Se generó un ambiente de aprendizaje y relajación que me permitió integrar la práctica a mi vida.",
    author: "Nicolás Bascolis",
    role: "Alumno",
    rating: 5
  },
  {
    quote: "Winümün ha sido un pilar fundamental en mi desarrollo personal y profesional. Sus enseñanzas van más allá de la esterilla, impactando positivamente en mi día a día. ¡Gracias!",
    author: "Sofía Rojas",
    role: "Psicopedagoga",
    rating: 5
  }
];

const courses: Course[] = [
    {
        id: 1,
        title: "Iniciadores de Clases",
        instructor: "Carolina & Ana",
        imageUrl: "https://www.winumun.com/wp-content/uploads/2025/07/Sin-titulo-1080-x-500-px-1.jpg",
        date: "2024-08-01",
        description: "Herramientas y meditaciones cortas para comenzar cada clase con la mejor energía y enfoque.",
        lessons: 10,
        duration: "3 horas",
        rating: 4.9,
        reviews: 135,
        price: 34990,
        category: "Iniciadores",
        isBestseller: true,
    },
    {
        id: 2,
        title: "Primero y Segundo Básico",
        instructor: "Carolina Martínez",
        imageUrl: "https://www.winumun.com/wp-content/uploads/2025/07/Diseno-sin-titulo-8.jpg",
        date: "2024-07-20",
        description: "Meditaciones guiadas por nuestra Maestra de Meditación y Mindfulness Carolina Martínez en su avatar de IA.",
        lessons: 12,
        duration: "4 horas",
        rating: 4.9,
        reviews: 160,
        price: 42990,
        category: "Básico",
    },
    {
        id: 3,
        title: "Tercero y Cuarto Básico",
        instructor: "Carolina & Ana",
        imageUrl: "https://www.winumun.com/wp-content/uploads/2025/07/Diseno-sin-titulo-7.jpg",
        date: "2024-07-15",
        description: "Ejercicios de mindfulness adaptados para estudiantes de tercer y cuarto básico, fomentando la concentración.",
        lessons: 12,
        duration: "4 horas",
        rating: 4.8,
        reviews: 110,
        price: 42990,
        category: "Básico",
    },
    {
        id: 4,
        title: "Quinto y Sexto Básico",
        instructor: "Carolina & Ana",
        imageUrl: "https://www.winumun.com/wp-content/uploads/2025/07/Diseno-sin-titulo-9.jpg",
        date: "2024-06-10",
        description: "Herramientas para preadolescentes que les ayudarán a gestionar emociones y mejorar su enfoque.",
        lessons: 15,
        duration: "5 horas",
        rating: 4.8,
        reviews: 98,
        price: 52990,
        category: "Intermedio",
    },
    {
        id: 5,
        title: "Séptimo y Octavo Básico",
        instructor: "Equipo Winümün",
        imageUrl: "https://www.winumun.com/wp-content/uploads/2025/07/Diseno-sin-titulo-11.jpg",
        date: "2024-06-01",
        description: "Técnicas de mindfulness para adolescentes, enfocadas en el manejo del estrés y la ansiedad.",
        lessons: 15,
        duration: "5 horas",
        rating: 4.7,
        reviews: 85,
        price: 52990,
        category: "Intermedio",
    },
];

const Home: React.FC = () => {
    const scrollContainer = React.useRef<HTMLDivElement>(null);
    const [activeTab, setActiveTab] = React.useState('aula');
    const [activeTestimonial, setActiveTestimonial] = React.useState(1);

    const handlePrevTestimonial = () => {
        setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const handleNextTestimonial = () => {
        setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const currentTestimonial = testimonials[activeTestimonial];

    const scroll = (direction: 'prev' | 'next') => {
        if (scrollContainer.current) {
            const { clientWidth } = scrollContainer.current;
            const scrollAmount = direction === 'prev' ? -clientWidth * 0.8 : clientWidth * 0.8;
            scrollContainer.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

  return (
    <div className="bg-brand-light-gray">
      {/* Hero Section */}
      <section 
        className="relative bg-brand-beige overflow-hidden"
        style={{
          backgroundImage: "url('https://creativelayers.net/themes/upskill-html/images/page-title/page-title-home5.png')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center md:text-left">
                <span 
                  className="inline-flex items-center bg-white text-brand-teal font-semibold px-4 py-2 rounded-md text-sm mb-6 shadow-sm opacity-0 animate-fade-in-up"
                  style={{ animationDelay: '100ms' }}
                >
                  <SmileyIcon className="h-5 w-5 mr-2" />
                    Sembrando Calma en el Aula
                </span>
                <h1 
                  className="text-5xl md:text-6xl font-bold text-brand-deep-blue mb-6 leading-tight opacity-0 animate-fade-in-up"
                  style={{ animationDelay: '300ms' }}
                >
                    Yoga y Meditación<br/>para el Bienestar Escolar
                </h1>
                <p 
                  className="text-lg text-gray-700 mb-10 max-w-md mx-auto md:mx-0 opacity-0 animate-fade-in-up"
                  style={{ animationDelay: '500ms' }}
                >
                   Transformamos el ambiente educativo con herramientas de mindfulness. Recursos prácticos para escuelas, profesores y alumnos, diseñados por expertas en pedagogía y bienestar.
                </p>
                <div 
                  className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start opacity-0 animate-fade-in-up"
                  style={{ animationDelay: '700ms' }}
                >
                    <Link to="/meditaciones" className="bg-brand-deep-blue text-white font-bold py-4 px-8 rounded-lg hover:bg-opacity-90 transition-all duration-300 text-lg shadow-md inline-flex items-center group">
                        Explorar Cursos 
                        <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
            
            {/* Right Column - Image */}
            <div className="mt-12 md:mt-0 opacity-0 animate-fade-in" style={{ animationDelay: '400ms' }}>
                <div className="relative animate-float">
                    <img 
                      src="https://media.v2.siweb.es/uploaded_thumb_medium/bcd01840794a62916eadf6cdaeb3feee/yoga_ninos_renteria.png" 
                      alt="Niños meditando" 
                      className="w-full h-auto object-contain drop-shadow-2xl"
                    />
                </div>
            </div>
        </div>
      </section>
      
      {/* Why & How Section */}
      <section className="bg-brand-beige py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column: The "Why" */}
            <div className="text-left">
              <h2 className="text-4xl font-bold text-brand-deep-blue mb-6">¿Por qué meditar desde el aula?</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Diversos estudios han comprobado que la meditación ayuda a mejorar el rendimiento escolar, también al desarrollo de la empatía y la mejora del autoconcepto y dadas las actuales problemáticas escolares como la violencia, ciberacoso y el estrés desde las primeras infancias es que se hace imprescindible otorgar tanto a nuestros profesores como a nuestros niños y niñas, herramientas para el desarrollo integral desde sus primeros años de desarrollo de conciencia.
              </p>
               <Link to="/meditaciones" className="bg-brand-teal text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-sm inline-flex items-center">
                Ver Meditaciones
                <SimpleArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </div>
            {/* Right Column: The "How" (Video) */}
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-teal/40 rounded-full filter blur-3xl opacity-70 animate-blob transform-gpu"></div>
              <div className="absolute -bottom-10 -right-5 w-64 h-64 bg-brand-yellow/40 rounded-full filter blur-3xl opacity-70 animate-blob transform-gpu" style={{animationDelay: '2s'}}></div>
              <div className="absolute -bottom-20 left-10 w-56 h-56 bg-brand-light-teal/40 rounded-full filter blur-3xl opacity-70 animate-blob transform-gpu" style={{animationDelay: '4s'}}></div>
              
              <div className="relative bg-white p-2 rounded-xl shadow-2xl z-10">
                <video 
                    className="w-full h-auto rounded-lg"
                    src="https://www.winumun.com/wp-content/uploads/2025/07/Diseno-sin-titulo-1.mp4"
                    title="Metodología Winümün" 
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW Merged & Redesigned Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-deep-blue mb-3">Un Mundo de Posibilidades en Cada Clase</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Descubre cómo nuestras herramientas transforman el aula y potencian el desarrollo integral de cada estudiante.
            </p>
             <div className="w-24 h-1 bg-brand-teal mx-auto mt-4 rounded"></div>
          </div>

          {/* Tab Controls */}
          <div className="flex justify-center mb-12">
            <div className="bg-brand-gray rounded-full p-1.5 flex space-x-2">
              <button
                onClick={() => setActiveTab('aula')}
                className={`py-2.5 px-6 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeTab === 'aula' ? 'bg-brand-teal text-white shadow-md' : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                Herramientas para el Aula
              </button>
              <button
                onClick={() => setActiveTab('alumno')}
                className={`py-2.5 px-6 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeTab === 'alumno' ? 'bg-brand-teal text-white shadow-md' : 'text-gray-600 hover:bg-gray-200'
                }`}
              >
                Desarrollo del Alumno
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div key={activeTab} className="animate-fade-in">
            {activeTab === 'aula' && (
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                {/* Card for Schools */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col transform hover:-translate-y-2 border-t-4 border-brand-teal">
                  <div className="p-8 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-brand-deep-blue mb-4 uppercase tracking-wider">Modelaciones según el requerimiento</h3>
                    <p className="text-gray-600 mb-6 flex-grow">
                      Meditaciones guiadas por los avatar de nuestras Maestras, con variantes según la necesidad de cada clase o profesor.
                    </p>
                    <ul className="space-y-3 text-gray-700 mb-8">
                      <li className="flex items-start"><CheckCircleIcon className="w-6 h-6 text-brand-green mr-3 mt-0.5 flex-shrink-0" /><span>Iniciación de clases.</span></li>
                      <li className="flex items-start"><CheckCircleIcon className="w-6 h-6 text-brand-green mr-3 mt-0.5 flex-shrink-0" /><span>Preparación para evaluaciones.</span></li>
                      <li className="flex items-start"><CheckCircleIcon className="w-6 h-6 text-brand-green mr-3 mt-0.5 flex-shrink-0" /><span>Regulación de grupo curso</span></li>
                    </ul>
                    <div className="mt-auto pt-6">
                      <Link to="/registro" className="w-full text-center bg-brand-teal text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-all duration-300 uppercase block shadow-md">Registro Escuelas</Link>
                    </div>
                  </div>
                </div>

                {/* Card for Teachers */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col transform hover:-translate-y-2 border-t-4 border-brand-yellow">
                  <div className="p-8 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-brand-deep-blue mb-4 uppercase tracking-wider">Meditaciones para responder al contexto</h3>
                    <p className="text-gray-600 mb-6 flex-grow">
                      Meditaciones guiadas por los avatar de nuestras maestras para aplicar SOS según el requerimiento individual o grupal de los alumnos.
                    </p>
                    <ul className="space-y-3 text-gray-700 mb-8">
                      <li className="flex items-start"><CheckCircleIcon className="w-6 h-6 text-brand-green mr-3 mt-0.5 flex-shrink-0" /><span>Yo soy (autopercepción, autovalía)</span></li>
                      <li className="flex items-start"><CheckCircleIcon className="w-6 h-6 text-brand-green mr-3 mt-0.5 flex-shrink-0" /><span>Afirmaciones Positivas (empatía y socialización)</span></li>
                      <li className="flex items-start"><CheckCircleIcon className="w-6 h-6 text-brand-green mr-3 mt-0.5 flex-shrink-0" /><span>Autocuidado y autoamor.</span></li>
                    </ul>
                    <div className="mt-auto pt-6">
                      <Link to="/registro" className="w-full text-center bg-brand-deep-blue text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-all duration-300 uppercase block shadow-md">Registro Profesores</Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'alumno' && (
              <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Card 1: Breathing */}
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl text-center flex flex-col transition-all duration-300 transform hover:-translate-y-2">
                  <div className="mx-auto bg-brand-light-teal rounded-full w-20 h-20 flex items-center justify-center mb-6"><LungsIcon className="w-10 h-10 text-brand-teal" /></div>
                  <h3 className="text-2xl font-bold text-brand-deep-blue mb-4">Respiración consciente.</h3>
                  <p className="text-gray-600 mb-8 flex-grow">Respirar es un acto involuntario pero que al hacerlo de forma programada y conciente cambia la bioquímica de nuestro cerebro.</p>
                  <div className="mt-auto"><Link to="/meditaciones" className="font-semibold text-brand-deep-blue hover:text-brand-teal transition-colors">Saber más</Link></div>
                </div>
                {/* Card 2: Visualizations */}
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl text-center flex flex-col transition-all duration-300 transform hover:-translate-y-2">
                  <div className="mx-auto bg-yellow-100 rounded-full w-20 h-20 flex items-center justify-center mb-6"><BrainIcon className="w-10 h-10 text-brand-yellow" /></div>
                  <h3 className="text-2xl font-bold text-brand-deep-blue mb-4">Visualizaciones</h3>
                  <p className="text-gray-600 mb-8 flex-grow">Con visualizaciones guiadas nuestra imaginación se vuelve nuestro mejor aliado para predisponernos a un mejor ambiente y realidad.</p>
                  <div className="mt-auto"><Link to="/meditaciones" className="font-semibold text-brand-deep-blue hover:text-brand-teal transition-colors">Saber más</Link></div>
                </div>
                {/* Card 3: Affirmations */}
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl text-center flex flex-col transition-all duration-300 transform hover:-translate-y-2">
                  <div className="mx-auto bg-red-100 rounded-full w-20 h-20 flex items-center justify-center mb-6"><HeartIcon className="w-10 h-10 text-brand-pink-text" /></div>
                  <h3 className="text-2xl font-bold text-brand-deep-blue mb-4">Afirmaciones Positivas</h3>
                  <p className="text-gray-600 mb-8 flex-grow">Aprendemos una nueva narrativa para comunicarnos con nosotros mismos y con otros para llevar nuestra vida a su máximo potencial.</p>
                  <div className="mt-auto"><Link to="/meditaciones" className="font-semibold text-brand-deep-blue hover:text-brand-teal transition-colors">Saber más</Link></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="bg-brand-beige py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
                <div>
                    <h2 className="text-4xl font-bold text-brand-deep-blue" style={{letterSpacing: '-0.5px'}}>Nuestros Cursos y Meditaciones Populares</h2>
                    <p className="text-gray-500 mt-2 text-base">Descubre los programas favoritos de nuestra comunidad educativa.</p>
                </div>
                <Link to="/meditaciones" className="font-semibold text-brand-deep-blue hover:text-brand-teal transition-colors flex items-center mt-4 md:mt-0 text-sm whitespace-nowrap group">
                    Ver todos los cursos <SimpleArrowRightIcon className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            <div className="relative">
                <button onClick={() => scroll('prev')} aria-label="Previous Courses" className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition focus:outline-none z-10 hidden md:flex items-center justify-center">
                    <ChevronLeftIcon className="w-6 h-6 text-gray-800" />
                </button>
                <div ref={scrollContainer} className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide space-x-6 py-4 -mx-2 px-2">
                    {courses.map((course) => (
                        <div key={course.id} className="snap-center w-80 flex-shrink-0">
                            <CourseCard course={course} />
                        </div>
                    ))}
                </div>
                <button onClick={() => scroll('next')} aria-label="Next Courses" className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition focus:outline-none z-10 hidden md:flex items-center justify-center">
                    <ChevronRightIcon className="w-6 h-6 text-gray-800" />
                </button>
            </div>

        </div>
      </section>
      
      {/* Testimonials & Contact Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-deep-blue mb-4">Lo que dice nuestra comunidad</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Estamos orgullosos del impacto que generamos. Si tienes preguntas o quieres unirte, no dudes en contactarnos.
            </p>
            <div className="w-24 h-1 bg-brand-teal mx-auto mt-4 rounded"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            
            {/* Left Column: Testimonials */}
            <div className="bg-brand-beige rounded-2xl p-8 lg:p-12 flex flex-col text-center shadow-lg">
              <QuoteIcon className="w-12 h-12 text-brand-teal/30 mx-auto mb-6" />

              {/* Testimonial Content */}
              <div key={activeTestimonial} className="animate-fade-in flex-grow flex flex-col justify-center min-h-[250px]">
                <div className="flex justify-center mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-xl text-brand-deep-blue font-medium leading-relaxed flex-grow">
                  "{currentTestimonial.quote}"
                </blockquote>
                 <div className="mt-8">
                  <p className="text-lg font-bold text-brand-deep-blue">{currentTestimonial.author}</p>
                  <p className="text-gray-500">{currentTestimonial.role}</p>
                </div>
              </div>

              {/* Testimonial Navigation */}
              <div className="flex justify-center items-center gap-6 mt-10">
                <button onClick={handlePrevTestimonial} aria-label="Testimonio anterior" className="p-2 rounded-full hover:bg-black/10 transition-colors">
                  <ChevronLeftIcon className="w-6 h-6 text-brand-deep-blue" />
                </button>
                <div className="flex items-center justify-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTestimonial(index)}
                        aria-label={`Ver testimonio ${index + 1}`}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                            activeTestimonial === index ? 'bg-brand-teal scale-125' : 'bg-gray-400/50 hover:bg-brand-teal/60'
                        }`}
                    />
                  ))}
                </div>
                <button onClick={handleNextTestimonial} aria-label="Siguiente testimonio" className="p-2 rounded-full hover:bg-black/10 transition-colors">
                  <ChevronRightIcon className="w-6 h-6 text-brand-deep-blue" />
                </button>
              </div>

              {/* Review CTA */}
              <div className="mt-12 pt-8 border-t border-brand-teal/20">
                <img 
                  src="https://www.winumun.com/wp-content/uploads/2025/07/cropped-232897dd-3f8d-499d-8291-4e116276f79a-197x158.png"
                  alt="Winümün Logo"
                  className="h-12 w-auto mx-auto mb-4 opacity-70"
                />
                <p className="text-sm text-gray-600 mb-4">¿Te gustó tu experiencia? ¡Nos encantaría saberlo!</p>
                <Link 
                  to="/contacto"
                  className="inline-flex items-center bg-white text-brand-deep-blue font-semibold py-2 px-5 rounded-lg hover:bg-gray-100 transition-colors shadow-sm border border-gray-200"
                >
                  <PencilIcon className="w-4 h-4 mr-2" />
                  Dejar una Reseña
                </Link>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-2xl border border-gray-100 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-brand-deep-blue mb-2">¿Hablemos?</h3>
              <p className="text-gray-600 mb-8">
                Completa el formulario y nuestro equipo se pondrá en contacto contigo.
              </p>
              <form className="space-y-6">
                  <div className="relative">
                      <UserIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input type="text" placeholder="Nombre Completo" required className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal transition-shadow" />
                  </div>
                  <div className="relative">
                      <MailIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input type="email" placeholder="Email" required className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal transition-shadow" />
                  </div>
                   <div className="relative">
                      <PencilIcon className="w-5 h-5 text-gray-400 absolute left-4 top-5" />
                      <textarea placeholder="Tu mensaje..." rows={4} required className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal transition-shadow"></textarea>
                  </div>
                <div>
                  <button type="submit" className="w-full bg-brand-deep-blue text-white font-bold py-4 px-8 rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-md text-lg">
                    Enviar Mensaje
                  </button>
                </div>
              </form>
               <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                    <p className="text-gray-600 mb-4">O contáctanos directamente:</p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <a href="https://wa.me/56976668578" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 font-semibold hover:text-brand-teal transition-colors">
                            <PhoneIcon className="w-5 h-5 text-brand-teal" />
                            <span>WhatsApp</span>
                        </a>
                         <a href="mailto:yogawinumun@gmail.com" className="flex items-center gap-2 text-gray-700 font-semibold hover:text-brand-teal transition-colors">
                            <MailIcon className="w-5 h-5 text-brand-teal" />
                            <span>Email</span>
                        </a>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="relative bg-brand-deep-blue rounded-2xl p-10 md:p-16 overflow-hidden">
                {/* Decorative shapes */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full"></div>
                <div className="absolute top-1/2 -left-20 w-48 h-48 bg-white/5 rounded-lg transform -rotate-45"></div>

                <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-8">
                    <div className="text-center lg:text-left">
                        <h2 className="text-4xl font-bold text-white mb-3">Empieza tu Viaje Hacia el Bienestar</h2>
                        <p className="text-gray-300 max-w-xl">
                            Da el primer paso hacia un aula más calmada y un bienestar integral para tus alumnos y para ti.
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <Link 
                            to="/meditaciones" 
                            className="inline-flex items-center justify-center bg-brand-orange text-white font-bold py-4 px-8 rounded-lg hover:bg-opacity-90 transition-all duration-300 text-lg shadow-md group"
                        >
                            Ver Todos los Cursos
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

export default Home;