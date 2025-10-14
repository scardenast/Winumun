import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { Course } from '../types';
import { StarIcon, CheckCircleIcon, PlayIcon, VideoCameraIcon, DownloadIcon, InfinityIcon, TrophyIcon, ChevronDownIcon, ChevronUpIcon, ChevronLeftIcon, ArrowUpRightIcon } from '../components/Icons';
import CourseCard from '../components/CourseCard';

// Mock data - in a real app, this would come from a data source or API
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

// Invented detailed data for one course
const courseDetails = {
    id: 1,
    lastUpdated: 'Agosto 2024',
    whatYoullLearn: [
        'Técnicas de respiración para calmar la mente en segundos.',
        'Meditaciones guiadas cortas para iniciar el día con foco.',
        'Ejercicios de mindfulness para mejorar la atención en el aula.',
        'Cómo crear un ambiente de aprendizaje positivo y tranquilo.',
        'Estrategias para gestionar el estrés antes de las evaluaciones.'
    ],
    curriculum: [
        {
            title: 'Módulo 1: La Magia de la Respiración',
            lessons: [
                'Introducción a la respiración consciente',
                'Técnica de la respiración de la abeja',
                'Respiración abdominal para la calma',
                'Juego: Inflando el globo imaginario',
            ]
        },
        {
            title: 'Módulo 2: Despertando los Sentidos',
            lessons: [
                'Mindfulness auditivo: La campana tibetana',
                'Atención plena al comer: El ejercicio de la pasa',
                'Escaneo corporal para niños',
            ]
        },
        {
            title: 'Módulo 3: Visualizaciones para Empezar el Día',
            lessons: [
                'Viaje a tu lugar seguro',
                'El árbol de la confianza',
                'Llenando el cuerpo de luz y energía',
            ]
        }
    ],
    instructor: {
        name: 'Carolina & Ana',
        bio: 'Carolina Ines Martinez y Ana Margarita Gayoso son las co-fundadoras de Winümün. Con décadas de experiencia combinada en yoga, meditación, danza y pedagogía, han desarrollado una metodología única para integrar el bienestar en el sistema educativo, transformando aulas y vidas a través de la conciencia plena.',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=461'
    }
};

const AccordionItem: React.FC<{ title: string; lessons: string[]; isOpen: boolean; onClick: () => void; }> = ({ title, lessons, isOpen, onClick }) => (
    <div className="border-b border-gray-200">
        <button onClick={onClick} className="w-full flex justify-between items-center text-left py-4 px-6 focus:outline-none">
            <h3 className="text-lg font-semibold text-brand-deep-blue">{title}</h3>
            {isOpen ? <ChevronUpIcon className="w-6 h-6 text-brand-teal" /> : <ChevronDownIcon className="w-6 h-6 text-gray-500" />}
        </button>
        {isOpen && (
            <div className="bg-gray-50 px-6 py-4">
                <ul className="space-y-3">
                    {lessons.map((lesson, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                            <PlayIcon className="w-4 h-4 mr-3 text-brand-teal" />
                            <span>{lesson}</span>
                        </li>
                    ))}
                </ul>
            </div>
        )}
    </div>
);


