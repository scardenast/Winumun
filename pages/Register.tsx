
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserIcon, MailIcon, LockClosedIcon, BuildingOfficeIcon, PhoneIcon, CheckCircleIcon } from '../components/Icons';

const TeacherRegisterForm = () => (
    <form className="space-y-6 animate-fade-in">
        <div className="relative">
            <UserIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input type="text" placeholder="Nombre Completo" required className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal transition-shadow" />
        </div>
        <div className="relative">
            <MailIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input type="email" placeholder="Email" required className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal transition-shadow" />
        </div>
        <div className="relative">
            <LockClosedIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input type="password" placeholder="Contraseña" required className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal transition-shadow" />
        </div>
        <div className="relative">
            <LockClosedIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input type="password" placeholder="Confirmar Contraseña" required className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal transition-shadow" />
        </div>
        <div className="flex items-start">
            <input id="terms-teacher" type="checkbox" className="h-4 w-4 text-brand-teal focus:ring-brand-teal border-gray-300 rounded mt-1" />
            <label htmlFor="terms-teacher" className="ml-3 text-sm text-gray-600">Acepto los <a href="#" className="font-semibold text-brand-teal hover:underline">Términos y Condiciones</a></label>
        </div>
        <div>
            <button type="submit" className="w-full bg-brand-deep-blue text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-md text-lg">
                Crear Cuenta de Profesor
            </button>
        </div>
    </form>
);

const SchoolRegisterForm = () => (
    <form className="space-y-6 animate-fade-in">
        <div className="relative">
            <BuildingOfficeIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input type="text" placeholder="Nombre de la Escuela" required className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal transition-shadow" />
        </div>
        <div className="relative">
            <UserIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input type="text" placeholder="Nombre del Contacto" required className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal transition-shadow" />
        </div>
        <div className="relative">
            <MailIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input type="email" placeholder="Email del Contacto" required className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal transition-shadow" />
        </div>
         <div className="relative">
            <LockClosedIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input type="password" placeholder="Contraseña" required className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal transition-shadow" />
        </div>
        <div className="flex items-start">
            <input id="terms-school" type="checkbox" className="h-4 w-4 text-brand-teal focus:ring-brand-teal border-gray-300 rounded mt-1" />
            <label htmlFor="terms-school" className="ml-3 text-sm text-gray-600">Acepto los <a href="#" className="font-semibold text-brand-teal hover:underline">Términos y Condiciones</a></label>
        </div>
        <div>
            <button type="submit" className="w-full bg-brand-teal text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-md text-lg">
                Crear Cuenta de Escuela
            </button>
        </div>
    </form>
);

const Register: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'teacher' | 'school'>('teacher');

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
                    Únete a la Comunidad
                </h1>
                <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
                    Crea tu cuenta para acceder a un mundo de recursos de bienestar para tu comunidad educativa.
                </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl lg:grid lg:grid-cols-2 overflow-hidden">
                        {/* Left Side: Info & Image */}
                        <div className="relative bg-brand-deep-blue text-white p-8 md:p-12 flex flex-col justify-between order-last lg:order-first">
                             <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{backgroundImage: "url('https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=3774')"}}></div>
                            <div className="relative z-10">
                                <h2 className="text-4xl font-bold mb-4">Bienvenido a Winümün</h2>
                                <p className="text-gray-300 mb-8 max-w-sm">
                                    Al registrarte, obtendrás acceso a herramientas diseñadas para sembrar calma, foco y bienestar en el aula.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start"><CheckCircleIcon className="w-6 h-6 text-brand-teal mr-3 mt-1 flex-shrink-0" /><span>Acceso a meditaciones y cursos exclusivos.</span></li>
                                    <li className="flex items-start"><CheckCircleIcon className="w-6 h-6 text-brand-teal mr-3 mt-1 flex-shrink-0" /><span>Recursos descargables para tus clases.</span></li>
                                    <li className="flex items-start"><CheckCircleIcon className="w-6 h-6 text-brand-teal mr-3 mt-1 flex-shrink-0" /><span>Soporte de nuestras expertas en bienestar.</span></li>
                                    <li className="flex items-start"><CheckCircleIcon className="w-6 h-6 text-brand-teal mr-3 mt-1 flex-shrink-0" /><span>Una comunidad de educadores conscientes.</span></li>
                                </ul>
                            </div>
                            <div className="relative z-10 mt-8 text-sm text-gray-400">
                                &copy; {new Date().getFullYear()} Winümün. Sembrando conciencia.
                            </div>
                        </div>

                        {/* Right Side: Form */}
                        <div className="p-8 md:p-12">
                            <div className="mb-8">
                                <div className="bg-brand-gray rounded-full p-1.5 flex">
                                    <button
                                        onClick={() => setActiveTab('teacher')}
                                        className={`w-1/2 py-2.5 px-4 rounded-full text-sm font-bold transition-all duration-300 ${
                                        activeTab === 'teacher' ? 'bg-brand-teal text-white shadow' : 'text-gray-600 hover:bg-gray-200'
                                        }`}
                                    >
                                        Soy Profesor
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('school')}
                                        className={`w-1/2 py-2.5 px-4 rounded-full text-sm font-bold transition-all duration-300 ${
                                        activeTab === 'school' ? 'bg-brand-deep-blue text-white shadow' : 'text-gray-600 hover:bg-gray-200'
                                        }`}
                                    >
                                        Soy Escuela
                                    </button>
                                </div>
                            </div>
                            
                            {activeTab === 'teacher' ? <TeacherRegisterForm /> : <SchoolRegisterForm />}

                            <div className="mt-8 text-center">
                                <p className="text-sm text-gray-600">
                                    ¿Ya tienes una cuenta? <Link to="/login" className="font-semibold text-brand-teal hover:underline">Ingresa aquí</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;