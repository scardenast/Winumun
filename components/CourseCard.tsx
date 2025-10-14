import React from 'react';
import { Link } from 'react-router-dom';
import type { Course } from '../types';
import { StarIcon, CalendarIcon, ClockIcon, ArrowUpRightIcon } from './Icons';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(price);
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col w-full h-full transform hover:-translate-y-1">
      <div className="relative">
        <img src={course.imageUrl} alt={course.title} className="w-full h-48 object-cover" />
        {course.isBestseller && (
            <span className="absolute top-4 left-4 bg-brand-yellow text-yellow-900 text-xs font-semibold px-3 py-1 rounded-md shadow">Más Vendido</span>
        )}
        <div className="absolute top-4 right-4 bg-brand-deep-blue/70 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">{course.category}</div>
      </div>
      <div className="p-5 flex-grow flex flex-col">
        {/* Top Content */}
        <div>
          <h3 className="text-lg font-bold text-brand-deep-blue leading-tight hover:text-brand-teal transition-colors mb-2">
            <Link to={`/curso/${course.id}`}>{course.title}</Link>
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            Por <span className="font-semibold text-gray-800">{course.instructor}</span>
          </p>
        </div>

        {/* Spacer */}
        <div className="flex-grow"></div>

        {/* Bottom Content */}
        <div>
          <div className="flex items-center text-sm mb-4">
              <span className="text-gray-900 font-bold mr-1.5">{course.rating.toFixed(1)}</span>
              <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className={`w-4 h-4 ${i < Math.round(course.rating) ? 'text-yellow-400' : 'text-gray-300'}`} />
                  ))}
              </div>
              <span className="text-gray-500">({course.reviews} reseñas)</span>
          </div>
          <div className="border-t border-gray-200/80 pt-4 flex items-center text-sm text-gray-500 space-x-4">
              <div className="flex items-center">
                  <CalendarIcon className="w-4 h-4 mr-1.5 text-gray-400" />
                  <span>{course.lessons} Lecciones</span>
              </div>
              <div className="flex items-center">
                  <ClockIcon className="w-4 h-4 mr-1.5 text-gray-400" />
                  <span>{course.duration}</span>
              </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200/80 bg-gray-50/50 px-5 py-4">
          <div className="flex justify-between items-center">
              <p className="text-2xl font-bold text-brand-deep-blue">{formatPrice(course.price)}</p>
              <Link to={`/curso/${course.id}`} className="font-semibold text-brand-deep-blue hover:text-brand-teal transition-colors flex items-center text-sm group">
                  Ver curso <ArrowUpRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
              </Link>
          </div>
      </div>
    </div>
  );
};

export default CourseCard;