const CourseDetail: React.FC = () => {
    const { id } = useParams();
    const course = coursesData.find(c => c.id.toString() === id);
    const [openSection, setOpenSection] = useState<number | null>(0);
    
    const toggleSection = (index: number) => {
        setOpenSection(openSection === index ? null : index);
    };

    if (!course) {
        return <div className="text-center py-20">Curso no encontrado.</div>;
    }

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(price);
    };

    const relatedCourses = coursesData.filter(c => c.id !== course.id && c.category === course.category).slice(0, 3);

    return (
        <div className="bg-white">
            {/* Header Section */}
            <header className="bg-brand-deep-blue text-white py-12">
                <div className="container mx-auto px-6">
                    <p className="text-brand-teal font-semibold mb-2">
                        <Link to="/meditaciones" className="hover:underline">Cursos</Link> &gt; {course.category}
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
                    <p className="text-lg text-gray-300 max-w-3xl mb-6">{course.description}</p>
                    <div className="flex items-center space-x-4">
                        {course.isBestseller && <span className="bg-brand-yellow text-yellow-900 text-xs font-semibold px-3 py-1 rounded-md">Más Vendido</span>}
                        <div className="flex items-center">
                            <span className="text-yellow-400 font-bold mr-1">{course.rating.toFixed(1)}</span>
                            <div className="flex text-yellow-400 mr-2">
                                {[...Array(5)].map((_, i) => (
                                    <StarIcon key={i} className={`w-4 h-4 ${i < Math.round(course.rating) ? 'text-yellow-400' : 'text-gray-300'}`} />
                                ))}
                            </div>
                            <span className="text-gray-400 text-sm">({course.reviews} reseñas)</span>
                        </div>
                    </div>
                    <p className="mt-4 text-sm text-gray-400">Creado por <span className="font-semibold text-white">{course.instructor}</span> | Última actualización: {courseDetails.lastUpdated}</p>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-6 py-12">
                <div className="lg:grid lg:grid-cols-3 lg:gap-12">
                    {/* Left/Main Column */}
                    <div className="lg:col-span-2">
                        {/* What you'll learn */}
                        <div className="border border-gray-200 rounded-lg p-8 mb-10">
                            <h2 className="text-2xl font-bold text-brand-deep-blue mb-4">Lo que aprenderás</h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                {courseDetails.whatYoullLearn.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircleIcon className="w-6 h-6 text-brand-green mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Course Curriculum */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-brand-deep-blue mb-4">Contenido del curso</h2>
                            <div className="border border-gray-200 rounded-lg overflow-hidden">
                                {courseDetails.curriculum.map((section, index) => (
                                     <AccordionItem
                                        key={index}
                                        title={section.title}
                                        lessons={section.lessons}
                                        isOpen={openSection === index}
                                        onClick={() => toggleSection(index)}
                                     />
                                ))}
                            </div>
                        </div>

                        {/* Instructor */}
                        <div className="mb-10">
                             <h2 className="text-2xl font-bold text-brand-deep-blue mb-4">Instructoras</h2>
                             <div className="flex items-center gap-4">
                                 <img src={courseDetails.instructor.avatar} alt={courseDetails.instructor.name} className="w-24 h-24 rounded-full object-cover"/>
                                 <div>
                                     <h3 className="font-bold text-xl text-brand-teal">{courseDetails.instructor.name}</h3>
                                     <p className="text-gray-600 mt-2">{courseDetails.instructor.bio}</p>
                                 </div>
                             </div>
                        </div>
                    </div>

                    {/* Right/Sidebar Column */}
                    <aside className="lg:col-span-1 relative">
                        <div className="sticky top-28">
                            <div className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
                                <div className="relative">
                                    <img src={course.imageUrl} alt={course.title} className="w-full h-56 object-cover" />
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                         <button className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/50 transition-colors">
                                             <PlayIcon className="w-10 h-10 text-white ml-1" />
                                         </button>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-4xl font-bold text-brand-deep-blue mb-4">{formatPrice(course.price)}</p>
                                    <button className="w-full bg-brand-orange text-white font-bold py-4 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-md text-lg">
                                        Empezar el Aprendizaje
                                    </button>
                                    <p className="text-xs text-gray-500 text-center mt-3">Garantía de devolución de 30 días</p>
                                    
                                    <div className="mt-6">
                                        <h4 className="font-bold text-brand-deep-blue mb-3">Este curso incluye:</h4>
                                        <ul className="space-y-2 text-sm text-gray-600">
                                            <li className="flex items-center"><VideoCameraIcon className="w-5 h-5 mr-3 text-gray-500" /> {course.duration} de video bajo demanda</li>
                                            <li className="flex items-center"><DownloadIcon className="w-5 h-5 mr-3 text-gray-500" /> Recursos descargables</li>
                                            <li className="flex items-center"><InfinityIcon className="w-5 h-5 mr-3 text-gray-500" /> Acceso de por vida</li>
                                            <li className="flex items-center"><TrophyIcon className="w-5 h-5 mr-3 text-gray-500" /> Certificado de finalización</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>

            {/* Related Courses */}
            {relatedCourses.length > 0 && (
                <section className="bg-brand-beige py-16">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-brand-deep-blue mb-8 text-center">Cursos Relacionados</h2>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {relatedCourses.map(relatedCourse => (
                                <CourseCard key={relatedCourse.id} course={relatedCourse} />
                            ))}
                        </div>
                        <div className="mt-12 text-center">
                            <Link 
                                to="/meditaciones" 
                                className="inline-flex items-center bg-brand-deep-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-sm"
                            >
                                <ChevronLeftIcon className="w-5 h-5 mr-2" />
                                Volver a Cursos
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="relative bg-brand-deep-blue rounded-2xl p-10 md:p-16 overflow-hidden">
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full"></div>
                        <div className="absolute top-1/2 -left-20 w-48 h-48 bg-white/5 rounded-lg transform -rotate-45"></div>
                        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-8 text-center lg:text-left">
                            <div>
                                <h2 className="text-4xl font-bold text-white mb-3">¿Listo para transformar tu aula?</h2>
                                <p className="text-gray-300 max-w-xl">
                                    Explora todos nuestros cursos y encuentra las herramientas perfectas para sembrar calma y bienestar en tu comunidad educativa.
                                </p>
                            </div>
                            <div className="flex-shrink-0">
                                <Link 
                                    to="/meditaciones" 
                                    className="inline-flex items-center justify-center bg-brand-orange text-white font-bold py-4 px-8 rounded-lg hover:bg-opacity-90 transition-all duration-300 text-lg shadow-md group"
                                >
                                    Explorar Todos los Cursos
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

export default CourseDetail;
