import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'JYOTIKA JAISWAL',
    position: 'Alumnus',
    message:
      "The achievements of the students in this college never cease to amaze me. I'm proud to be a graduate of such a prestigious institution.",
  },
  {
    name: 'Dr S. Geetha',
    position: 'Faculty',
    message:
      "It's truly inspiring to see the level of dedication and talent exhibited by the students in this college. I feel privileged to be part of such a vibrant community.",
  },
  {
    name: 'Shabbir Ali',
    position: 'Parent',
    message:
      'As a parent, I could not be happier with the education and opportunities that my child has received at this college. The achievements of the students are a testament to the quality of the education and the commitment of the faculty and staff.',
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900">Testimonials</h2>
        <div className="mt-8 space-y-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <blockquote className="mt-4">
                <div className="text-2xl leading-9 font-medium text-gray-900">
                  {testimonial.message}
                </div>
              </blockquote>
              <cite className="mt-4 block font-semibold text-gray-900">
                {testimonial.name}
              </cite>
              <div className="text-gray-500">{testimonial.position}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
