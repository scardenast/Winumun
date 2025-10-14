
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import { DocumentSearchIcon, FilterIcon, ArrowUpRightIcon, ChevronRightIcon } from '../components/Icons';
import type { Course } from '../types';

const coursesData: Course[] = [
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
    description: "En esta sección encontrarás todos los videos disponibles para los pequeños de Primero y segundo básico, meditaciones guiadas por nuestra Maestra de Meditación y Mindfulness Carolina Martínez en su avatar de IA.",
    lessons: 12,
    duration: "4 horas",
    rating: 4.9,
    reviews: 160,
    price: 42990,
    category: "Básico",
    isBestseller: true,
  },
  {
    id: 3,
    title: "Tercero y Cuarto Básico",
    instructor: "Carolina & Ana",
    imageUrl: "https://www.winumun.com/wp-content/uploads/2025/07/Diseno-sin-titulo-7.jpg",
    date: "2024-07-15",
    description: "Meditaciones y ejercicios de mindfulness adaptados para estudiantes de tercer y cuarto básico, fomentando la concentración y la calma.",
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
    description: "Herramientas para preadolescentes que les ayudarán a gestionar emociones y mejorar su enfoque en los estudios.",
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
    description: "Técnicas de mindfulness y meditación para adolescentes, enfocadas en el manejo del estrés y la ansiedad de la etapa escolar.",
    lessons: 15,
    duration: "5 horas",
    rating: 4.7,
    reviews: 85,
    price: 52990,
    category: "Intermedio",
  },
];

const categories = ['Todos', 'Iniciadores', 'Básico', 'Intermedio'];
const instructors = ['Todos', ...Array.from(new Set(coursesData.map(c => c.instructor)))];


const Meditations: React.FC = () => {
  const [sortOption, setSortOption] = useState<'date' | 'title'>('date');
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [activeInstructor, setActiveInstructor] = useState('Todos');
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const filteredAndSortedCourses = useMemo(() => {
    let filtered = coursesData;
    if (activeCategory !== 'Todos') {
      filtered = filtered.filter(course => course.category === activeCategory);
    }
    if (activeInstructor !== 'Todos') {
      filtered = filtered.filter(course => course.instructor === activeInstructor);
    }
    
    return [...filtered].sort((a, b) => {
      if (sortOption === 'title') {
        return a.title.localeCompare(b.title);
      }
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }, [sortOption, activeCategory, activeInstructor]);

  const FilterSidebar = () => (
    <aside className="lg:col-span-1 space-y-8">
      {/* Category Filter */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-brand-deep-blue mb-4">Categorías</h3>
        <ul className="space-y-2">
          {categories.map(category => (
            <li key={category}>
              <button onClick={() => setActiveCategory(category)} className={`w-full text-left px-3 py-2 rounded-md transition-colors text-gray-700 flex justify-between items-center ${activeCategory === category ? 'bg-brand-light-teal text-brand-deep-blue font-semibold' : 'hover:bg-brand-gray'}`}>
                <span>{category}</span>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${activeCategory === category ? 'bg-brand-teal text-white' : 'bg-gray-200 text-gray-600'}`}>
                  {category === 'Todos' ? coursesData.length : coursesData.filter(c => c.category === category).length}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Instructor Filter */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-brand-deep-blue mb-4">Instructores</h3>
        <ul className="space-y-2">
          {instructors.map(instructor => (
            <li key={instructor}>
              <button onClick={() => setActiveInstructor(instructor)} className={`w-full text-left px-3 py-2 rounded-md transition-colors text-gray-700 flex justify-between items-center ${activeInstructor === instructor ? 'bg-brand-light-teal text-brand-deep-blue font-semibold' : 'hover:bg-brand-gray'}`}>
                <span>{instructor}</span>
                 <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${activeInstructor === instructor ? 'bg-brand-teal text-white' : 'bg-gray-200 text-gray-600'}`}>
                  {instructor === 'Todos' ? coursesData.length : coursesData.filter(c => c.instructor === instructor).length}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );

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
            Cursos y Meditaciones
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Explora nuestro archivo de cursos y meditaciones diseñados para la comunidad escolar.
          </p>
          <div className="mt-6 text-sm text-gray-500">
            <Link to="/" className="hover:text-brand-teal">Inicio</Link> &gt; <span>Meditaciones</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="lg:grid lg:grid-cols-4 lg:gap-12">
          
          {/* Desktop Sidebar */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-28">
              <FilterSidebar />
            </div>
          </div>
          
          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Top Bar with Sort & Mobile Filter Toggle */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <button onClick={() => setIsFiltersOpen(!isFiltersOpen)} className="lg:hidden flex items-center gap-2 text-brand-deep-blue font-semibold">
                    <FilterIcon className="w-5 h-5" />
                    <span>Mostrar Filtros</span>
                </button>
                <p className="text-gray-600 text-sm font-medium">
                    Mostrando <span className="font-bold text-brand-deep-blue">{filteredAndSortedCourses.length}</span> de <span className="font-bold text-brand-deep-blue">{coursesData.length}</span> cursos
                </p>
                <div className="flex items-center space-x-2 flex-shrink-0">
                    <span className="text-gray-700 font-semibold text-sm">Ordenar por:</span>
                    <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value as 'date' | 'title')}
                    className="border-gray-300 rounded-md shadow-sm focus:border-brand-teal focus:ring focus:ring-brand-teal focus:ring-opacity-50 transition text-sm py-2 pl-3 pr-8"
                    >
                    <option value="date">Más Recientes</option>
                    <option value="title">Título (A-Z)</option>
                    </select>
                </div>
            </div>

            {/* Mobile Filters */}
            {isFiltersOpen && (
                <div className="lg:hidden mb-8 animate-fade-in">
                    <FilterSidebar />
                </div>
            )}
            
            {/* Courses Grid */}
            {filteredAndSortedCourses.length > 0 ? (
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
                    {filteredAndSortedCourses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 animate-fade-in bg-white rounded-lg shadow-md">
                    <DocumentSearchIcon className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                    <h3 className="text-2xl font-bold text-brand-deep-blue">No se encontraron cursos</h3>
                    <p className="text-gray-600 mt-2">Intenta modificar tus filtros o revisa más tarde.</p>
                </div>
            )}
          </div>
        </div>
      </div>
      
      {/* CTA Banner Section */}
      <section className="container mx-auto px-6 pb-16 md:pb-24">
        <div className="relative bg-brand-deep-blue rounded-2xl p-10 md:p-16 overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full"></div>
            <div className="absolute top-1/2 -left-20 w-48 h-48 bg-white/5 rounded-lg transform -rotate-45"></div>
            <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-8">
                <div className="text-center lg:text-left">
                    <h2 className="text-4xl font-bold text-white mb-3">¿Necesitas un Plan Personalizado?</h2>
                    <p className="text-gray-300 max-w-xl">
                        Ofrecemos planes especiales para escuelas e instituciones. Contáctanos para crear una solución a la medida de tus necesidades.
                    </p>
                </div>
                <div className="flex-shrink-0">
                    <Link 
                        to="/contacto" 
                        className="inline-flex items-center justify-center bg-brand-orange text-white font-bold py-4 px-8 rounded-lg hover:bg-opacity-90 transition-all duration-300 text-lg shadow-md group"
                    >
                        Contactar Ahora
                        <ArrowUpRightIcon className="w-5 h-5 ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Meditations;
