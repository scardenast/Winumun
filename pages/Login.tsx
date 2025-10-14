import React from 'react';
import { Link } from 'react-router-dom';
import { MailIcon, LockClosedIcon, CheckCircleIcon } from '../components/Icons';

const LoginForm = () => (
    <form className="space-y-6 animate-fade-in">
        <div className="relative">
            <MailIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input type="email" placeholder="Email" required className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal transition-shadow" />
        </div>
        <div className="relative">
            <LockClosedIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input type="password" placeholder="Contraseña" required className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal transition-shadow" />
        </div>
        <div className="flex items-center justify-between">
            <div className="flex items-start">
                <input id="remember-me" type="checkbox" className="h-4 w-4 text-brand-teal focus:ring-brand-teal border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-3 text-sm text-gray-600">Recordarme</label>
            </div>
            <a href="#" className="text-sm font-semibold text-brand-teal hover:underline">¿Olvidaste tu contraseña?</a>
        </div>
        <div>
            <button type="submit" className="w-full bg-brand-deep-blue text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-md text-lg">
                Ingresar
            </button>
        </div>
    </form>
);


const Login: React.FC = () => {
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
                    Bienvenido de Nuevo
                </h1>
                <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
                    Ingresa a tu cuenta para continuar tu camino de bienestar y aprendizaje.
                </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl lg:grid lg:grid-cols-2 overflow-hidden">
                        {/* Left Side: Info & Image */}
                        <div className="relative bg-brand-deep-blue text-white p-8 md:p-12 flex flex-col justify-between">
                             <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{backgroundImage: "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120')"}}></div>
                            <div className="relative z-10">
                                <h2 className="text-4xl font-bold mb-4">Retoma tu Práctica</h2>
                                <p className="text-gray-300 mb-8 max-w-sm">
                                    Estamos felices de verte de nuevo. Continúa explorando las herramientas que te ayudarán a sembrar calma en el aula.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start"><CheckCircleIcon className="w-6 h-6 text-brand-teal mr-3 mt-1 flex-shrink-0" /><span>Acceso a meditaciones y cursos exclusivos.</span></li>
                                    <li className="flex items-start"><CheckCircleIcon className="w-6 h-6 text-brand-teal mr-3 mt-1 flex-shrink-0" /><span>Recursos descargables para tus clases.</span></li>
                                    <li className="flex items-start"><CheckCircleIcon className="w-6 h-6 text-brand-teal mr-3 mt-1 flex-shrink-0" /><span>Soporte de nuestras expertas en bienestar.</span></li>
                                </ul>
                            </div>
                            <div className="relative z-10 mt-8 text-sm text-gray-400">
                                &copy; {new Date().getFullYear()} Winümün. Sembrando conciencia.
                            </div>
                        </div>

                        {/* Right Side: Form */}
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <h3 className="text-3xl font-bold text-brand-deep-blue mb-8 text-center">Iniciar Sesión</h3>
                            <LoginForm />
                            <div className="mt-8 text-center">
                                <p className="text-sm text-gray-600">
                                    ¿No tienes una cuenta? <Link to="/registro" className="font-semibold text-brand-teal hover:underline">Regístrate aquí</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;
